import { useState } from "react";
import FormSelect from "../../fragments/forms/FormSelect";
import FormControl from "../../fragments/forms/FormControl";
import Button from "../../fragments/util/Button";
import Table from "../../fragments/util/Table";

const serviceTypes = ["Policja", "Straż pożarna"];

const AdditionalHelp = () => {
  const [data, setData] = useState<any[]>([]);
  const [id, setId] = useState(0);

  const updateRow = (x: any) => {
    const index = data.findIndex(e => e.id === x.id);

    if (index < 0) {
      return;
    }

    const copy = [...data];
    copy[index] = x;
    setData(copy);
  };

  const addNew = () => {
    setData([...data, {
      id: id,
      service: 0,
      reason: "",
      amount: 1
    }]);

    setId(id + 1);
  };

  const cols = [
    {
      name: "Rodzaj pomocy", property: (x: any) => <FormSelect options={serviceTypes} value={x.service} onChange={e => updateRow({ ...x, service: parseInt(e.target.value) })} />, sortBy: "service" },
    { name: "Uzasadnienie", property: (x: any) => <FormControl type="text" value={x.reason} onChange={e => updateRow({ ...x, reason: e.target.value })} />, sortBy: "reason", filterBy: "reason" },
    { name: "Ilość", property: (x: any) => <FormControl type="number" value={x.amount} onChange={e => updateRow({ ...x, amount: e.target.value })} />, sortBy: "amount", filterBy: "amount" },
    { name: () => <Button text="+" type="button" onClick={addNew} />, property: (x: any) => <Button text="X" type="button" onClick={e => setData(data.filter(i => i.id !== x.id))} /> }
  ];

  return <Table columns={cols} data={data} />;
};

export default AdditionalHelp;
