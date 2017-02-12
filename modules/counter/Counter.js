export default (props) => {
  console.log('my props are:', props)
  return (
    <div>
      <h1>This is the Counter Component</h1>
      <h1>{props.count}</h1>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
    </div>
  )
}
