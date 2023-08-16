import Card from "../UI/Card"

const WorkerList = () => {
  return (
    <div>
      <Card className="mt-5">
        <ul>
            <li className="flex justify-between">
                <span className="font-bold">İsim</span>
                <span className="font-bold">Maaş</span>
            </li>
            <li className="flex justify-between cursor-pointer hover:shadow-xl p-2">
                <span>asd</span>
                <span>123</span>
            </li>
        </ul>
      </Card>
    </div>
  )
}

export default WorkerList
