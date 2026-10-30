/**
 * Firestore Security Rules Test Specification (Dirty Dozen Verification)
 */
export interface DirtyDozenTestCase {
  id: number;
  name: string;
  operation: 'get' | 'list' | 'create' | 'update' | 'delete';
  path: string;
  auth: { uid: string; email_verified: boolean } | null;
  payload?: Record<string, unknown>;
  expectedResult: 'PERMISSION_DENIED';
}

export const DIRTY_DOZEN_TESTS: DirtyDozenTestCase[] = [
  {
    id: 1,
    name: 'Unauthenticated Profile Read',
    operation: 'get',
    path: '/users/user_1',
    auth: null,
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 2,
    name: 'Unverified Email Profile Create',
    operation: 'create',
    path: '/users/user_1',
    auth: { uid: 'user_1', email_verified: false },
    payload: { uid: 'user_1', displayName: 'Budi' },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 3,
    name: 'Cross-User Profile Read',
    operation: 'get',
    path: '/users/user_1',
    auth: { uid: 'user_2', email_verified: true },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 4,
    name: 'UID Spoofing on Profile Create',
    operation: 'create',
    path: '/users/user_1',
    auth: { uid: 'user_1', email_verified: true },
    payload: { uid: 'user_2', displayName: 'Spoof' },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 5,
    name: 'Shadow Field Injection on Profile Update',
    operation: 'update',
    path: '/users/user_1',
    auth: { uid: 'user_1', email_verified: true },
    payload: { isAdmin: true },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 6,
    name: 'Immutable createdAt Tampering on Update',
    operation: 'update',
    path: '/users/user_1',
    auth: { uid: 'user_1', email_verified: true },
    payload: { createdAt: '2020-01-01T00:00:00Z' },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 7,
    name: 'Forged Client Timestamp on Create',
    operation: 'create',
    path: '/users/user_1',
    auth: { uid: 'user_1', email_verified: true },
    payload: { updatedAt: '2099-01-01T00:00:00Z' },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 8,
    name: 'Oversized String Denial of Wallet',
    operation: 'update',
    path: '/users/user_1',
    auth: { uid: 'user_1', email_verified: true },
    payload: { myMarga: 'A'.repeat(500) },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 9,
    name: 'Invalid Gender Enum Value',
    operation: 'update',
    path: '/users/user_1',
    auth: { uid: 'user_1', email_verified: true },
    payload: { myGender: 'Unknown' },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 10,
    name: 'Orphaned Subcollection Write Without Parent',
    operation: 'create',
    path: '/users/user_no_profile/lexicon/entry_1',
    auth: { uid: 'user_no_profile', email_verified: true },
    payload: { ownerId: 'user_no_profile', simalungun: 'Horas', indonesian: 'Halo' },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 11,
    name: 'ID Poisoning on Lexicon Entry',
    operation: 'create',
    path: '/users/user_1/lexicon/bad$id!@#',
    auth: { uid: 'user_1', email_verified: true },
    payload: { ownerId: 'user_1', simalungun: 'Horas', indonesian: 'Halo' },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 12,
    name: 'Cross-User Subcollection List Scraping',
    operation: 'list',
    path: '/users/user_1/translations',
    auth: { uid: 'user_2', email_verified: true },
    expectedResult: 'PERMISSION_DENIED',
  },
];
