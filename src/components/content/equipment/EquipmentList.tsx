import { useState, useEffect } from "react";
import { ItemResponse, getItems } from "../../../api/itemCalls";
import { useTranslation } from "react-i18next";
import Link from "../../fragments/navigation/Link";
import Enum from "../../fragments/values/Enum";
import { ItemType } from "../../../api/enumCalls";
import { Container, Row, Col } from "react-bootstrap";
import NavButton from "../../fragments/navigation/NavButton";
import Table from "../../fragments/util/Table";

const EquipmentList = () => {
  const [items, setItems] = useState<ItemResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const abortUpdate = new AbortController();

    getItems(abortUpdate).then(res => res.json()).then((data: ItemResponse[]) => {
      if (data) {
        setItems(data);
      }

      setIsLoading(false);
    }).catch(err => {
      if (abortUpdate.signal.aborted) {
        return;
      }

      console.error(err);
      setIsLoading(false);
    });

    return () => abortUpdate.abort();
  }, []);

  const idField = "itemId";
  const nameField = "name";
  const typeField = "type";
  const descField = "description";

  const cols = [
    { name: "#", property: (x: Readonly<ItemResponse>) => <Link to={x.itemId.toString()}>{x.itemId}</Link>, filterBy: idField, sortBy: idField },
    { name: t("Equipment.Name"), property: nameField, filterBy: nameField, sortBy: nameField },
    { name: t("Equipment.Type"), property: (x: Readonly<ItemResponse>) => <Enum enum={ItemType} value={x.type} />, filterBy: typeField, sortBy: typeField },
    { name: t("Equipment.Description"), property: descField, filterBy: descField, sortBy: descField }
  ];

  return (
    <Container className="my-3 justify-content-center text-center">
      <h3>{t("Equipment.Equipment")}</h3>
      <Row className="my-3 justify-content-end">
        <Col />
        <Col md="auto">
          <NavButton to="/newequipment">+</NavButton>
        </Col>
      </Row>
      <Table columns={cols} data={items} isLoading={isLoading} />
    </Container>
  );
};

export default EquipmentList;
