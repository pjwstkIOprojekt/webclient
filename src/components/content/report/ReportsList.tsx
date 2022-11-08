import Link from "../../fragments/navigation/Link";
import { Container } from "react-bootstrap";
import Table from "../../fragments/util/Table";
import { useState, useEffect } from "react";
import ViewLoader from "../../fragments/util/ViewLoader";
import { useTranslation } from "react-i18next";

interface ReportsListParams {
  data: Record<string, any>[]
}

const ReportsListDisplay = (props: Readonly<ReportsListParams>) => {
  const { t } = useTranslation();
  const cols = [
    { name: "#", property: (x: any) => <Link to={`/report/${x.id}`}>{x.id}</Link> },
    { name: t('Reports.VictimConsious'), property: (x: any) => x.victimConsious ? t('Yes') : t('No') },
    { name: t('Reports.VictimBreathing'), property: (x: any) => x.victimBreathing ? t('Yes') : t('No') },
    { name: t('Reports.Date'), property: "date" },
    { name: t('Reports.DangerRating'), property: "dangerRating" },
    { name: t('Reports.Description'), property: (x: any) => x.description.substring(0, 100) }
  ];

  return (
    <Container className="mb-3 justify-content-center text-center">
      <h1>{t('Reports.Reports')}</h1>
      <Table columns={cols} data={props.data} />
    </Container>
  );
};

const ReportsList = () => {
  const [items] = useState<any[]>([]);

  useEffect(() => {
    /*getApproved().then(res => res.json()).then(data => {
      console.log(data);
    }).catch(err => console.log(err));*/
  }, []);

  return <ViewLoader isLoaded={items.length > 0} element={<ReportsListDisplay data={items} />} />;
};

export default ReportsList;
