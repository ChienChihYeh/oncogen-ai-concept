import { mockDialogDoctor, mockDialogPatient, mockDialogNurse } from '@/data/mockDialog'

export function getDialog(user: string) {
  if (user === 'doctor') {
    return mockDialogDoctor
  }
  if (user === 'patient') {
    return mockDialogPatient
  }
  if (user === 'nurse') {
    return mockDialogNurse
  }
  return []
}
