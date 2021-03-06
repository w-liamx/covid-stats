import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Spin  } from "antd";
import { fillStats } from "../store/actions/globalStatsActions";

export const GlobalStats = () => {
  const globalStats = useSelector((state) => state.globalStats);
  const { stats, loading, error } = globalStats;
  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fillStats()); 
    return () => {
      //
    };
  }, [dispatch]);

  // const addCommas = (num) => {
  //   (parseInt(num)).toLocaleString()
  // }
  
  return (
    <div>
      <div className="global mb-20">
      <Card
          className="items-center"
          bordered={false}
          style={{ maxWidth: 700 }}
        >
      {loading ? (
        <Spin />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <div >
            <h3>Coronavirus Cases Across All Continents:</h3>
            <h2>{(parseInt(stats.cases)).toLocaleString()}</h2>
          </div>
          <div>
            <h3>Total Recovered:</h3>
            <h2 className="green">{(parseInt(stats.recovered)).toLocaleString()}</h2>
          </div>
          <div>
            <h3>Total Deaths:</h3>
            <h2 className="red">{(parseInt(stats.deaths)).toLocaleString()}</h2>
          </div>
        </>
        )}
        </Card>
      </div>

      <div className="mb-20">
      <Card
          className="items-center"
          bordered={false}
          style={{ maxWidth: 700 }}
        >
      {loading ? (
        <Spin />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <div className="whole">
            <h3>Total active cases:</h3>
            <h2>{(parseInt(stats.active)).toLocaleString()}</h2>
          </div>
          <div className="difference">
            <div>
            <h3 className="safe">{(parseInt(stats.active - stats.critical)).toLocaleString()}</h3>
              <p>mild</p>
            </div>
            <div>
              <h3 className="warning">{(parseInt(stats.critical)).toLocaleString()}</h3>
              <p>critical</p>
            </div>
          </div>
        </>
      )}
      </Card>
      </div>
      <div className="mb-20">
      <Card
          className="items-center"
          bordered={false}
          style={{ maxWidth: 700 }}
        >
      {loading ? (
        <Spin />
      ) : error ? (
        <div>{error}</div>
      ) : (
          <>
          <div className="whole">
            <h3>Total closed cases:</h3>
            <h2 className="gray">{(parseInt(stats.cases - stats.active)).toLocaleString()}</h2>
          </div>
          <div className="difference">
            <div>
              <h3 className="green">{(parseInt(stats.recovered)).toLocaleString()}</h3>
              <p>Recovered</p>
            </div>
            <div>
              <h3 className="red">{(parseInt(stats.deaths)).toLocaleString()}</h3>
              <p>Deaths</p>
            </div>
          </div>
          </>
      )}
      </Card>
      </div>
    </div>
  );
};

export default GlobalStats;
