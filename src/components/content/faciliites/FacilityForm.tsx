import { MapViewHelperParams } from "../sharedViewsParams";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getFacilityById, FacilityResponse, createFacility, updateFacility } from "../../../api/facilityCalls";
import { loadingError, unknownError, errorHeader } from "../sharedStrings";
import { Row, Alert } from "react-bootstrap";
import Form from "../../fragments/forms/Form";
import NotBlank from "../../fragments/forms/api/NotBlank";
import EnumSelect from "../../fragments/forms/api/EnumSelect";
import { FacilityType } from "../../../api/enumCalls";
import Number from "../../fragments/forms/api/Number";
import Button from "../../fragments/util/Button";
import L from "leaflet";
import { facilityIcon } from "../map/MapIcons";
import MapView from "../../fragments/map/MapView";

const FacilityFormView = (props: Readonly<MapViewHelperParams>) => {
    const [name, setName] = useState("");
    const [facilityType, setFacilityType] = useState("");
    const [error, setError] = useState("");
    const { facilityId } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const update = props.update;
  
    useEffect(() => {
      if (facilityId !== undefined) {
        getFacilityById(parseInt(facilityId)).then(res => res.json()).then((data: FacilityResponse) => {
          if (data.name && data.facilityType && data.location) {
            setName(data.name);
            setFacilityType(data.facilityType);
            update([data.location.latitude, data.location.longitude]);
          } else {
            setError(loadingError);
          }
        }).catch(err => {
          console.error(err);
          setError(loadingError);
        });
      }
    }, [facilityId, update]);
  
    const onSubmit = () => {
      setError("");
  
      const facility = {
        name: name,
        facilityType: facilityType,
        longitude: props.lng,
        latitude: props.lat
      };
  
      (facilityId === undefined ? createFacility(facility) : updateFacility(parseInt(facilityId), facility)).then(res => {
        if (res.status === 200) {
          navigate("../facilities");
        } else {
          console.log(res);
          setError(unknownError);
        }
      }).catch(err => {
        console.error(err);
        setError(unknownError);
      });
    };
  
    return (
      <Form onSubmit={onSubmit} className="w-50">
        <h1 className="my-3 text-center">{facilityId === undefined ? "Dodawanie placówki" : "Edycja placówki"}</h1>
        <NotBlank id="name" className="mb-3" required value={name} onChange={e => setName(e.target.value)} label="Nazwa placówki" />
        <EnumSelect id="facilityType" className="mb-3" required value={facilityType} onChange={e => setFacilityType(e.target.value)} enum={FacilityType} onLoad={setFacilityType} label="Rodzaj placówki" />
        <h4 className="text-center mb-3">Lokalizacja</h4>
        <Number id="latitude" className="mb-3" required value={props.lat} onChange={e => props.update([parseFloat(e.target.value), props.lng])} />
        <Number id="longitude" className="mb-3" required value={props.lng} onChange={e => props.update([props.lat, parseFloat(e.target.value)])} />
        <Row className="justify-content-center">
          <Button className="mt-3 w-75" type="submit">{facilityId === undefined ? "Dodaj placówkę" : t("Save")}</Button>
        </Row>
        {error ? (
          <Alert variant="danger" className="mt-3">
            <Alert.Heading>{t(errorHeader)}</Alert.Heading>
            <p>{t(error)}</p>
          </Alert>
        ) : ""}
      </Form>
    );
  };
  
  const FacilityForm = () => {
    const [coords, setCoords] = useState<[number, number]>([52.222, 21.015]);
    useEffect(() => navigator.geolocation.getCurrentPosition(pos => setCoords([pos.coords.latitude, pos.coords.longitude])), []);
    const update = (x: Readonly<L.LatLng>) => setCoords([x.lat, x.lng]);
  
    const mark = {
      coords: coords,
      desc: "Placówka",
      icon: facilityIcon,
      to: "/home"
    };
  
    return <MapView center={coords} initialZoom={12} element={<FacilityFormView update={setCoords} lat={coords[0]} lng={coords[1]} />} clickable onClick={e => update(e)} marks={[mark]} />;
  };
  
  export default FacilityForm;
  