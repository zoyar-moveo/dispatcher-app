import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { datesArgs, sourceArgs } from "../../services/DataCardData";
import {
  getDatesDataArgs,
  getSourcesDataArgs,
} from "../../utiles/getGraphsArgs";
import getSourcesMap, { getDatesMap } from "../../utiles/getSourcesMap";
import LineLoader from "../Loaders/LineLoader";
import SourceLoader from "../Loaders/SourceLoader";
import DataCard from "./../DataCard/DataCard";
import { DataCardContainer } from "./styles";

const DataCardList: React.FC<{ width: number }> = (props) => {
  const data: any = useSelector<any>((state) => state.data.data);
  const isLoading: any = useSelector<any>((state) => state.data.isLoading);
  const [sourcesMap, setSourcesMap] = useState<any>();
  const [datesMap, setDatesMap] = useState<any>();
  const [sourcesDataArgs, setSourcesArgs] = useState(sourceArgs.data);
  const [datesDataArgs, setDatesDataArgs] = useState(datesArgs.data);

  const [isData, setIsData] = useState(false);

  useEffect(() => {
    if (data.length > 0) {
      setSourcesMap(getSourcesMap(data));
      setDatesMap(getDatesMap(data));
      setIsData(true);
    }
  }, [data]);

  useEffect(() => {
    if (sourcesMap) setSourcesArgs(getSourcesDataArgs(sourcesMap).data);
  }, [sourcesMap]);

  useEffect(() => {
    if (datesMap) setDatesDataArgs(getDatesDataArgs(datesMap).data);
  }, [datesMap]);

  return (
    <>
      {isLoading ? (
        <DataCardContainer>
          <SourceLoader />
          <LineLoader />
        </DataCardContainer>
      ) : (
        <>
          <DataCardContainer>
            <DataCard
              DataType={sourceArgs.DataType}
              data={sourcesDataArgs}
              options={sourceArgs.options}
            />
            <DataCard
              DataType={datesArgs.DataType}
              data={datesDataArgs}
              options={datesArgs.options}
            />
          </DataCardContainer>
        </>
      )}
    </>
  );
};

export default DataCardList;
