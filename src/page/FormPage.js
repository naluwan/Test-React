import React, { lazy, Suspense } from 'react'
const InputForm = lazy(() => import('../component/InputForm'))

const FormPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InputForm />
    </Suspense>
  )
}

export default FormPage
