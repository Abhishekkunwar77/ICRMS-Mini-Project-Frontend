import React from "react";
import "./TrafficSignal.css"; // Keeping the CSS file name as is

import gapinmedian from "../components/assets/gapinmedian.png"
import BarrierAhead from "../components/assets/BarrierAhead.png";
import cattle from "../components/assets/cattle.png";
import CycleCrossing from "../components/assets/CycleCrossing.png";
import dangerousdip from "../components/assets/dangerousdip.png";
import fallingrock from "../components/assets/fallingrock.png";
import ferry from "../components/assets/ferry.png";
import guardedrailwaycrossing from "../components/assets/guardedrailwaycrossing.png";
import hairpinbend from "../components/assets/hairpinbend.png";
import lefthairpinbend from "../components/assets/lefthairpinbend.jpg";
import menatwork from "../components/assets/menatwork.png";
import narrowbridge from "../components/assets/narrowbridge.png";
import majorroadahead from "../components/assets/majorroadahead.png";
import pedestriancrossing from "../components/assets/pedestriancrossing.png";
import righthandcurve from "../components/assets/righthandcurve.png";
import lefthandcurve from "../components/assets/lefthandcurve.jpg";


/* new */
import crossingRoad from "../components/assets/crossingRoad.png";
import FiftyKMPH from "../components/assets/FiftyKMPH.png";
import airport from "../components/assets/airport.png";
import busstop from "../components/assets/busstop.png";
import endofdualcarriageway from "../components/assets/endofdualcarriageway.png";
import firstaidpost from "../components/assets/firstaidpost.png";
import Yintersection from "../components/assets/Yintersection.png";
import unguardedrailwaycrossing from "../components/assets/unguardedrailwaycrossing.png";
import TrafficSignalAhead from "../components/assets/TrafficSignalAhead.png";
import TIntersection from "../components/assets/TIntersection.png";
import stop from "../components/assets/stop.png";
import steepAscent from "../components/assets/steepAscent.png";
import steepDescent from "../components/assets/steepDescent.png";
import StaggeredIntersection from "../components/assets/StaggeredIntersection.png";
import SpeedBreakerAhead from "../components/assets/SpeedBreakerAhead.png";
import slipperyroad from "../components/assets/slipperyroad.png";
import sideroadleft from "../components/assets/sideroadleft.png";
import sideroadright from "../components/assets/sideroadright.png";
import seriesOfbend from "../components/assets/seriesOfbend.png";
import RumbleStrip from "../components/assets/RumbleStrip.png";
import Roundabout from "../components/assets/Roundabout.png";

/*  new */
import AllMotorVehiclesProhibited from "../components/assets/AllMotorVehiclesProhibited.png";
import school from "../components/assets/school.png";
import NarrowRoadAhead from "../components/assets/NarrowRoadAhead.png";
import NoHorn from "../components/assets/NoHorn.png";
import PedestrianProhibited from "../components/assets/PedestrianProhibited.png";
import loosegravel from "../components/assets/loosegravel.png";
import hospital from "../components/assets/hospital.png";

import leftReverseBend from "../components/assets/leftReverseBend.png";
import petrolpump from "../components/assets/petrolpump.png";
import RunwayAhead from "../components/assets/RunwayAhead.png";
import twowayoperationahead from "../components/assets/twowayoperationahead.png";
import parkingsign from "../components/assets/parkingsign.png";





