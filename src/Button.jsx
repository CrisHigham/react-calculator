

function Button(props) {

  return (
    <>
      <div className="bg-slate-200 aspect-square m-4">
          <p className="justify-center">{props.text}</p>
      </div>
    </>
  )
}

export default Button
