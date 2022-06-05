import React, { useRef, useState, useEffect } from 'react';
import {
  select,
  line,
  curveCardinal,
  axisBottom,
  axisRight,
  scaleLinear,
  scaleBand,
  selectAll
} from 'd3';

import styles from '../styles/BarChart.module.css';

function BarChartD3(props) {

  const [dorForte, setDorForte] = useState(props.dorForte);
  const [oximetria, setOximetria] = useState(100); //com o oxímetro é possível pegar a saturação do exigênio (%) e os bpm
  const [batimentos, setBatimentos] = useState(120);
  const [temperatura, setTemperatura] = useState(36.0);
  const [pressao, setPressao] = useState(120); //pressão é dada em mmHg

  const [emergencia, setEmergencia] = useState(50);
  const [urgente, setUrgente] = useState(50);
  const [naourgente, setNaoUrgente] = useState(50);

  const data = [emergencia, urgente, naourgente];
  const svgRef = useRef();

  const validaEmergencia = () => {
    if((oximetria < 92) || (pressao < 80) || (batimentos < 50) || (batimentos > 120)){
      setEmergencia(100); //risco vermelho => presença de apenas um sinal clínico
      setUrgente(60);
      setNaoUrgente(10);
    } else {
      setEmergencia(50);
      setUrgente(50);
      setNaoUrgente(100);
    }
  };

  const addColor = (elemento: string) => {
    switch (elemento) {
      case 'rect-0': //emergencia
        return 'red';
      case 'rect-1': //urgente
        return 'yellow';
      case 'rect-2': //nao-urgente
        return 'green';
    }
  };

  const checkNotNan = (value: number) => {
    if (Number.isNaN(value)) return 0;
    return value;
  };

  useEffect(() => {
    const svg = select(svgRef.current);
    validaEmergencia();
    const xScale = scaleBand()
      .domain(data.map((v, i) => i))
      .range([0, 300])
      .padding(0.5);

    const yScale = scaleLinear().domain([0, 150]).range([150, 0]);

    const xAxis = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((v, i) => ['Emergência', 'Urgente', 'Não Urgente'][i]);

    svg.select('.x-axis').style('transform', 'translateY(150px)').call(xAxis);

    const yAxis = axisRight(yScale);

    svg.select('.y-axis').style('transform', 'translateX(500px)').call(yAxis);

    svg
      .selectAll('rect')
      .data(data)
      .join('rect')
      .attr('transform', 'scale(1,-1)')
      .attr('id', (_v, i) => `rect-${i}`)
      .attr('x', (_v, i) => xScale(i))
      .attr('y', -150)
      .attr('width', xScale.bandwidth())
      .transition()
      .attr('height', (v) => 150 - yScale(v));
    // add colors to the rect

    svg.selectAll('rect').attr('fill', (_v, i, n) => addColor(n[i].id));
  }, [data]);

  return (
    <div>
      <div className={styles.svgContainer}>
        <svg ref={svgRef} className={styles.svg}>
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>
      <div>
        <br />
      </div>
      <div className={styles.entrada}>
        <input
          type="number"
          placeholder="Temperatura"
          min="25"
          max="50"
          onChange={(e) =>
            setTemperatura(checkNotNan(Number.parseInt(e.target.value, 10)))
          }
        />
        <input
          type="number"
          placeholder="Pressão arterial"
          min="70"
          max="200"
          onChange={(e) =>
            setPressao(checkNotNan(Number.parseInt(e.target.value, 10)))
          }
        />
        <input
          type="number"
          placeholder="Oximetria"
          min="70"
          max="110"
          onChange={(e) =>
            setOximetria(checkNotNan(Number.parseInt(e.target.value, 10)))
          }
        />
        <input
          type="number"
          placeholder="Batimentos cardíacos"
          min="60"
          max="220"
          onChange={(e) =>
            setBatimentos(checkNotNan(Number.parseInt(e.target.value, 10)))
          }
        />
      </div>
    </div>
  );
}

export default BarChartD3;
