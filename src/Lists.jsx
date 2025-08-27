function Lists() {
    const list = [1, 2, 3, 4, 5]
  return(
    <div>Lists
        {list.map((item) => (
            <p key={item.toString()}>{item}</p>
        ))}
        

    </div>
  )
}
export default Lists;