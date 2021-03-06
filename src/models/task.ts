import {
  FieldValue,
  IdAndRef,
  serverTimestamp,
  Timestamp,
} from '../firebaseApp';

export type Data = {
  description: string;
  category: string | null;
  estimatedMinutes: number | null;
  requiredSeconds: number;
  createdAt: Timestamp | FieldValue;
  updatedAt: Timestamp | FieldValue;
  completedAt: Timestamp | FieldValue | null;
};

export type Model = Data & IdAndRef;

export const getDefaultData = (): Data => ({
  description: '',
  category: null,
  estimatedMinutes: null,
  requiredSeconds: 0,
  createdAt: serverTimestamp(),
  updatedAt: serverTimestamp(),
  completedAt: null,
});