const trafficSigns = [
  {
    id: 1,
    title: "Gap in Median",
    image: gapinmedian,
    description:
      "This sign indicates a gap in the road divider with a U-turn option. Drivers should slow down and take the correct lane to avoid accidents.",
  },
  {
    id: 2,
    title: "Barrier Ahead",
    image: BarrierAhead,
    description:
      "This sign indicates that there is a barrier ahead on the road and the vehicle must stop there.",
  },
  {
    id: 3,
    title: "Cattle Crossing",
    image: cattle,
    description:
      "This sign indicates a high probability of cattle presence on the road. Drivers should slow down and proceed carefully.",
  },
  {
    id: 4,
    title: "Cycle Crossing",
    image: CycleCrossing,
    description:
      "This sign indicates a cycle crossing zone. Drivers should slow down and be aware of cyclists crossing the road.",
  },
  {
    id: 5,
    title: "Pedestrian Crossing",
    image: pedestriancrossing,
    description:
      "This sign warns drivers of pedestrian crossings ahead. They should slow down and allow pedestrians to cross safely.",
  },
  {
    id: 6,
    title: "Dangerous Dip",
    image: dangerousdip,
    description:
      "This sign warns about a dangerous dip in the road. Drivers should slow down to avoid damage or accidents.",
  },
  {
    id: 7,
    title: "Falling Rocks",
    image: fallingrock,
    description:
      "This sign warns about the possibility of falling rocks from nearby cliffs. Drive cautiously in this area.",
  },
  {
    id: 8,
    title: "Ferry",
    image: ferry,
    description:
      "This sign indicates the presence of a ferry service ahead. Vehicles may need to wait or board the ferry.",
  },
  {
    id: 9,
    title: "Guarded Railway Crossing",
    image: guardedrailwaycrossing,
    description:
      "This sign warns about a guarded railway crossing ahead. Drivers should be cautious and follow railway signals.",
  },
  {
    id: 10,
    title: "Hairpin Bend",
    image: hairpinbend,
    description:
      "This sign indicates a sharp hairpin bend ahead. Drivers should reduce speed and navigate carefully.",
  },
  {
    id: 11,
    title: "Left Hairpin Bend",
    image: lefthairpinbend,
    description:
      "This sign warns of a sharp left hairpin bend ahead. Slow down and steer carefully.",
  },
  {
    id: 12,
    title: "Men at Work",
    image: menatwork,
    description:
      "This sign indicates roadwork ahead. Drivers should slow down and follow temporary traffic rules.",
  },
  {
    id: 13,
    title: "Narrow Bridge",
    image: narrowbridge,
    description:
      "This sign warns of a narrow bridge ahead. Drivers should yield if necessary and cross carefully.",
  },
  {
    id: 14,
    title: "Major Road Ahead",
    image: majorroadahead,
    description:
      "This sign alerts drivers about merging onto a major road. They should adjust speed and be cautious.",
  },
  {
    id: 15,
    title: "Right Hand Curve",
    image: righthandcurve,
    description:
      "This sign warns of a right-hand curve ahead. Drivers should reduce speed and be cautious while turning.",
  },
  {
    id: 16,
    title: "Left Hand Curve",
    image: lefthandcurve,
    description:
      "This sign warns of a left-hand curve ahead. Reduce speed and turn carefully.",
  },
  {
    id: 17,
    title: "Crossing Road",
    image: crossingRoad,
    description:
      "This sign indicates a pedestrian crossing ahead. Drivers should slow down and allow pedestrians to cross safely.",
  },
  {
    id: 18,
    title: "50 KMPH Speed Limit",
    image: FiftyKMPH,
    description:
      "This sign indicates a speed limit of 50 km/h. Drivers should not exceed this speed to ensure safety.",
  },
  {
    id: 19,
    title: "Airport",
    image: airport,
    description:
      "This sign indicates the presence of an airport nearby. Drivers should be cautious of low-flying aircraft.",
  },
  {
    id: 20,
    title: "Bus Stop",
    image: busstop,
    description:
      "This sign marks a designated bus stop. Drivers should be prepared for buses stopping and pedestrians crossing.",
  },
  {
    id: 21,
    title: "End of Dual Carriageway",
    image: endofdualcarriageway,
    description:
      "This sign indicates the end of a divided road. Drivers should be cautious as lanes merge into a single carriageway.",
  },
  {
    id: 22,
    title: "First Aid Post",
    image: firstaidpost,
    description:
      "This sign indicates the availability of a first aid post ahead. It is useful for emergencies.",
  },
  {
    id: 23,
    title: "Y-Intersection",
    image: Yintersection,
    description:
      "This sign warns of a Y-shaped road intersection ahead. Drivers should slow down and be cautious while navigating.",
  },
  {
    id: 24,
    title: "Unguarded Railway Crossing",
    image: unguardedrailwaycrossing,
    description:
      "This sign warns of an unguarded railway crossing ahead. Drivers should stop, look both ways, and proceed carefully.",
  },
  {
    id: 25,
    title: "Traffic Signal Ahead",
    image: TrafficSignalAhead,
    description:
      "This sign warns drivers about an upcoming traffic signal. They should be prepared to stop if required.",
  },
  {
    id: 26,
    title: "T-Intersection",
    image: TIntersection,
    description:
      "This sign indicates a T-shaped intersection ahead. Drivers should prepare to turn left or right.",
  },
  {
    id: 27,
    title: "Stop",
    image: stop,
    description:
      "This sign instructs drivers to come to a complete stop and proceed only when the way is clear.",
  },
  {
    id: 28,
    title: "Steep Ascent",
    image: steepAscent,
    description:
      "This sign warns of a steep upward slope ahead. Drivers should shift to a lower gear for better control.",
  },
  {
    id: 29,
    title: "Steep Descent",
    image: steepDescent,
    description:
      "This sign warns of a steep downward slope ahead. Drivers should use engine braking and maintain control.",
  },
  {
    id: 30,
    title: "Staggered Intersection",
    image: StaggeredIntersection,
    description:
      "This sign indicates a staggered intersection ahead. Drivers should slow down and prepare for merging lanes.",
  },
  {
    id: 31,
    title: "Speed Breaker Ahead",
    image: SpeedBreakerAhead,
    description:
      "This sign warns of a speed breaker ahead. Drivers should reduce speed to avoid sudden jolts.",
  },
  {
    id: 32,
    title: "Slippery Road",
    image: slipperyroad,
    description:
      "This sign warns that the road may be slippery due to weather conditions. Drivers should reduce speed and drive cautiously.",
  },
  {
    id: 33,
    title: "Side Road Left",
    image: sideroadleft,
    description:
      "This sign indicates a side road joining from the left. Drivers should be aware of merging traffic.",
  },
  {
    id: 34,
    title: "Side Road Right",
    image: sideroadright,
    description:
      "This sign indicates a side road joining from the right. Drivers should be aware of merging traffic.",
  },
  {
    id: 35,
    title: "Series of Bends",
    image: seriesOfbend,
    description:
      "This sign warns of a series of bends ahead. Drivers should reduce speed and navigate carefully.",
  },
  {
    id: 36,
    title: "Rumble Strip",
    image: RumbleStrip,
    description:
      "This sign warns of rumble strips ahead, which are used to alert drivers and reduce speed.",
  },
  {
    id: 37,
    title: "Roundabout",
    image: Roundabout,
    description:
      "This sign indicates a roundabout ahead. Drivers should slow down and yield to traffic in the roundabout.",
  },
  {
    id: 38,
    title: "School Ahead",
    image: school,
    description:
      "This sign warns of a school nearby. Drive carefully and watch for children crossing.",
  },
  {
    id: 39,
    title: "Narrow Road Ahead",
    image: NarrowRoadAhead,
    description:
      "Indicates that the road ahead is narrowing. Slow down and proceed with caution.",
  },
  {
    id: 40,
    title: "No Horn",
    image: NoHorn,
    description:
      "This sign indicates a silence zone where honking is prohibited.",
  },
  {
    id: 41,
    title: "Pedestrian Prohibited",
    image: PedestrianProhibited,
    description:
      "Pedestrians are not allowed beyond this point for safety reasons.",
  },
  {
    id: 42,
    title: "Loose Gravel",
    image: loosegravel,
    description:
      "Warns of loose gravel on the road, which may reduce traction. Drive carefully.",
  },
  {
    id: 43,
    title: "Hospital Nearby",
    image: hospital,
    description:
      "Indicates a nearby hospital. Drivers should avoid unnecessary noise and drive cautiously.",
  },
  {
    id: 44,
    title: "All Motor Vehicles Prohibited",
    image: AllMotorVehiclesProhibited,
    description:
      "This sign indicates that motor vehicles are not allowed beyond this point.",
  },
  {
    id: 45,
    title: "Left Reverse Bend",
    image: leftReverseBend,
    description:
      "This sign warns of a sharp left reverse bend ahead. Drive cautiously.",
  },
  {
    id: 46,
    title: "Petrol Pump",
    image: petrolpump,
    description: "Indicates the presence of a petrol pump nearby.",
  },
  {
    id: 47,
    title: "Runway Ahead",
    image: RunwayAhead,
    description:
      "Warns that an airport runway is ahead. Be prepared for low-flying aircraft.",
  },
  {
    id: 48,
    title: "Two-Way Operation Ahead",
    image: twowayoperationahead,
    description:
      "Indicates that the road ahead has two-way traffic. Drive carefully.",
  },
  {
    id: 49,
    title: "Parking Sign",
    image: parkingsign,
    description: "Indicates a designated parking area nearby.",
  },
];
const TrafficSignal = () => {
  return (
    <>
      <h1>50+ Traffic Signs or Road Safety Signs in India as per IRC</h1>
      <section className="necessity-section">
        <h2>Necessity of Road Signs</h2>
        <ul>
          <li>To give timely warning of hazardous situations.</li>
          <li>To regulate the traffic.</li>
          <li>To provide safety to the traffic.</li>
          <li>To expedite the traffic.</li>
          <li>
            To guide the traffic by supplying information about directions and
            points of interest.
          </li>
        </ul>
      </section>
      <div className="traffic-signs-container">
        {trafficSigns.map((sign) => (
          <div key={sign.id} className="traffic-sign">
            <img src={sign.image} alt={sign.title} />
            <h2>{sign.title}</h2>
            <p>{sign.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TrafficSignal;
