import { useState, useEffect } from "react";
import Link from "../../fragments/navigation/Link";
import FormSelect from "../../fragments/forms/FormSelect";
import Button from '../../fragments/util/Button';
import { Container } from "react-bootstrap";
import Table from "../../fragments/util/Table";
import { useTranslation } from "react-i18next";

const AcceptReport = () => {
  const [pending, setPending] = useState<Record<string, any>[]>([]);
  const [approved, setApproved] = useState<Record<string, any>[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    /*getUnapproved().then(res => res.json()).then(items => setPending(items)).then(getApproved).then(res => res.json()).then(items => {
      setApproved(items);
      setIsLoading(false);
    }).catch(err => console.log(err));*/
  }, []);

  const sharedCols = [
    { name: "#", property: (x: Record<string, any>) => <Link to={`${x.id}`}>{x.id}</Link>, filterBy: "id", sortBy: "id" },
    { name: t('Reports.VictimConsious'), property: (x: Record<string, any>) => x.victimConsious ? t('Yes') : t('No') },
    { name: t('Reports.VictimBreathing'), property: (x: Record<string, any>) => x.victimBreathing ? t('Yes') : t('No') },
    { name: t('Reports.Date'), property: "date", filterBy: "date", sortBy: "date" },
    { name: t('Reports.DangerRating'), property: "dangerRating", filterBy: "dangerRating", sortBy: "dangerRating" },
    { name: t('Reports.Description'), property: (x: Record<string, any>) => x.description.substring(0, 100), filterBy: "description", sortBy: "description" }
  ];

  const approve = (x: Record<string, any>) => {
    setPending(pending.filter(i => i.id !== x.id));
    setApproved([...approved, x]);
  };

  const pendingCols = [
    ...sharedCols,
    { name: t('Ambulance.Assigned'), property: () => <FormSelect options={["-- Wybierz karetkę --"]} />},
    { name:  t('Reports.Confirm'), property: (x: Record<string, any>) => <Button onClick={e => window.confirm(t('Reports.Accept')) ? approve(x) : null}>+</Button> },
    { name: t('Reports.Reject'), property: (x: Record<string, any>) => <Button onClick={e => window.confirm(t('Reports.Delete')) ? setPending(pending.filter(i => i.id !== x.id)) : null}>X</Button> },
  ];

  const approvedCols = [
    ...sharedCols,
    { name:  t('Ambulance.Assigned'), property: "ambulance" }
  ];

  return (
    <Container className="mb-3 justify-content-center text-center">
      <h3>{t('Reports.Waiting')}</h3>
      <Table columns={pendingCols} data={pending} isLoading={isLoading} />
      <h3 className="mt-5">{t('Reports.Accepted')}</h3>
      <Table columns={approvedCols} data={approved} isLoading={isLoading} />
    </Container>
  );
};

export default AcceptReport;
