import { Container } from "react-bootstrap";
import Table from "../../fragments/util/Table";
import { useState } from "react";
import FormCheck from "../../fragments/forms/FormCheck";
import { format } from "date-fns";
import Button from "../../fragments/util/Button";



const CreateSchedule =() => {
  const [monday6, setMonday6] = useState(false);
  const [tuesday6, setTuesday6] = useState(false);
  const [wednesday6, setWednesday6] = useState(false);
  const [thursday6, setThursday6] = useState(false);
  const [friday6, setFriday6] = useState(false);
  const [saturday6, setSaturday6] = useState(false);
  const [sunday6, setSunday6] = useState(false);

  const [monday18, setMonday18] = useState(false);
  const [tuesday18, setTuesday18] = useState(false);
  const [wednesday18, setWednesday18] = useState(false);
  const [thursday18, setThursday18] = useState(false);
  const [friday18, setFriday18] = useState(false);
  const [saturday18, setSaturday18] = useState(false);
  const [sunday18, setSunday18] = useState(false);


  var curr = new Date(); 
  var first = curr.getDate() - curr.getDay() ;
  const mon6 = format((new Date(curr.setDate(first+1))),'dd.MM') + " Zmiana 1"; 
  const mon18 = format((new Date(curr.setDate(first+1))),'dd.MM') + " Zmiana 2"; 
  const tue6 = format((new Date(curr.setDate(first+2))),'dd.MM') + " Zmiana 1";
  const tue18 = format((new Date(curr.setDate(first+2))),'dd.MM') + " Zmiana 2";
  const wed6 = format((new Date(curr.setDate(first+3))),'dd.MM') + " Zmiana 1";
  const wed18 = format((new Date(curr.setDate(first+3))),'dd.MM') + " Zmiana 2";
  const thur6 = format((new Date(curr.setDate(first+4))),'dd.MM') + " Zmiana 1";   
  const thur18 = format((new Date(curr.setDate(first+4))),'dd.MM') + " Zmiana 2";
  const fri6 = format((new Date(curr.setDate(first+5))),'dd.MM') + " Zmiana 1";
  const fri18 = format((new Date(curr.setDate(first+5))),'dd.MM') + " Zmiana 2";
  const sat6 = format((new Date(curr.setDate(first+6))),'dd.MM') + " Zmiana 1"; 
  const sat18 = format((new Date(curr.setDate(first+6))),'dd.MM') + " Zmiana 2"; 
  const sun6 = format((new Date(curr.setDate(first+7))),'dd.MM') + " Zmiana 1";
  const sun18 = format((new Date(curr.setDate(first+7))),'dd.MM') + " Zmiana 2";
  
  
  const cols = [
    { name: "#", property: "id" },
    { name: "Ratownik", property: "paramedic"},
    { name: mon6, property: "monday6"},
    { name: mon18, property: "monday18"},
    { name: tue6, property: "tuesday6"},
    { name: tue18, property: "tuesday18"},
    { name: wed6, property: "wednesday6"},
    { name: wed18, property: "wednesday18"},
    { name: thur6, property: "thursday6"},
    { name: thur18, property: "thursday18"},
    { name: fri6, property: "friday6"},
    { name: fri18, property: "friday18"},
    { name: sat6, property: "saturday6"},
    { name: sat18, property: "saturday18"},
    { name: sun6, property: "sunday6"},
    { name: sun18, property: "sunday18"},
    
   ];

  
    const paramedics = [
      { id: 1, paramedic: "Jan Nowak", 
          monday6:<FormCheck id="monday6" onChange={e => setMonday6(!monday6)}  value={monday6}/>, 
          tuesday6:<FormCheck id="tuesday6" onChange={e => setTuesday6(!tuesday6)} value={!tuesday6} />, 
          wednesday6:<FormCheck id="wednesday6" onChange={e => setWednesday6(!wednesday6)} value={wednesday6}/>, 
          thursday6:<FormCheck id="thursday6" onChange={e => setThursday6(!thursday6)} value={!thursday6}/>, 
          friday6:<FormCheck id="friday6" onChange={e => setFriday6(!friday6)} value={!friday6}/>, 
          saturday6:<FormCheck id="saturday6" onChange={e => setSaturday6(!saturday6)} value={saturday6}/>, 
          sunday6:<FormCheck id="sunday6" onChange={e => setSunday6(!sunday6)} value={sunday6}/>, 

          monday18:<FormCheck id="monday18" onChange={e => setMonday18(!monday18)} value={!monday18}/>, 
          tuesday18:<FormCheck id="tuesday18" onChange={e => setTuesday18(!tuesday18)} value={!tuesday18}/>, 
          wednesday18:<FormCheck id="wednesday18" onChange={e => setWednesday18(!wednesday18)} value={wednesday18}/>, 
          thursday18:<FormCheck id="thursday18" onChange={e => setThursday18(!thursday18)} value={!thursday18}/>,
          friday18:<FormCheck id="friday18" onChange={e => setFriday18(!friday18)} value={!friday18}/>, 
          saturday18:<FormCheck id="saturday18" onChange={e => setSaturday18(!saturday18)} value={saturday18}/>, 
          sunday18:<FormCheck id="sunday18" onChange={e => setSunday18(!sunday18)} value={sunday18}/>
      }

    ];

  return (
    <Container className="mb-2  text-center">
      <h1>Grafik</h1>
      <Table columns={cols} data={paramedics} />
      <Button type="submit" className="mb-3 w-25" >Zapisz</Button>
    </Container>
  );
};



export default CreateSchedule;
