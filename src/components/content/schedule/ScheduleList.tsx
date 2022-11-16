import { Container } from "react-bootstrap";
import Table from "../../fragments/util/Table";
import { useState } from "react";
import FormCheck from "../../fragments/forms/FormCheck";
import { format } from "date-fns";
import NavButton from "../../fragments/navigation/NavButton";



const ScheduleList =() => {
  const [monday6] = useState();
  const [tuesday6] = useState();
  const [wednesday6] = useState();
  const [thursday6] = useState();
  const [friday6] = useState();
  const [saturday6] = useState();
  const [sunday6] = useState();

  const [monday18] = useState();
  const [tuesday18] = useState();
  const [wednesday18] = useState();
  const [thursday18] = useState();
  const [friday18] = useState();
  const [saturday18] = useState();
  const [sunday18] = useState();


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

  
    const [paramedics, setParamedics] = useState<any[]>([
      { id: 1, paramedic: "Jan Nowak", 
          monday6:<FormCheck id="monday"  value={!monday6} />, 
          tuesday6:<FormCheck id="tuesday"  value={!tuesday6}/>, 
          wednesday6:<FormCheck id="wednesday"  value={wednesday6}/>, 
          thursday6:<FormCheck id="thursday" value={!thursday6}/>, 
          friday6:<FormCheck id="friday"  value={!friday6}/>, 
          saturday6:<FormCheck id="saturday" value={saturday6}/>, 
          sunday6:<FormCheck id="sunday"  value={sunday6}/>, 

          monday18:<FormCheck id="monday"  value={!monday18}/>, 
          tuesday18:<FormCheck id="tuesday"  value={!tuesday18}/>, 
          wednesday18:<FormCheck id="wednesday"  value={wednesday18}/>, 
          thursday18:<FormCheck id="thursday" value={!thursday18}/>, 
          friday18:<FormCheck id="friday"  value={!friday18}/>, 
          saturday18:<FormCheck id="saturday" value={saturday18}/>, 
          sunday18:<FormCheck id="sunday"  value={sunday18}/>, 
      },
      { id: 2, paramedic: "Adam Kowalski", 
          monday6:<FormCheck id="monday"  value={monday6}/>, 
          tuesday6:<FormCheck id="tuesday"  value={!tuesday6}/>, 
          wednesday6:<FormCheck id="wednesday"  value={wednesday6}/>, 
          thursday6:<FormCheck id="thursday" value={!thursday6}/>, 
          friday6:<FormCheck id="friday"  value={!friday6}/>, 
          saturday6:<FormCheck id="saturday" value={saturday6}/>, 
          sunday6:<FormCheck id="sunday"  value={sunday6}/>, 

          monday18:<FormCheck id="monday"  value={monday18}/>, 
          tuesday18:<FormCheck id="tuesday"  value={!tuesday18}/>, 
          wednesday18:<FormCheck id="wednesday"  value={!wednesday18}/>, 
          thursday18:<FormCheck id="thursday" value={thursday18}/>, 
          friday18:<FormCheck id="friday"  value={friday18}/>, 
          saturday18:<FormCheck id="saturday" value={saturday18}/>, 
          sunday18:<FormCheck id="sunday"  value={!sunday18}/>, 
      },
    ]);

  return (
    <Container className="mb-2  text-center">
      <h1>Grafik</h1>
      <Table  columns={cols} data={paramedics} />
      <NavButton className="mb-3 w-25" to="./edit">Edytuj</NavButton>
    </Container>
  );
};



export default ScheduleList;
