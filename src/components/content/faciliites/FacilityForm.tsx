import { MapViewHelperParams } from "../sharedViewsParams";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useRoles } from "../../../hooks/useAuth";
import { isDispositor, isDirector } from "../../../helpers/authHelper";
import { getFacilityById, FacilityResponse, createFacility, updateFacility } from "../../../api/facilityCalls";
import { missingDataError, loadingError, unknownError, networkError, errorHeader } from "../sharedStrings";
import { Row, Alert } from "react-bootstrap";
import Form from "../../fragments/forms/Form";
import NotBlank from "../../fragments/forms/api/NotBlank";
import EnumSelect from "../../fragments/forms/api/EnumSelect";
import { FacilityType } from "../../../api/enumCalls";
import Number from "../../fragments/forms/api/Number";
import Button from "../../fragments/util/Button";
import L from "leaflet";
import { hospitalIcon } from "../map/MapIcons";
import MapView from "../../fragments/map/MapView";

const FacilityFormView = (props: Readonly<MapViewHelperParams>) => {
    const [name, setName] = useState("");
    const [facilityType, setFacilityType] = useState("");
    const [error, setError] = useState("");
    const { facilityId } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const roles = useRoles();
    const update = props.update;
    const canEdit = isDispositor(roles) || isDirector(roles);
  
    useEffect(() => {
      if (facilityId !== undefined) {
        getFacilityById(parseInt(facilityId)).then(res => res.json()).then((data: FacilityResponse) => {
          if (data.name && data.facilityType && data.location) {
            setName(data.name);
            setFacilityType(data.facilityType);
            update([data.location.latitude, data.location.longitude]);
          } else {
            setError(missingDataError);
          }
        }).catch(err => {
          console.error(err);
          setError(loadingError);
        });
      }
    }, [facilityId, update]);
  
    const onSubmit = () => {
      if (!canEdit) {
        console.error("You don't have permissions to submit this form.");
        return;
      }

      setError("");
  
      const facility = {
        name: name,
        facilityType: facilityType,
        longitude: props.lng,
        latitude: props.lat
      };
  
      (facilityId === undefined ? createFacility(facility) : updateFacility(parseInt(facilityId), facility)).then(res => {
        if (res.ok) {
          navigate("../facilities");
        } else {
          console.log(res);
          setError(unknownError);
        }
      }).catch(err => {
        console.error(err);
        setError(networkError);
      });
    };
  
    return (
      <Form onSubmit={onSubmit} className="w-50">
        <h1 className="my-3 text-center">{facilityId === undefined ? t("Facility.Adding") : (canEdit ? t("Facility.Editing") : t("Facility.Facility"))}</h1>
        <NotBlank id="name" className="mb-3" required value={name} onChange={e => setName(e.target.value)} label={t("Facility.Name")} disabled={!canEdit} />
        <EnumSelect id="facilityType" className="mb-3" required value={facilityType} onChange={e => setFacilityType(e.target.value)} enum={FacilityType} onLoad={setFacilityType} label={t("Facility.Type")} disabled={!canEdit} />
        <h4 className="text-center mb-3">{t("Map.Location")}</h4>
        <Number id="latitude" className="mb-3" required value={props.lat} onChange={e => props.update([parseFloat(e.target.value), props.lng])} disabled={!canEdit} />
        <Number id="longitude" className="mb-3" required value={props.lng} onChange={e => props.update([props.lat, parseFloat(e.target.value)])} disabled={!canEdit} />
        {canEdit ? (
          <Row className="justify-content-center">
            <Button className="mt-3 w-75" type="submit">{facilityId === undefined ? t("Facility.Add") : t("Common.SaveChanges")}</Button>
          </Row>
        ) : ""}
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
    const [coords, setCoords] = useState<[number, number]>([0, 0]);
    const [loaded, setLoaded] = useState(false);
    const { t } = useTranslation();
    const roles = useRoles();
    const canEdit = isDispositor(roles) || isDirector(roles);

    useEffect(() => navigator.geolocation.getCurrentPosition(pos => {
      setCoords([pos.coords.latitude, pos.coords.longitude]);
      setLoaded(true);
    }, err => setLoaded(true)), []);

    const update = (x: Readonly<L.LatLng>) => setCoords([x.lat, x.lng]);
  
    const mark = {
      coords: coords,
      desc: t("Facility.Facility"),
      icon: hospitalIcon
    };
  
    return <MapView isLoaded={loaded} center={coords} initialZoom={12} element={<FacilityFormView update={setCoords} lat={coords[0]} lng={coords[1]} />} clickable={canEdit} onClick={e => update(e)} marks={[mark]} />;
  };
  
  export default FacilityForm;
  