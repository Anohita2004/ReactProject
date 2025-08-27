function Lists() {
    const list = [1, 2, 3, 4, 5]
  return(
    <div>Lists
        {list.map((item) => (
            <ol>
                <li key={item.toString()}>{item}</li>
            </ol>
        ))}
        

    </div>
  )
}
export default Lists;