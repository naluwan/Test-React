import React, { useRef } from 'react'

const formStyle = {
  display: "flex",
  justifyContent: "center"
}

const InputForm = () => {
  const accountRef = useRef(undefined)
  const passwordRef = useRef(undefined)

  const refArr = useRef([accountRef, passwordRef])

  return (
    <>
      <input type="text" name="account" ref={accountRef} />
      <input type="text" name="password" ref={passwordRef} />
      <button
        onClick={() => {
          refArr.current.forEach((item) => {
            console.log(item.current.name + ' is ' + item.current.value)
          })
        }}
      >
        submit
      </button>
    </>
  )
}

export default InputForm
