'use client';
import './global.css';
import { useEffect, useRef } from 'react';

export default function Page() {
  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    const table = tableRef.current;
    if (!table) return;

    const rows = table.querySelectorAll('tr');

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.tagName.toLowerCase() === 'td') {
        const cell = target as HTMLTableCellElement;
        const cellIndex = cell.cellIndex;
        const row = cell.parentElement as HTMLTableRowElement;

        table.classList.add('grayed');
        cell.classList.add('active-cell');

        const topRow = rows[0];
        if (topRow && topRow.cells[cellIndex]?.tagName.toLowerCase() === 'th') {
          topRow.cells[cellIndex].classList.add('col-header-highlight');
        }

        if (row.cells[0]?.tagName.toLowerCase() === 'th') {
          row.cells[0].classList.add('row-header-highlight');
        }
      }
    };

    const handleMouseOut = () => {
      table.classList.remove('grayed');

      table.querySelectorAll('.row-header-highlight').forEach(el =>
        el.classList.remove('row-header-highlight')
      );
      table.querySelectorAll('.col-header-highlight').forEach(el =>
        el.classList.remove('col-header-highlight')
      );
      table.querySelectorAll('.active-cell').forEach(el =>
        el.classList.remove('active-cell')
      );
    };

    table.addEventListener('mouseover', handleMouseOver);
    table.addEventListener('mouseout', handleMouseOut);

    return () => {
      table.removeEventListener('mouseover', handleMouseOver);
      table.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div className="p-4">
        <table ref={tableRef} className="border-collapse w-full">
            <thead>
                <tr>
                    <th className="header"></th>
                    <th className="fairy">fairy</th>
                    <th className="steel">steel</th>
                    <th className="water">water</th>
                    <th className="dragon">dragon</th>
                    <th className="electric">electric</th>
                    <th className="fire">fire</th>
                    <th className="ghost">ghost</th>
                    <th className="ground">ground</th>
                    <th className="psychic">psychic</th>
                    <th className="flying">flying</th>
                    <th className="dark">dark</th>
                    <th className="fighting">fighting</th>
                    <th className="grass">grass</th>
                    <th className="normal">normal</th>
                    <th className="rock">rock</th>
                    <th className="ice">ice</th>
                    <th className="poison">poison</th>
                    <th className="bug">bug</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th className="fairy">fairy</th>
                    <td></td>
                    <td className="hypoeffective">1</td>
                    <td>4</td>
                    <td className="supereffective">54 </td>
                    <td>15</td>
                    <td className="hypoeffective">14</td>
                    <td>48</td>
                    <td>3</td>
                    <td>70</td>
                    <td>69</td>
                    <td className="supereffective">33</td>
                    <td className="supereffective">30</td>
                    <td>113</td>
                    <td>58</td>
                    <td>71</td>
                    <td>134</td>
                    <td className="hypoeffective">63</td>
                    <td>117</td>
                </tr>
                <tr>
                    <th className="steel">steel</th>
                    <td className="supereffective">1</td>
                    <td className="hypoeffective"></td>
                    <td className="hypoeffective">23</td>
                    <td>17</td>
                    <td className="hypoeffective">31</td>
                    <td className="hypoeffective">29</td>
                    <td>11</td>
                    <td>10</td>
                    <td>26</td>
                    <td>27</td>
                    <td>50</td>
                    <td>16</td>
                    <td>32</td>
                    <td>85</td>
                    <td className="supereffective">120</td>
                    <td className="supereffective">122</td>
                    <td>51</td>
                    <td>8</td>
                </tr>
                <tr>
                    <th className="water">water</th>
                    <td>4</td>
                    <td>23</td>
                    <td className="hypoeffective"></td>
                    <td className="hypoeffective">12</td>
                    <td>77</td>
                    <td className="supereffective">75</td>
                    <td>18</td>
                    <td className="supereffective">6</td>
                    <td>28</td>
                    <td>43</td>
                    <td>22</td>
                    <td>24</td>
                    <td className="hypoeffective">96</td>
                    <td>34</td>
                    <td className="supereffective">86</td>
                    <td>115</td>
                    <td>35</td>
                    <td>36</td>
                </tr>
                <tr>
                    <th className="dragon">dragon</th>
                    <td className="immune">54</td>
                    <td className="hypoeffective">17</td>
                    <td>12</td>
                    <td className="supereffective"></td>
                    <td>76</td>
                    <td>39</td>
                    <td>45</td>
                    <td>62</td>
                    <td>105</td>
                    <td>108</td>
                    <td>103</td>
                    <td>107</td>
                    <td>131</td>
                    <td>59</td>
                    <td>132</td>
                    <td>99</td>
                    <td>56</td>
                    <td>102</td>
                </tr>
                <tr>
                    <th className="electric">electric</th>
                    <td>15</td>
                    <td>31</td>
                    <td className="supereffective">77</td>
                    <td className="hypoeffective">76</td>
                    <td className="hypoeffective"></td>
                    <td>114</td>
                    <td>38</td>
                    <td className="immune">83</td>
                    <td>44</td>
                    <td className="supereffective">21</td>
                    <td>46</td>
                    <td>20</td>
                    <td className="hypoeffective">100</td>
                    <td>52</td>
                    <td>135</td>
                    <td>55</td>
                    <td>89</td>
                    <td>40</td>
                </tr>
                <tr>
                    <th className="fire">fire</th>
                    <td>14</td>
                    <td className="supereffective">29</td>
                    <td className="hypoeffective">75</td>
                    <td className="hypoeffective">39</td>
                    <td>114</td>
                    <td className="hypoeffective"></td>
                    <td>37</td>
                    <td>47</td>
                    <td>25</td>
                    <td>97</td>
                    <td>13</td>
                    <td>49</td>
                    <td className="supereffective">61</td>
                    <td>91</td>
                    <td className="hypoeffective">143</td>
                    <td className="supereffective">133</td>
                    <td>106</td>
                    <td className="supereffective">68</td>
                </tr>
                <tr>
                    <th className="ghost">ghost</th>
                    <td>48</td>
                    <td>11</td>
                    <td>18</td>
                    <td>45</td>
                    <td>38</td>
                    <td>37</td>
                    <td className="supereffective"></td>
                    <td>42</td>
                    <td className="supereffective">123</td>
                    <td>53</td>
                    <td className="hypoeffective">65</td>
                    <td>19</td>
                    <td>72</td>
                    <td className="immune">2</td>
                    <td>57</td>
                    <td>93</td>
                    <td>60</td>
                    <td>80</td>
                </tr>
                <tr>
                    <th className="ground">ground</th>
                    <td>3</td>
                    <td className="supereffective">10</td>
                    <td>6</td>
                    <td>62</td>
                    <td className="supereffective">83</td>
                    <td className="supereffective">47</td>
                    <td>42</td>
                    <td></td>
                    <td>87</td>
                    <td className="immune">5</td>
                    <td>81</td>
                    <td>64</td>
                    <td className="hypoeffective">139</td>
                    <td>66</td>
                    <td className="supereffective">138</td>
                    <td>9</td>
                    <td className="supereffective">78</td>
                    <td className="hypoeffective">79</td>
                </tr>
                <tr>
                    <th className="psychic">psychic</th>
                    <td>70</td>
                    <td className="hypoeffective">26</td>
                    <td>28</td>
                    <td>105</td>
                    <td>44</td>
                    <td>25</td>
                    <td>123</td>
                    <td>87</td>
                    <td className="hypoeffective"></td>
                    <td>110</td>
                    <td className="immune">151</td>
                    <td className="supereffective">82</td>
                    <td>146</td>
                    <td>84</td>
                    <td>130</td>
                    <td>126</td>
                    <td className="supereffective">98</td>
                    <td>118</td>
                </tr>
                <tr>
                    <th className="flying">flying</th>
                    <td>69</td>
                    <td className="hypoeffective">27</td>
                    <td>48</td>
                    <td>108</td>
                    <td className="hypoeffective">21</td>
                    <td>97</td>
                    <td>53</td>
                    <td>5</td>
                    <td>110</td>
                    <td></td>
                    <td>73</td>
                    <td className="supereffective">41</td>
                    <td className="supereffective">128</td>
                    <td>104</td>
                    <td className="hypoeffective">92</td>
                    <td>137</td>
                    <td>88</td>
                    <td className="supereffective">148</td>
                </tr>
                <tr>
                    <th className="dark">dark</th>
                    <td className="hypoeffective">33</td>
                    <td>50</td>
                    <td>22</td>
                    <td>103</td>
                    <td>46</td>
                    <td>13</td>
                    <td className="supereffective">65</td>
                    <td>81</td>
                    <td className="supereffective">151</td>
                    <td>73</td>
                    <td className="hypoeffective"></td>
                    <td className="hypoeffective">121</td>
                    <td>94</td>
                    <td>119</td>
                    <td>144</td>
                    <td>125</td>
                    <td>7</td>
                    <td>127</td>
                </tr>
                <tr>
                    <th className="fighting">fighting</th>
                    <td className="hypoeffective">30</td>
                    <td className="supereffective">16</td>
                    <td>24</td>
                    <td>107</td>
                    <td>20</td>
                    <td>49</td>
                    <td className="immune">19</td>
                    <td>64</td>
                    <td className="hypoeffective">82</td>
                    <td className="hypoeffective">41</td>
                    <td className="supereffective">121</td>
                    <td></td>
                    <td>124</td>
                    <td className="supereffective">95</td>
                    <td className="supereffective">74</td>
                    <td className="supereffective">90</td>
                    <td className="hypoeffective">111</td>
                    <td className="hypoeffective">141</td>
                </tr>
                <tr>
                    <th className="grass">grass</th>
                    <td>113</td>
                    <td className="hypoeffective">32</td>
                    <td className="supereffective">96</td>
                    <td className="hypoeffective">131</td>
                    <td>100</td>
                    <td className="hypoeffective">61</td>
                    <td>72</td>
                    <td className="supereffective">139</td>
                    <td>146</td>
                    <td className="hypoeffective">128</td>
                    <td>94</td>
                    <td>124</td>
                    <td className="hypoeffective"></td>
                    <td>101</td>
                    <td className="supereffective">109</td>
                    <td>149</td>
                    <td className="hypoeffective">67</td>
                    <td className="hypoeffective">150</td>
                </tr>
                <tr>
                    <th className="normal">normal</th>
                    <td>58</td>
                    <td className="hypoeffective">85</td>
                    <td>34</td>
                    <td>59</td>
                    <td>52</td>
                    <td>91</td>
                    <td className="immune">2</td>
                    <td>66</td>
                    <td>84</td>
                    <td>104</td>
                    <td>119</td>
                    <td>95</td>
                    <td>101</td>
                    <td></td>
                    <td className="hypoeffective">140</td>
                    <td>147</td>
                    <td>142</td>
                    <td>145</td>
                </tr>
                <tr>
                    <th className="rock">rock</th>
                    <td>71</td>
                    <td className="hypoeffective">120</td>
                    <td>86</td>
                    <td>132</td>
                    <td>135</td>
                    <td className="supereffective">143</td>
                    <td>57</td>
                    <td className="hypoeffective">138</td>
                    <td>130</td>
                    <td className="supereffective">92</td>
                    <td>144</td>
                    <td className="hypoeffective">74</td>
                    <td>109</td>
                    <td>140</td>
                    <td></td>
                    <td className="supereffective">152</td>
                    <td>136</td>
                    <td className="supereffective">112</td>
                </tr>
                <tr>
                    <th className="ice">ice</th>
                    <td>134</td>
                    <td className="hypoeffective">122</td>
                    <td className="hypoeffective">115</td>
                    <td className="supereffective">99</td>
                    <td>55</td>
                    <td className="hypoeffective">133</td>
                    <td>93</td>
                    <td className="supereffective">9</td>
                    <td>126</td>
                    <td className="supereffective">137</td>
                    <td>125</td>
                    <td>90</td>
                    <td className="supereffective">149</td>
                    <td>147</td>
                    <td>152</td>
                    <td className="hypoeffective"></td>
                    <td>116</td>
                    <td>153</td>
                </tr>
                <tr>
                    <th className="poison">poison</th>
                    <td className="supereffective">63</td>
                    <td className="immune">51</td>
                    <td>35</td>
                    <td>56</td>
                    <td>89</td>
                    <td>106</td>
                    <td className="hypoeffective">60</td>
                    <td className="hypoeffective">78</td>
                    <td>98</td>
                    <td>88</td>
                    <td>7</td>
                    <td>111</td>
                    <td className="supereffective">67</td>
                    <td>142</td>
                    <td className="hypoeffective">136</td>
                    <td>116</td>
                    <td className="hypoeffective"></td>
                    <td>129</td>
                </tr>
                <tr>
                    <th className="bug">bug</th>
                    <td className="hypoeffective">117</td>
                    <td className="hypoeffective">8</td>
                    <td>36</td>
                    <td>102</td>
                    <td>40</td>
                    <td className="hypoeffective">68</td>
                    <td className="hypoeffective">80</td>
                    <td>79</td>
                    <td className="supereffective">116</td>
                    <td className="hypoeffective">148</td>
                    <td className="supereffective">127</td>
                    <td className="hypoeffective">141</td>
                    <td className="supereffective">150</td>
                    <td>145</td>
                    <td>112</td>
                    <td>153</td>
                    <td className="hypoeffective">129</td>
                    <td></td>
                </tr>
            </tbody>
        </table>

        <div>
            <h1 className="whitespace">I have not played Pokemon in so long.</h1>
        </div>

        <table className="legend">
            <thead>
                <tr>
                <th></th>
                <th className="defense" colSpan={4}>defense</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>attack</th>
                    <td>*1</td>
                    <td className="immune">*0</td>
                    <td className="hypoeffective">*1/2</td>
                    <td className="supereffective">*2</td>
                </tr>
            </tbody>
        </table>
    </div>
  );
}