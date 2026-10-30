# Firestore Security Specification (`security_spec.md`)

## 1. Data Invariants
1. **Default-Deny Global Gate**: All paths not explicitly matched are unconditionally denied (`allow read, write: if false;`).
2. **Strict Owner Isolation & Verified Email**: Every document under `/users/{userId}` and its subcollections (`/lexicon/{entryId}`, `/translations/{cacheId}`) can only be read or mutated by the authenticated user whose `request.auth.uid == userId` and `request.auth.token.email_verified == true`.
3. **Master Gate Relational Sync**: Subcollection documents in `/users/{userId}/lexicon/{entryId}` and `/users/{userId}/translations/{cacheId}` require that the parent `/users/{userId}` document exists (`exists(...)`) and that its `uid == request.auth.uid`.
4. **Strict Schema & Anti-Update-Gap**: Every `create` and `update` operation validates exact keys (`hasAll` and `hasOnly`), string length bounds, enum constraints, and `affectedKeys().hasOnly(...)`.
5. **Temporal & Identity Immutability**: `uid`, `ownerId`, and `createdAt` are immutable on `update`; `createdAt` (on create) and `updatedAt` (on create/update) must equal `request.time`.

## 2. The "Dirty Dozen" Payloads
1. **Unauthenticated Profile Read**: `auth = null` attempting `get /users/user_1`.
2. **Unverified Email Write**: `auth = { uid: 'user_1', email_verified: false }` attempting `create /users/user_1`.
3. **Cross-User PII Read**: `auth = { uid: 'user_2', email_verified: true }` attempting `get /users/user_1`.
4. **UID Spoofing on Profile Create**: `auth = { uid: 'user_1', email_verified: true }` creating `/users/user_1` with `{ uid: 'user_2', ... }`.
5. **Shadow Field Injection on Profile Update**: Adding `{ isAdmin: true }` to `/users/user_1`.
6. **Immutable `createdAt` Tampering on Update**: Modifying `createdAt` during an update to `/users/user_1`.
7. **Forged Client Timestamp (`updatedAt != request.time`)**: Sending a past/future timestamp for `updatedAt`.
8. **Oversized String Denial-of-Wallet**: Sending a 5,000-character string in `myMarga` (exceeding `maxLength: 100`).
9. **Invalid Gender Enum**: Setting `myGender: 'InvalidValue'` on `/users/user_1`.
10. **Orphaned Subcollection Write**: Creating `/users/user_1/lexicon/entry_1` when `/users/user_1` does not exist.
11. **ID Poisoning Attack**: Creating `/users/user_1/lexicon/bad$id!@#` with invalid characters.
12. **Unauthorized List Query on Subcollection**: `auth = { uid: 'user_2', email_verified: true }` listing `/users/user_1/translations`.
