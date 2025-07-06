'use client';
import './global.css';
import { useEffect, useRef } from 'react';

export default function Page() {
    const tableRef = useRef<HTMLTableElement>(null);

    useEffect(() => {
        interface ClickableRow extends HTMLElement {
            _clickListener?: () => void;
        }
        
        const table = tableRef.current;
        if (!table) return;

        const rows = Array.from(table.querySelectorAll('tr'));

        const handleRowClick = (clickedRow: HTMLTableRowElement) => {
        rows.forEach(row => {
            row.classList.remove('highlighted');
            const th = row.querySelector('th');
            if (th) th.classList.remove('highlighted');
        });
        if (rows[0] === clickedRow) {
            rows.forEach(row => {
                row.classList.remove('highlighted');
                const th = row.querySelector('th');
                if (th) th.classList.remove('highlighted');
            });
        } else {
            clickedRow.classList.add('highlighted');
            clickedRow.classList.remove('correct');
        }
        const rowIndex = rows.indexOf(clickedRow);
        for (let i = rowIndex; i >= 0; i--) {
            const headerCell = rows[i].querySelector('th');
            if (headerCell) {
            const rowspan = parseInt(headerCell.getAttribute('rowspan') || '1');
            if (i + rowspan > rowIndex) {
                headerCell.classList.add('highlighted');
                break;
            }
            }
        }
        };
        rows.forEach(row => {
        const clickListener = () => handleRowClick(row);
        row.addEventListener('click', clickListener);
        (row as ClickableRow)._clickListener = clickListener;
        });
        return () => {
        rows.forEach(row => {
            const clickListener = (row as ClickableRow)._clickListener;
            if (clickListener) {
            row.removeEventListener('click', clickListener);
            }
        });
        };
    }, []);

    return (
        <div>
            <table ref={tableRef} className="my-table">
                <thead>
                    <tr>
                        <th>Part</th>
                        <th>Sub-Part</th>
                        <th>Configuration</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Tire Pressure</th>
                        <td></td>
                        <td>Standard is 28 to 32 base, 32 to 33 on track. Lower pressure helps with degradation over time. Low front tyre pressure = oversteer</td>
                    </tr>
                    <tr>
                        <th>Gearing</th>
                        <td></td>
                        <td>Adjust final gear to be near top right of graph. Can adjust lower gears for better launch (first and second gear to be longer)</td>
                    </tr>
                    <tr>
                        <th rowSpan={3}>Alignment</th>
                        <td>Camber</td>
                        <td>Always run negative camber, standard is -1 to -2 but -.5 to -2.5 is possible. More negative = better corner speed but less grip.<br /> If camber goes positive in a corner, add more negative camber for that side of the car. aim for an average camber of -1.<br />Standard RWD = -1.6F, -1.3R. Standard FWD = -1.3F, -1.6R. Standard AWD = -1.4F, -1.4R</td>
                    </tr>
                    <tr>
                        <td>Toe</td>
                        <td>Standard is 0 for both, no more than .5 for each.<br />Toe out = snap steering. Toe in = stability / understeer. Standard is F = Toe out, R = Toe in</td>
                    </tr>
                    <tr>
                        <td>Caster</td>
                        <td>Standard is 5 to 7. Higher = more stability</td>
                    </tr>
                    <tr>
                        <th>Anti-roll Bars</th>
                        <td></td>
                        <td>Standard is 40/40. Lower F = oversteer.<br />For RWD, 40/1 is possible for more stability. For AWD, 1/40 is possible for more snap steering</td>
                    </tr>
                    <tr>
                        <th rowSpan={2}>Springs</th>
                        <td>Springs</td>
                        <td>Standard is middle/low on the bar. Softer F = oversteer</td>
                    </tr>
                    <tr>
                        <td>Car Height</td>
                        <td>Min, 2 to 3 ticks above 0. Can slightly raise for rake (more rotation) but test to make sure it is better</td>
                    </tr>
                    <tr>
                        <th rowSpan={2} className="correct">Damping</th>
                        <td>Bump</td>
                        <td>Standard is 4/4, between 2 to 5. Lower = more grip</td>
                    </tr>
                    <tr>
                        <td>Rebound</td>
                        <td>Standard is 11/11, range between 9 to 5. Higher = more grip but car will bounce a lot on curbs</td>
                    </tr>
                    <tr>
                        <th rowSpan={3}>Suspension Geometry</th>
                        <td>Roll Center</td>
                        <td>Set Springs first, then set Roll Center. Softer F = oversteer</td>
                    </tr>
                    <tr>
                        <td>Anti-dive</td>
                        <td>Set LAST. Higher = oversteer</td>
                    </tr>
                    <tr>
                        <td>Anti-squat</td>
                        <td>Set LAST. Higher = oversteer</td>
                    </tr>
                    <tr>
                        <th>Aero</th>
                        <td></td>
                        <td>Standard is F = max.<br />For R, FWD = min most of the time, RWD = max most of the time</td>
                    </tr>
                    <tr>
                        <th rowSpan={2}>Brake</th>
                        <td>Balance</td>
                        <td>High BB = understeer while braking.<br />Low BB = oversteer</td>
                    </tr>
                    <tr>
                        <td>Pressure</td>
                        <td>Always max.</td>
                    </tr>
                    <tr>
                        <th className="correct">Differential</th>
                        <td></td>
                        <td>Acceleration max. Standard is 90 to 100 on FWD & AWD, 50 to 90 on RWD.<br />Deceleation min. Standard is 0 to 25, 50 to 80 on AWD</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}