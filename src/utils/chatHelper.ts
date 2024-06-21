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

export function getUserPortraitPath(user: string) {
  if (user === 'doctor') {
    return '/user_doctor.jpg'
  }
  if (user === 'nurse') {
    return '/user_nurse.jpg'
  }
  if (user === 'patient') {
    return '/user_patient.jpg'
  }
  return undefined
}
