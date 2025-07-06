'use client';
import './global.css'
import { useCallback, useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Page() {
    const containerRef = useRef<HTMLDivElement>(null);
    const tableRef = useRef<HTMLTableElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollRowToCenter = useCallback(() => {
        const container = containerRef.current;
        const table = tableRef.current;
        if (!container || !table) return;

        const rows = table.querySelectorAll('tbody tr');
        const targetRow = rows[currentIndex];
        if (!targetRow) return;
    }, [currentIndex]);

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowUp') {
        e.preventDefault();
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
        } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        const rowCount = tableRef.current?.querySelectorAll('tbody tr').length || 0;
        setCurrentIndex((prev) => Math.min(prev + 1, rowCount - 1));
        }
    };

    useEffect(() => {
        scrollRowToCenter();
    }, [currentIndex, scrollRowToCenter]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <>
            <Head>
                <meta charSet="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Engineer</title>
            </Head>
            <main className="page-wrapper">
                <h1 className="title">F1 24 Setups</h1>

                <div className="alert">
                    <p>ALWAYS PUT 3 MORE LAPS OF FUEL THAN THE NUMBER OF LAPS RECOMMENDED</p>
                    <p>DO NOT USE THE C5 IN A RACE UNLESS 25% DISTANCE OR 5 LAPS</p>
                    <p>Softs generally not worth using unless specified</p>
                    <p>Use lean consumption and no ERS during formation & out laps</p>
                </div>

                <div ref={containerRef} className="main-section">
                    <table ref={tableRef} className="table">
                        <thead>
                            <tr>
                                <th className="direction">D</th>
                                <th className="circuit">C</th>
                                <th className="aero">Aero</th>
                                <th className="differential">Differential</th>
                                <th className="suspgeom">Suspension G</th>
                                <th className="suspension">Suspension</th>
                                <th className="brakes">Brakes</th>
                                <th>QTyres</th>
                                <th>RTyres</th>
                                <th>Tyres</th>
                                <th className="strategy">S/2</th>
                                <th className="laps">L/2</th>
                                <th className="fuel">F</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="direction">CW</td>
                                <td className="circuit"><Image src="https://flagcdn.com/w40/bh.png" alt="Bahrain Flag" style={{ width: '20px', height: '15px', marginRight: '8px', verticalAlign: 'middle' }}/></td>
                                <td className="aero">50-50</td>
                                <td className="differential">100-30-100</td>
                                <td className="suspgeom">L-L-L-L</td>
                                <td className="suspension">41-8-10-21-22-53</td>
                                <td className="brakes">100-52:54</td>
                                <td>27.0-max</td>
                                <td>min-min</td>
                                <td>C1-C2-C3</td>
                                <td className="strategy">SH 8-9 / HS 18-20 / HM 17 / MH 11</td>
                                <td className="laps">29</td>
                                <td className="fuel"></td>
                            </tr>
                            <tr>
                                <td className="direction">ACW</td>
                                <td className="circuit"><Image src="https://flagcdn.com/w40/sa.png" alt="Saudi Arabia Flag" style={{ width: '20px', height: '15px', marginRight: '8px', verticalAlign: 'middle' }}/></td>
                                <td className="aero">21q / 19r-20</td>
                                <td className="differential">100-20q / 30r-100</td>
                                <td className="suspgeom">L-L-L-L</td>
                                <td className="suspension">41-15-6-21-21-50</td>
                                <td className="brakes">100-52:53</td>
                                <td>max-max</td>
                                <td>max-max</td>
                                <td>C2-C3-C4</td>
                                <td className="strategy">MH 8-10 / HM 14-16 / SM 9 / MS 16</td>
                                <td className="laps">25</td>
                                <td className="fuel"></td>
                            </tr>
                            <tr>
                                <td className="direction">CW</td>
                                <td className="circuit"><Image src="https://flagcdn.com/w40/au.png" alt="Australia Flag" style={{ width: '20px', height: '15px', marginRight: '8px', verticalAlign: 'middle' }}/></td>
                                <td className="aero">28-33</td>
                                <td className="differential">100-25-100</td>
                                <td className="suspgeom">L-L-L-L</td>
                                <td className="suspension">41-1-8-21-22-48</td>
                                <td className="brakes">100-53</td>
                                <td>max-max</td>
                                <td>max-max</td>
                                <td>C3-C4-C5</td>
                                <td className="strategy">MH 8-12 / HM 15-18</td>
                                <td className="laps">29</td>
                                <td className="fuel"></td>
                            </tr>
                            <tr>
                                <td className="direction">F8</td>
                                <td className="circuit"><Image src="https://flagcdn.com/w40/jp.png" alt="Japan Flag" style={{ width: '20px', height: '15px', marginRight: '8px', verticalAlign: 'middle' }}/></td>
                                <td className="aero">39q / 38r-35</td>
                                <td className="differential">100-25-100</td>
                                <td className="suspgeom">L-L-.02-L</td>
                                <td className="suspension">40-14-8-21-22-54</td>
                                <td className="brakes">100-52:54</td>
                                <td>max-max</td>
                                <td>28.0-25.5</td>
                                <td>C1-C2-C3</td>
                                <td className="strategy">MH 8-12 / HM 15-18</td>
                                <td className="laps">27</td>
                                <td className="fuel"></td>
                            </tr>
                            <tr>
                                <td className="direction">CW</td>
                                <td className="circuit"><Image src="https://flagcdn.com/w40/cn.png" alt="China Flag" style={{ width: '20px', height: '15px', marginRight: '8px', verticalAlign: 'middle' }}/></td>
                                <td className="aero">37q / 34r-32</td>
                                <td className="differential">100-15-100</td>
                                <td className="suspgeom">L-L-L-L</td>
                                <td className="suspension">41-15-7-21-22-52</td>
                                <td className="brakes">100-52:55</td>
                                <td>max-max</td>
                                <td>max-max</td>
                                <td>C2-C3-C4</td>
                                <td className="strategy">MH 12 / HM 16-18</td>
                                <td className="laps">28</td>
                                <td className="fuel"></td>
                            </tr>
                            <tr>
                                <td className="direction">ACW</td>
                                <td className="circuit"><Image src="https://flagcdn.com/w40/us.png" alt="Miami" style={{ width: '20px', height: '15px', marginRight: '8px', verticalAlign: 'middle' }}/></td>
                                <td className="aero">18-24</td>
                                <td className="differential">100-25q / 30r-100</td>
                                <td className="suspgeom">L-L-.03-L</td>
                                <td className="suspension">41-5-10-21-22-60</td>
                                <td className="brakes">100-54q / 55r</td>
                                <td>26.5-max</td>
                                <td>26.5-25.0</td>
                                <td>C2-C3-C4</td>
                                <td className="strategy">HM 17 / MH 11-13</td>
                                <td className="fuel">29</td>
                                <td className="laps"></td>
                            </tr>
                            <tr>
                                <td className="direction">ACW</td>
                                <td className="circuit"><Image src="https://flagcdn.com/w40/sm.png" alt="San Marino Flag" style={{ width: '20px', height: '15px', marginRight: '8px', verticalAlign: 'middle' }}/></td>
                                <td className="aero">34-42</td>
                                <td className="differential">100-15q / 20r-100</td>
                                <td className="suspgeom">L-L-L-L</td>
                                <td className="suspension">41-5-3-21-20-60</td>
                                <td className="brakes">100-52:53</td>
                                <td>27.0-max</td>
                                <td>25.5-24.0</td>
                                <td>C3-C4-C5</td>
                                <td className="strategy">MH 9-11</td>
                                <td className="laps">32</td>
                                <td className="fuel"></td>
                            </tr>
                            <tr>
                                <td className="direction">CW</td>
                                <td className="circuit"><Image src="https://flagcdn.com/w40/mc.png" alt="Monaco Flag" style={{ width: '20px', height: '15px', marginRight: '8px', verticalAlign: 'middle' }}/></td>
                                <td className="aero">50-50</td>
                                <td className="differential">100-15-100</td>
                                <td className="suspgeom">L-L-L-L</td>
                                <td className="suspension">41-5-21-21-22-50</td>
                                <td className="brakes">100-52</td>
                                <td>max-max</td>
                                <td>max-max</td>
                                <td>C3-C4-C5</td>
                                <td className="strategy">MH 11-13</td>
                                <td className="laps">39</td>
                                <td className="fuel"></td>
                            </tr>
                            <tr>
                                <td className="direction">CW</td>
                                <td className="circuit"><Image src="https://flagcdn.com/w40/ca.png" alt="Canada Flag" style={{ width: '20px', height: '15px', marginRight: '8px', verticalAlign: 'middle' }}/></td>
                                <td className="aero">34-40</td>
                                <td className="differential">100-20-100</td>
                                <td className="suspgeom">L-L-.04-L</td>
                                <td className="suspension">41-1-4-21-19-60</td>
                                <td className="brakes">100-52q / 53:54r</td>
                                <td>27.0-24.0</td>
                                <td>27.0-22.5</td>
                                <td>C3-C4-C5</td>
                                <td className="strategy">MH 11-13 / HM 22-24</td>
                                <td className="fuel">35</td>
                                <td className="laps"></td>
                            </tr>
                            <tr>
                                <td className="direction">CW</td>
                                <td className="circuit"><Image src="https://flagcdn.com/w40/es.png" alt="Spain Flag" style={{ width: '20px', height: '15px', marginRight: '8px', verticalAlign: 'middle' }}/></td>
                                <td className="aero">48-50</td>
                                <td className="differential">100-15q / 20r-100</td>
                                <td className="suspgeom">L-L-L-L</td>
                                <td className="suspension">41-18-5-21-21-54</td>
                                <td className="brakes">100-52q / 54r</td>
                                <td>max-max</td>
                                <td>max-max</td>
                                <td>C1-C2-C3</td>
                                <td className="strategy">MH 12-14 / HM 17-19 / SM 13</td>
                                <td className="laps">33</td>
                                <td className="fuel"></td>
                            </tr>
                            <tr>
                                <td className="direction">CW</td>
                                <td className="circuit"><Image src="https://flagcdn.com/w40/at.png" alt="Austria Flag" style={{ width: '20px', height: '15px', marginRight: '8px', verticalAlign: 'middle' }}/></td>
                                <td className="aero">27-33</td>
                                <td className="differential">100-20q / 25r-100</td>
                                <td className="suspgeom">L-L-L-L</td>
                                <td className="suspension">41-8-4-21-22-55</td>
                                <td className="brakes">100-50:54</td>
                                <td>max-max</td>
                                <td>max-max</td>
                                <td>C3-C4-C5</td>
                                <td className="strategy">MH 8-12 / HM 24-27</td>
                                <td className="fuel">36</td>
                                <td className="laps"></td>
                            </tr>
                            <tr>
                                <td className="direction">CW</td>
                                <td className="circuit"><Image src="https://flagcdn.com/w40/gb.png" alt="Great Britain Flag" style={{ width: '20px', height: '15px', marginRight: '8px', verticalAlign: 'middle' }}/></td>
                                <td className="aero">22-30</td>
                                <td className="differential">100-20-100</td>
                                <td className="suspgeom">L-L-L-L</td>
                                <td className="suspension">41-1-3-21-20-62</td>
                                <td className="brakes">100-52:53</td>
                                <td>max-max</td>
                                <td>max-max</td>
                                <td>C1-C2-C3</td>
                                <td className="strategy">MS 14-16 / SM 9-11</td>
                                <td className="fuel">26</td>
                                <td className="laps"></td>
                            </tr>
                            <tr>
                                <td className="direction">CW</td>
                                <td className="circuit"><Image src="https://flagcdn.com/w40/hu.png" alt="Hungary Flag" style={{ width: '20px', height: '15px', marginRight: '8px', verticalAlign: 'middle' }}/></td>
                                <td className="aero">50-50</td>
                                <td className="differential">100-15q / 20r-100</td>
                                <td className="suspgeom">L-L-.02-L</td>
                                <td className="suspension">41-1-13-21-20-50</td>
                                <td className="brakes">100-52q / 53:54r</td>
                                <td>max-max</td>
                                <td>25.5-24.5</td>
                                <td>C3-C4-C5</td>
                                <td className="strategy">MH 7-11</td>
                                <td className="laps">35</td>
                                <td className="fuel"></td>
                            </tr>
                            <tr>
                                <td className="direction">CW</td>
                                <td className="circuit"><Image src="https://flagcdn.com/w40/be.png" alt="Belgium Flag" style={{ width: '20px', height: '15px', marginRight: '8px', verticalAlign: 'middle' }}/></td>
                                <td className="aero">4q / 2r-0</td>
                                <td className="differential">100-25q / 30r-100</td>
                                <td className="suspgeom">L-L-L-L</td>
                                <td className="suspension">41-15-8-21-18-43</td>
                                <td className="brakes">100-53</td>
                                <td>max-max</td>
                                <td>max-max</td>
                                <td>C2-C3-C4</td>
                                <td className="strategy">S-M 8-9 / HM 11-14 / MH 8-11</td>
                                <td className="laps">22</td>
                                <td className="fuel"></td>
                            </tr>
                            <tr>
                                <td className="direction">CW</td>
                                <td className="circuit"><Image src="https://flagcdn.com/w40/nl.png" alt="Netherlands Flag" style={{ width: '20px', height: '15px', marginRight: '8px', verticalAlign: 'middle' }}/></td>
                                <td className="aero">47-50</td>
                                <td className="differential">100-15-100</td>
                                <td className="suspgeom">L-L-.05-L</td>
                                <td className="suspension">41-1-3-21-20-63</td>
                                <td className="brakes">100-52</td>
                                <td>29.0-max</td>
                                <td>28.5-max</td>
                                <td>C1-C2-C3</td>
                                <td className="strategy">MS 20-23 / SM 13-16</td>
                                <td className="laps">36</td>
                                <td className="fuel"></td>
                            </tr>
                            <tr>
                                <td className="direction">CW</td>
                                <td className="circuit"><Image src="https://flagcdn.com/w40/it.png" alt="Italy Flag" style={{ width: '20px', height: '15px', marginRight: '8px', verticalAlign: 'middle' }}/></td>
                                <td className="aero">0-0</td>
                                <td className="differential">100-30-100</td>
                                <td className="suspgeom">L-L-L-L</td>
                                <td className="suspension">41-1-8-21-22-52</td>
                                <td className="brakes">100-50:54</td>
                                <td>max-max</td>
                                <td>max-max</td>
                                <td>C3-C4-C5</td>
                                <td className="strategy">MH 10-12 / HM 15-17</td>
                                <td className="laps">27</td>
                                <td className="fuel"></td>
                            </tr>
                            <tr>
                                <td className="direction">ACW</td>
                                <td className="circuit"><Image src="https://flagcdn.com/w40/az.png" alt="Azerbaijan Flag" style={{ width: '20px', height: '15px', marginRight: '8px', verticalAlign: 'middle' }}/></td>
                                <td className="aero">14-21</td>
                                <td className="differential">100-30-100</td>
                                <td className="suspgeom">L-L-L-L</td>
                                <td className="suspension">41-1-4-21-18-60</td>
                                <td className="brakes">100-55</td>
                                <td>27.0-25.5</td>
                                <td>26.5-24.5</td>
                                <td>C3-C4-C5</td>
                                <td className="strategy">MH 8-10 / HM 16-18</td>
                                <td className="laps">26</td>
                                <td className="fuel"></td>
                            </tr>
                            <tr>
                                <td className="direction">ACW</td>
                                <td className="circuit"><Image src="https://flagcdn.com/w40/sg.png" alt="Singapore Flag" style={{ width: '20px', height: '15px', marginRight: '8px', verticalAlign: 'middle' }}/></td>
                                <td className="aero">50-50</td>
                                <td className="differential">100-20q / 25r-100</td>
                                <td className="suspgeom">L-L-.05-L</td>
                                <td className="suspension">41-1-8-21-19-59</td>
                                <td className="brakes">100-52:53q / 54r</td>
                                <td>23.0-max</td>
                                <td>23.0-22.3</td>
                                <td>C3-C4-C5</td>
                                <td className="strategy">MH 12-14 / HM 17-19</td>
                                <td className="laps">31</td>
                                <td className="fuel"></td>
                            </tr>
                            <tr>
                                <td className="direction">ACW</td>
                                <td className="circuit"><Image src="https://flagcdn.com/w40/us.png" alt="Austin Flag" style={{ width: '20px', height: '15px', marginRight: '8px', verticalAlign: 'middle' }}/></td>
                                <td className="aero">45q / 42r-50</td>
                                <td className="differential">100-25-100</td>
                                <td className="suspgeom">L-L-.05-L</td>
                                <td className="suspension">41-1-4-21-19-60</td>
                                <td className="brakes">100-50:54</td>
                                <td>max-max</td>
                                <td>max-max</td>
                                <td>C2-C3-C4</td>
                                <td className="strategy">MH 7-9 / HM 18-20</td>
                                <td className="laps">28</td>
                                <td className="fuel"></td>
                            </tr>
                            <tr>
                                <td className="direction">CW</td>
                                <td className="circuit"><Image src="https://flagcdn.com/w40/mx.png" alt="Mexico Flag" style={{ width: '20px', height: '15px', marginRight: '8px', verticalAlign: 'middle' }}/></td>
                                <td className="aero">30-39</td>
                                <td className="differential">100-20-100</td>
                                <td className="suspgeom">L-L-.03-L</td>
                                <td className="suspension">41-1-4-21-18-60</td>
                                <td className="brakes">100-52q / 53:54r</td>
                                <td>max-max</td>
                                <td>max-max</td>
                                <td>C3-C4-C5</td>
                                <td className="strategy">MH 10-12 / HM 20-22</td>
                                <td className="laps">36</td>
                                <td className="fuel"></td>
                            </tr>
                            <tr>
                                <td className="direction">ACW</td>
                                <td className="circuit"><Image src="https://flagcdn.com/w40/br.png" alt="Brazil Flag" style={{ width: '20px', height: '15px', marginRight: '8px', verticalAlign: 'middle' }}/></td>
                                <td className="aero">44q / 41r-44</td>
                                <td className="differential">100-20q / 30r-100</td>
                                <td className="suspgeom">L-L-L-L</td>
                                <td className="suspension">41-1-5-21-22-55</td>
                                <td className="brakes">100-51q / 52r</td>
                                <td>max-max</td>
                                <td>max-max</td>
                                <td>C2-C3-C4</td>
                                <td className="strategy">HM 19-21 / MH 13-15</td>
                                <td className="laps">36</td>
                                <td className="fuel"></td>
                            </tr>
                            <tr>
                                <td className="direction">ACW</td>
                                <td className="circuit"><Image src="https://flagcdn.com/w40/us.png" alt="Las Vegas Flag" style={{ width: '20px', height: '15px', marginRight: '8px', verticalAlign: 'middle' }}/></td>
                                <td className="aero">0-2</td>
                                <td className="differential">100-25q / 30r-100</td>
                                <td className="suspgeom">L-L-.03q / Lr-L</td>
                                <td className="suspension">41-1-3-21-20-55</td>
                                <td className="brakes">100-54:56</td>
                                <td>24.5-max</td>
                                <td>24.5-25.0</td>
                                <td>C3-C4-C5</td>
                                <td className="strategy">MH 7-9 / HM 16-18</td>
                                <td className="laps">25</td>
                                <td className="fuel"></td>
                            </tr>
                            <tr>
                                <td className="direction">CW</td>
                                <td className="circuit"><Image src="https://flagcdn.com/w40/qa.png" alt="Qatar Flag" style={{ width: '20px', height: '15px', marginRight: '8px', verticalAlign: 'middle' }}/></td>
                                <td className="aero">50-50</td>
                                <td className="differential">100-15q / 20r-100</td>
                                <td className="suspgeom">L-L-.05-L</td>
                                <td className="suspension">41-22-6-21-21-52</td>
                                <td className="brakes">100-50:52</td>
                                <td>max-max</td>
                                <td>max-max</td>
                                <td>C1-C2-C3</td>
                                <td className="strategy">MH 11-13 / HM 15-18</td>
                                <td className="laps">29</td>
                                <td className="fuel"></td>
                            </tr>
                            <tr>
                                <td className="direction">ACW</td>
                                <td className="circuit"><Image src="https://flagcdn.com/w40/ae.png" alt="UAE Flag" style={{ width: '20px', height: '15px', marginRight: '8px', verticalAlign: 'middle' }}/></td>
                                <td className="aero">42q / 37r-40</td>
                                <td className="differential">100-20-100</td>
                                <td className="suspgeom">L-L-L-L</td>
                                <td className="suspension">41-15-7-21-22-54</td>
                                <td className="brakes">100-54</td>
                                <td>max-max</td>
                                <td>max-max</td>
                                <td>C3-C4-C5</td>
                                <td className="strategy">MH 8-11</td>
                                <td className="laps">29</td>
                                <td className="fuel"></td>
                            </tr>
                            <tr>
                                <td className="direction">CW</td>
                                <td className="circuit"><Image src="https://flagcdn.com/w40/pt.png" alt="Portugal Flag" style={{ width: '20px', height: '15px', marginRight: '8px', verticalAlign: 'middle' }}/></td>
                                <td className="aero">43q / 41r-47</td>
                                <td className="differential">100-25q / 30r-100</td>
                                <td className="suspgeom">L-L-.05-L</td>
                                <td className="suspension">40-1-4-21-20-62</td>
                                <td className="brakes">100-52:54</td>
                                <td>29.0-26.0</td>
                                <td>28.5-25.5</td>
                                <td>C1-C2-C3</td>
                                <td className="strategy">SM 11-13 / MS 21-23</td>
                                <td className="laps">33</td>
                                <td className="fuel"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div ref={containerRef} className="troubleshooting-section">
                    <table ref={tableRef} className="table">
                        <thead>
                            <tr>
                                <th>Issue</th>
                                <th>Solution</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Understeer</th>
                                <td>higher front wing, less front arb, front toe, bigger difference between front & rear ride-height,<br></br> lower brake bias / off diff, higher engine braking</td>
                            </tr>
                            <tr>
                                <th>Oversteer</th>
                                <td>higher rear wing, more front arb, smaller ride height gap, higher bbal + off diff, lower engine brake</td>
                            </tr>
                            <tr>
                                <th>Front locking</th>
                                <td>lower brake bias, lower off diff, lower engine braking</td>
                            </tr>
                            <tr>
                                <th>Rear locking</th>
                                <td>higher brake bias, higher off diff, lower engine braking</td>
                            </tr>
                            <tr>
                                <th>Overheating (f)</th>
                                <td>more oversteer, lower bbal, higher engine brake</td>
                            </tr>
                            <tr>
                                <th>Overheating (r)</th>
                                <td>more understeer, smoother driving, bbal more to front</td>
                            </tr>
                            <tr>
                                <th>Bottoming (f)</th>
                                <td>higher front ride height, avoid kerb/bump</td>
                            </tr>
                            <tr>
                                <th>Bottoming (r)</th>
                                <td>higher rear ride height, avoid kerb/bump</td>
                            </tr>
                            <tr>
                                <th>Spinning on Kerbs</th>
                                <td>lift, wheels lose grip mounting and leaving zebras</td>
                            </tr>
                            <tr>
                                <th>no ERS</th>
                                <td>For Q, mostly M and OVR. HTL for the long straights.<br></br>M for the twisty sections, and OVR out of slow corners / short straights.<br></br>For R, turn off the ERS for some periods,<br></br>as upshifting with no ERS will kick-start the recharge process.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}