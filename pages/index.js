import styles from '../styles/Home.module.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { ConstructionOutlined, DateRange, Power } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import date from 'date-and-time';
import Paper from '@mui/material/Paper';
import Chart from 'chart.js/auto';
/*
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  PieElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  PieElement,
  Title,
  Tooltip,
  Legend
);
*/
import { Line, Bar, Doughnut } from 'react-chartjs-2';

var colors = [
  '#F63E36',
  '#D42F6B',
  '#EB3FD3',
  '#B32FD4',
  '#9B36F6',
  '#F6532C',
  '#D46126',
  '#EB8D36',
  '#D49126',
  '#F6BD2C',
  '#F6D32C',
  '#D4C726',
  '#D8EB37',
  '#86D426',
  '#55F62C',
  '#2CF684',
  '#26D4A3',
  '#35EAEB',
  '#26A6D4',
  '#2C8CF6',
  '#2F58F6',
]

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

function AboutPage()
{
  return (<div><Card><CardHeader title="Luna Intelligence Dashboard"></CardHeader>
    <CardContent>
      <p>Bounty Description - <a target="_blank" rel="noreferrer" href='https://flipsidecrypto.xyz/drops/mqPbAB6CQHUSDlV7AsVsU'>https://flipsidecrypto.xyz/drops/mqPbAB6CQHUSDlV7AsVsU</a></p>
      <p>This dashboard attempts to capture all sorts of data related to Terra-Luna.  Feel free to explore the data!</p>
      <a target="_blank" rel="noreferrer" href='https://flipsidecrypto.xyz'><Image alt="" height={40} width={264} src="/powered.png"></Image></a>
      <p>Feel free to request for more types of analytics here - <a target="_blank" rel="noreferrer" href='https://github.com/antonyip/terraluna-intelligence/issues'>https://github.com/antonyip/terraluna-intelligence/issues</a></p>
      <p>
        Credits:
        <li>https://twitter.com/pinehearst_</li>
        <li>https://twitter.com/darksoulsfanlol</li>
        <li>https://twitter.com/sem1d5</li>
        <li>https://twitter.com/jp12__</li>
        <li>https://twitter.com/TZMCrypto</li>
        <li>https://twitter.com/AD14367367</li>
        <li>https://twitter.com/cryptoicicle</li>
        <li>https://twitter.com/thekakamora</li>
        <li>https://twitter.com/sammycrypto4</li>
        <li>https://twitter.com/ndhung1104</li>
        <li>https://twitter.com/der_piper</li>
        <li>https://twitter.com/adriaparcerisas</li>
        <li>https://twitter.com/jxboi</li>
        <li>https://twitter.com/RZinovyev</li>
        <li>ltirrell</li>
        </p>
      
    </CardContent>
    </Card></div>);
}

function Pages(props) {

  console.log(props.pageNumber);
  if(props.pageNumber === 0) {return (<div><AboutPage /></div>);}
  if(props.pageNumber === 1) {return (<div><BlockchainStatsPage /></div>);}
  if(props.pageNumber === 2) {return (<div><StableCoinPage /></div>);}
  if(props.pageNumber === 3) {return (<div><CW20Page /></div>);}
  if(props.pageNumber === 4) {return (<div><MarketFlowPage /></div>);}
  if(props.pageNumber === 5) {return (<div><BridgePage /></div>);}
  
  if(props.pageNumber === 8) {return (<div><FreeWillyPage /></div>);}
  
  if (props.pageNumber === 'Anchor') {return (<div><AnchorPage /></div>);}
  if (props.pageNumber === 'Knowhere') {return (<div><KnowherePage /></div>);}
  if (props.pageNumber === 'RandomEarth') {return (<div><RandomEarthPage /></div>);}
  if (props.pageNumber === 'Mirror') {return (<div><MirrorPage /></div>);}
  if (props.pageNumber === 'Angel (Halo)') {return (<div><AngelPage /></div>);}
  if (props.pageNumber === 'Spectrum') {return (<div><SpectrumPage /></div>);}
  if (props.pageNumber === 'Galactic Punks') {return (<div><GPPage /></div>);}
  if (props.pageNumber === 'Levana Dragons') {return (<div><LevanaPage /></div>);}
  if (props.pageNumber === 'Chai') {return (<div><ChaiPage /></div>);}
  if (props.pageNumber === 'DegenBox') {return (<div><DegenBoxPage /></div>);}
  if (props.pageNumber === 'Mars') {return (<div><MarsPage /></div>);}
  if (props.pageNumber === 'RiskHarbor') {return (<div><RiskHarborPage /></div>);}
  if (props.pageNumber === 'LFG') {return (<div><LFGPage /></div>);}
  
  
  
  
  
  return (
    <Typography paragraph>
      <h2> Sorry, page not done yet </h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
      enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
      imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
      Convallis convallis tellus id interdum velit laoreet id donec ultrices.
      Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
      adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
      nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
      leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
      feugiat vivamus at augue. At augue eget arcu dictum varius duis at
      consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
      sapien faucibus et molestie ac.
    </Typography>
  );
}

function displayNiceTitle(myString)
{
  var rv = []
  var toCaps = 1;
  for (let index = 0; index < myString.length; index++) {
    const element = myString[index];
    if (toCaps === 1)
    {
      rv.push(element.toUpperCase());
      toCaps = 0;
    }
    else
    {
      rv.push(element);
    }
    
    if (element === ' ')
    {
      toCaps = 1;
    }
  }
  return rv.join('');
}

//---------------------- Chart Functions
function generateChartOptions(myVar, showLegend) {
  return {
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: showLegend,
        position: 'top',
      },
      title: {
        display: true,
        text: myVar,
      },
    },
  };
}

function generateLRChartOptions(myVar) {
  return {
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: myVar,
      },
    },
    scales: {
      y1: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y2: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };
}

function generateLunaPriceChartData(xValues, yValues, y1, y2) {
  return {
    labels: xValues,
    datasets: [
      {
        type: 'line',
        label: 'Max',
        data: y1,
        backgroundColor: colors[2]
      },
      {
        type: 'line',
        label: 'Min',
        data: y2,
        backgroundColor: colors[4]
      },
      {
        type: 'bar',
        label: 'Avg',
        data: yValues,
        backgroundColor: colors[8]
      },
    ],
  };
}

function generateBarChartData(xValues, yValues) {
  return {
    labels: xValues,
    datasets: [
      {
        type: 'bar',
        data: yValues,
        backgroundColor: colors[0]
      }
    ],
  };
}

function generateBarChartLRData(xValues, yValues, labels) {
  var localDataset = []
  localDataset.push({
    type: 'line',
    data: yValues[0],
    label: labels[0],
    backgroundColor: colors[4],
    yAxisID: 'y1',
  })
  localDataset.push({
    type: 'bar',
    data: yValues[1],
    label: labels[1],
    backgroundColor: colors[0],
    yAxisID: 'y2',
  })
return {
  labels: xValues,
  datasets: localDataset,
};
}

function generateBarChartSeriesData(xValues, yValues, labels) {
    var localDataset = []
    yValues.forEach((element,index) => {
      localDataset.push({
        type: 'bar',
        data: element,
        label: labels[index],
        backgroundColor: colors[index]
      })
    });
    
    localDataset[localDataset.length-1]["type"] = 'line';
  return {
    labels: xValues,
    datasets: localDataset,
  };
}

function generatePieChartData(xValues, yValues) {
  return {
    labels: xValues,
    datasets: [
      {
        type: 'pie',
        data: yValues,
        backgroundColor: colors
      },
    ],
  };
}

function LazyPieChart(props)
{
  const { url, xKey, yKey, title, showLabels } = props;
  const [getData, setData] = useState("")

  React.useEffect(() => {
    axios.get(url).then (response => {
      setData(response);
    }).catch (error => {
      console.log(error);
    })
  },[]);

  if (getData === "") return (<div><CircularProgress /></div>);
  //console.log(getData);
  var xValues = []
  var yValues = []
  getData.data.forEach( d => {
    xValues.push(d[xKey]);
    yValues.push(d[yKey]);
  })

  var chartOptions = generateChartOptions(title, showLabels);
  var chartData = generatePieChartData(xValues, yValues);
  
  return <Bar md={6} options={chartOptions} data={chartData} height={null}/>
}

function LazyChartOne(props)
{
  const { url, xKey, yKey, title, showLabels } = props;
  const [getData, setData] = useState("")

  React.useEffect(() => {
    axios.get(url).then (response => {
      setData(response);
    }).catch (error => {
      console.log(error);
    })
  },[]);

  if (getData === "") return (<div><CircularProgress /></div>);
  //console.log(getData);
  var xValues = []
  var yValues = []
  getData.data.forEach( d => {
    xValues.push(d[xKey]);
    yValues.push(d[yKey]);
  })

  var chartOptions = generateChartOptions(title, showLabels);
  var chartData = generateBarChartData(xValues, yValues);
  
  return <Bar md={6} options={chartOptions} data={chartData} height={null}/>
}

function LazyChartCoinGecko(props)
{
  const { url, xKey, yKey, title, showLabels } = props;
  const [getData, setData] = useState("")

  React.useEffect(() => {
    axios.get(url).then (response => {
      setData(response);
    }).catch (error => {
      console.log(error);
    })
  },[]);

  if (getData === "") return (<div><CircularProgress /></div>);

  console.log(getData);

  var xValues = []
  var yValues = []
  getData.data.prices.forEach( d => {
    xValues.push(new Date(d[0]).toISOString().substring(0,10));
    yValues.push(d[1]);
  })

  var chartOptions = generateChartOptions(title, showLabels);
  var chartData = generateBarChartData(xValues, yValues);
  
  return <Bar md={6} options={chartOptions} data={chartData} height={null}/>
}

function LazyChartETPrice(props)
{
  const { url, token, title } = props;
  const [getData, setData] = useState("")

  React.useEffect(() => {
    axios.get(url).then (response => {
      setData(response);
    }).catch (error => {
      console.log(error);
    })
  },[]);

  if (getData === "") return (<div><CircularProgress /></div>);

  console.log(getData);

  var xValues = []
  var yValues = []
  getData.data.prices[token].forEach( d => {
    xValues.push(new Date(d[0]*1000).toISOString().substring(0,10));
    yValues.push(d[1]);
  })

  xValues = xValues.slice(-30);
  yValues = yValues.slice(-30);

  var chartOptions = generateChartOptions(title, false);
  var chartData = generateBarChartData(xValues, yValues);
  
  return <Bar options={chartOptions} data={chartData} height={null}/>
}

function LazyTable(props)
{
  const { url, fields } = props;
  const [getData, setData] = useState("")

  React.useEffect(() => {
    axios.get(url).then (response => {
      setData(response);
    }).catch (error => {
      console.log(error);
    })
  },[]);

  if (getData === "") return <div>Loading...</div>

  var i = 0;
  return (
    <div style={{ height: '60vh', width: '100%' }}><h2>Traders that average 10k USD a day over 90 days.</h2>
      <DataGrid autoPageSize components={{ Toolbar: GridToolbar }} rowHeight={25} getRowId={(row) => ++i} rows={getData.data} columns={fields} />
    </div>
  );
}

function LazyInOutNetChart(props)
{
  const { url, xKey, yIn, yOut, yNet, title, showLabels } = props;
  const [getData, setData] = useState("")

  React.useEffect(() => {
    axios.get(url).then (response => {
      setData(response);
    }).catch (error => {
      console.log(error);
    })
  },[]);

  if (getData === "") return (<div><CircularProgress /></div>);

  var dataXdate = []
  var ancbLunaFinal = []
  var dataYin = []
  var dataYout = []
  var dataYnet = []
  var limit = 35;
  getData.data.forEach(element => {
    if (limit > 0)
    {
      dataXdate.push(element[xKey].substr(0,10));
      dataYin.push(element[yIn]);
      dataYout.push(-element[yOut]);
      dataYnet.push(element[yIn] - element[yOut]);
      limit -= 1;
    }
  });
  ancbLunaFinal.push(dataYin)
  ancbLunaFinal.push(dataYout)
  ancbLunaFinal.push(dataYnet)
  var ancbLunaOptions = generateChartOptions(title, showLabels);
  var ancbLunaData = generateBarChartSeriesData(dataXdate, ancbLunaFinal,["Inflows","Outflows","Net"]);

  return <Bar data={ancbLunaData} options={ancbLunaOptions} height={null} />
}

//---------------------- Sub Pages
function BlockchainStatsPage()
{
  const [getLunaPrice,setLunaPrice] = useState("")
  const [getLunaTxCount,setLunaTxCount] = useState("")
  const [getLunaMsgCount,setLunaMsgCount] = useState("")
  const [getLunaValidatorVotingPower,setLunaValidatorVotingPower] = useState("")
  const [getLunaBreakdown,setLunaBreakdown] = useState("")
  const [getLunaGas,setLunaGas] = useState("")
  
  React.useEffect(() => {

    axios.get("/api/getLunaPrice").then (response => {
      setLunaPrice(response);
    }).catch (error => {
      console.log(error);
    })

    axios.get("/api/getLunaTxCount").then (response => {
      setLunaTxCount(response);
    }).catch (error => {
      console.log(error);
    })

    axios.get("/api/getLunaMsgCount").then (response => {
      setLunaMsgCount(response);
    }).catch (error => {
      console.log(error);
    })

    axios.get("/api/getLunaValidatorVotingPower").then (response => {
      setLunaValidatorVotingPower(response);
    }).catch (error => {
      console.log(error);
    })

    axios.get("/api/getLunaBreakdown").then (response => {
      setLunaBreakdown(response);
    }).catch (error => {
      console.log(error);
    })

    axios.get("/api/getLunaGasUsage").then (response => {
      setLunaGas(response);
    }).catch (error => {
      console.log(error);
    })

  },[])

  if (getLunaPrice === "") return (<div><CircularProgress /></div>);
  if (getLunaTxCount === "") return (<div><CircularProgress /></div>);
  if (getLunaMsgCount === "") return (<div><CircularProgress /></div>);
  if (getLunaValidatorVotingPower === "") return (<div><CircularProgress /></div>);
  if (getLunaBreakdown === "") return (<div><CircularProgress /></div>);
  if (getLunaGas === "") return (<div><CircularProgress /></div>);

  var dataLunaPriceDate = []
  var dataLunaPrice = []
  var dataLunaPriceMin = []
  var dataLunaPriceMax = []
  getLunaPrice.data.forEach( d => {
    dataLunaPriceDate.push(d.BLOCK_HOUR.substr(0,10));
    dataLunaPrice.push(d.PRICEYLUNA);
    dataLunaPriceMin.push(d.MINLUNA);
    dataLunaPriceMax.push(d.MAXLUNA);
  })
  var lunaPriceOptions = generateChartOptions("Daily Luna Price", true);
  var lunaPrice = generateLunaPriceChartData(dataLunaPriceDate, dataLunaPrice, dataLunaPriceMin, dataLunaPriceMax);

  var dataTxsDate = []
  var dataTxs = []
  getLunaTxCount.data.forEach( d => {
    dataTxsDate.push(d.DAY_DATE.substr(0,10));
    dataTxs.push(d.NUM_TXS);
  })
  var lunaTxsOptions = generateChartOptions("Daily Number of Transactions (TerraLuna Module Interactions)", false);
  var lunaTxs = generateBarChartData(dataTxsDate, dataTxs);

  var dataMsgDate = []
  var dataMsg = []
  getLunaMsgCount.data.forEach( d => {
    dataMsgDate.push(d.DAY_DATE.substr(0,10));
    dataMsg.push(d.NUM_TXS);
  })
  var lunaMsgOptions = generateChartOptions("Daily Number of Msgs (Smart Contract Interactions)", false);
  var lunaMsg = generateBarChartData(dataMsgDate, dataMsg);

  var dataVoteDate = []
  var dataVote = []
  getLunaValidatorVotingPower.data.forEach( d => {
    var day_date = d.DAY_DATE.substr(0,10)
    dataVoteDate.push(day_date);
    dataVote.push(d.TOTAL_VOTING_POWER);
  })

  var lunaVoteOptions = generateChartOptions("Daily Total Voting Power", false);
  var lunaVote = generateBarChartData(dataVoteDate, dataVote);

  var dataBreakdownName = []
  var dataBreakdown = []
  getLunaBreakdown.data.forEach( d => {
    dataBreakdownName.push(d.RE_TYPED);
    dataBreakdown.push(d.AVG_SUM_LUNA);
  })

  var lunaBreakdownOptions = generateChartOptions("Current Luna Distribution", false);
  var lunaBreakdown = generatePieChartData(dataBreakdownName, dataBreakdown);

  var dataLunaGasDate = []
  var dataLunaGas = []
  getLunaGas.data.forEach( d => {
    dataLunaGasDate.push(d.DAY_DATE.substr(0,10));
    dataLunaGas.push(d.SUM_GAS_USED);
  })

  var lunaGasOptions = generateChartOptions("Daily Luna Gas Usage", false);
  var lunaGasData = generateBarChartData(dataLunaGasDate, dataLunaGas);


  https://api.flipsidecrypto.com/api/v2/queries/29481f97-b3bc-4c6c-8f49-fc94478b275b/data/latest

  return (
    <Grid container spacing={2}>
        <Grid item md={6}>
          <Bar md={6} options={lunaPriceOptions} data={lunaPrice} height={null}/>
        </Grid>
        <Grid item md={6}>
          <Bar md={6} options={lunaBreakdownOptions} data={lunaBreakdown} height={null}/>
        </Grid>
        <Grid item md={6}>
          <Bar md={6} options={lunaTxsOptions} data={lunaTxs} height={null}/>
        </Grid>
        <Grid item md={6}>
          <Bar md={6} options={lunaMsgOptions} data={lunaMsg} height={null}/>
        </Grid>
        <Grid item md={6}>
          <Bar md={6} options={lunaVoteOptions} data={lunaVote} height={null}/>
        </Grid>
        <Grid item md={6}>
          <Bar md={6} options={lunaGasOptions} data={lunaGasData} height={null}/>
        </Grid>
        <Grid item md={6}>
          <LazyChartOne url="/api/getLunaMarketSwaps" xKey="DAY_DATE" yKey="SUM_USD" title="Luna Market Swaps (USD Volume)" showLabels={false}/>
        </Grid>
        
    </Grid>);
}

function MirrorPage()
{
  // Resource - https://app.flipsidecrypto.com/dashboard/mirror-tvl-and-swap-volume-qB7esg 
  
/*
  return (
    <>
    <Card><CardHeader title="TODO: Integrate all the charts natively" /></Card>
      <iframe src='https://app.flipsidecrypto.com/dashboard/mirror-tvl-and-swap-volume-qB7esg' width="100%" height="600vh"/>
    </>
  )
*/
return (
  <Grid container spacing={2}>
    <Grid item md={6}>
      <LazyChartETPrice url="/api/getETPricesHourly" token="MIR" title="Mirror Token Price" showLabels={false}/>
    </Grid>
    <Grid item md={6}>
      <LazyChartOne url="/api/getMirrorTVL" xKey="DAY_DATE" yKey="TVL" title="Mirror TVL (Total Value Locked in USD)" showLabels={false}/>
    </Grid>
    <Grid item md={6}>
      <LazyChartOne url="/api/getMirrorSwapVolume" xKey="DAY_DATE" yKey="SWAP_VOLUME" title="Mirror Activity (Swap Volume in USD)" showLabels={false}/>
    </Grid>
  </Grid>
)

}

function BridgePage()
{
  return (
    <Grid container spacing={2}>
      <Grid item md={6}>
        <LazyChartOne url="/api/getWormholeBridgeTx" xKey="DATE" yKey="TX_COUNT" title="Wormhole TX Count" showLabels={false}/>
      </Grid>
      <Grid item md={5}>
        <LazyPieChart url="/api/getWormholeDestinations" xKey="BRIDGE_DESTINATION" yKey="USER" title="Ratios Of Wormhole Outflow" showLabels={false}/>
      </Grid>
      <Grid item md={1}></Grid>
      <Grid item md={6}>
        <LazyChartOne url="/api/getTerraBridgeTx" xKey="DATE" yKey="TX_COUNT" title="Terra Bridge TX Count" showLabels={false}/>
      </Grid>
      <Grid item md={6}>
        
      </Grid>
      <Grid item md={6}>
        <LazyInOutNetChart url="/api/getIbcUst" xKey="DAY_DATE" yIn="SUM_RAW_AMOUNT" yOut="IBC_OUT_AMOUNT" title="Terra Bridge IBC (UST)" showLabels={false}/>
      </Grid>
      <Grid item md={6}>
        <LazyInOutNetChart url="/api/getIbcLuna" xKey="DAY_DATE" yIn="SUM_RAW_AMOUNT" yOut="IBC_OUT_AMOUNT" title="Terra Bridge IBC (Luna)" showLabels={false}/>
      </Grid>
    </Grid>
  )
}

function MarketFlowPage()
{
  var myFields = [
    { field: 'TRADER', headerName: 'address', width: 450 },
    { field: 'SUM_RETURN_AMOUNT_USD', headerName: 'Volume', width: 150 },
  ]

  
  return (
    <Grid container spacing={2}>
      <Grid item md={8}>
        <LazyTable url="/api/getTopTraders" fields={myFields}/>
      </Grid>
      <Grid item md={4}>
        todo: figure out market flow based on these traders
      </Grid>
    </Grid>
  )
}

function AngelPage()
{
  // Resource: https://app.flipsidecrypto.com/dashboard/angel-protocol-delegations-wj-9hn
  /*
  return (
    <>
    <Card><CardHeader title="TODO: Integrate all the charts natively" /></Card>
      <iframe src='https://app.flipsidecrypto.com/dashboard/angel-protocol-delegations-wj-9hn' width="100%" height="600vh"/>
    </>
  )
  */
  return (
    <Grid container spacing={2}>
      <Grid item md={6}>
        <LazyChartETPrice url="/api/getETPricesHourly" token="HALO" title="Angel Token Price" showLabels={false}/>
      </Grid>
      <Grid item md={6}>
        <LazyChartOne url="/api/getAngelDelegations" xKey="DAY_DATE" yKey="DAILY_LUNA" title="Angel Delegations" showLabels={false}/>
      </Grid>
    </Grid>
  )
}

function SpectrumPage()
{
  return (
    <Grid container spacing={2}>
      <Grid item md={8}>
        <LazyChartCoinGecko url="/api/getCoinGeckoPrice/?currency=spectrum-token" title="Spec Token Price" showLabels={false}/>
      </Grid>
      <Grid item md={4}>
        Hello, nothing to put here for now...
      </Grid>
    </Grid>
  )
}

function GPPage()
{
  return (
    <Grid container spacing={2}>
      <Grid item md={6}>
        <LazyChartOne url="/api/getRandomEarthGPSales" xKey="DATE" yKey="NUM_SALES" title="GP Daily Sales on Random Earth (Txs)" showLabels={false}/>
      </Grid>
      <Grid item md={6}>
      <LazyChartOne url="/api/getRandomEarthGPSales" xKey="DATE" yKey="SUM_AMOUNT_LUNA" title="GP Daily Volume on Random Earth (Luna)" showLabels={false}/>
      </Grid>
      <Grid item md={6}>
      <LazyChartOne url="/api/getRandomEarthGPSales" xKey="DATE" yKey="FLOOR_LUNA" title="GP Daily Floor on Random Earth (Luna)" showLabels={false}/>
      </Grid>
    </Grid>
  )
}

function LevanaPage()
{
  return (
    <>
    <Grid container spacing={2}>
      <Grid item md={6}>
        <LazyChartOne url="/api/getRandomEarthLevanaMeteorSales" xKey="DAY_DATE" yKey="NFT_TRADED" title="Meteor Daily Sales on Random Earth (Txs)" showLabels={false}/>
      </Grid>
      <Grid item md={6}>
      <LazyChartOne url="/api/getRandomEarthLevanaMeteorSales" xKey="DAY_DATE" yKey="LUNA_VOL" title="Meteor Daily Volume on Random Earth (Luna)" showLabels={false}/>
      </Grid>
    </Grid>
    <Grid container spacing={2}>
    <Grid item md={6}>
      <LazyChartOne url="/api/getRandomEarthLevanaEggSales" xKey="DAY_DATE" yKey="NFT_TRADED" title="Egg Daily Sales on Random Earth (Txs)" showLabels={false}/>
    </Grid>
    <Grid item md={6}>
    <LazyChartOne url="/api/getRandomEarthLevanaEggSales" xKey="DAY_DATE" yKey="LUNA_VOL" title="Egg Daily Volume on Random Earth (Luna)" showLabels={false}/>
    </Grid>
    </Grid>
      <Grid container spacing={2}>
      <Grid item md={6}>
        <LazyChartOne url="/api/getRandomEarthLevanaDustSales" xKey="DAY_DATE" yKey="NFT_TRADED" title="Dust Daily Sales on Random Earth (Txs)" showLabels={false}/>
      </Grid>
      <Grid item md={6}>
      <LazyChartOne url="/api/getRandomEarthLevanaDustSales" xKey="DAY_DATE" yKey="LUNA_VOL" title="Dust Daily Volume on Random Earth (Luna)" showLabels={false}/>
      </Grid>
    </Grid>
      <Grid container spacing={2}>
      <Grid item md={6}>
        <LazyChartOne url="/api/getRandomEarthLevanaDragonSales" xKey="DAY_DATE" yKey="NFT_TRADED" title="Dragon Daily Sales on Random Earth (Txs)" showLabels={false}/>
      </Grid>
      <Grid item md={6}>
      <LazyChartOne url="/api/getRandomEarthLevanaDragonSales" xKey="DAY_DATE" yKey="LUNA_VOL" title="Dragon Daily Volume on Random Earth (Luna)" showLabels={false}/>
      </Grid>
    </Grid>
      <Grid container spacing={2}>
      <Grid item md={6}>
        <LazyChartOne url="/api/getRandomEarthLevanaLootSales" xKey="DAY_DATE" yKey="NFT_TRADED" title="Loot Daily Sales on Random Earth (Txs)" showLabels={false}/>
      </Grid>
      <Grid item md={6}>
      <LazyChartOne url="/api/getRandomEarthLevanaLootSales" xKey="DAY_DATE" yKey="LUNA_VOL" title="Loot Daily Volume on Random Earth (Luna)" showLabels={false}/>
      </Grid>
    </Grid>
    </>
  )
}

function ChaiPage()
{
  return (
    <Grid container spacing={2}>
      <Grid item md={2}>
        <p>Just some net movement in USD. 3M daily transacted in USD is a pretty nice number.</p>
        <a target="_blank" rel="noreferrer" href="https://techcrunch.com/2020/12/09/seoul-based-payment-tech-startup-chai-gets-60-million-from-hanhwa-softbank-ventures-asia/">Click me for news!</a>
      </Grid>
      <Grid item md={10}>
        <LazyInOutNetChart url="/api/getChaiFlow" xKey="DAY_DATE" yIn="SUM_INBOUND" yOut="SUM_OUTBOUND" title="Chai Net Flow (USD)" showLabels={false}/>
      </Grid>
    </Grid>
  )
}

function DegenBoxPage()
{
  return (
    <Grid container spacing={2}>
      <Grid item md={6}>
        <LazyInOutNetChart url="/api/getDegenBox" xKey="DATE_A" yIn="CUMULATIVE_DEPOSIT" yOut="CUMULATIVE_REDEEM" title="DegenBox Flows" showLabels={false}/>
      </Grid>
      <Grid item md={6}>
        <LazyChartOne url="/api/getDegenBox" xKey="DATE_A" yKey="DEGENBOX_UST_ANCHOR" title="UST in DegenBox" showLabels={false}/>
      </Grid>
      <Grid item md={6}>
        <LazyChartOne url="/api/getDegenBox" xKey="DATE_A" yKey="DEGENBOXPERCENT" title="DegenBox %" showLabels={false}/>
      </Grid>
      <Grid item md={6}>
        <LazyChartOne url="/api/getDegenBox" xKey="DATE_A" yKey="TOTAL_UST_IN_EARN" title="Total UST in Earn" showLabels={false}/>
      </Grid>
    </Grid>
  )
}

function MarsPage()
{
  return (
    <Grid container spacing={2}>
      <Grid item md={6}>
        <LazyInOutNetChart url="/api/getMars" xKey="TIME_MINUTE" yIn="MARS_BOUGHT" yOut="MARS_SOLD2" title="Mars Flows" showLabels={false}/>
      </Grid>
      <Grid item md={6}>
        <LazyChartOne url="/api/getMars" xKey="TIME_MINUTE" yKey="MARS_PRICE" title="Mars Price" showLabels={false}/>
      </Grid>
    </Grid>
  )
}

function RiskHarborPage()
{
  return (
    <Grid container spacing={2}>
      <Grid item md={12}>
        Well, you guys only sold 8m worth of coverage...
      </Grid>
      <Grid item md={6}>
        <LazyChartOne url="/api/getRiskHarbor" xKey="DAY_DATE" yKey="CUM_SUM_PREMIUM" title="Total Amount of Premium Gained" showLabels={false}/>
      </Grid>
      <Grid item md={6}>
        <LazyChartOne url="/api/getRiskHarbor" xKey="DAY_DATE" yKey="CUM_SUM_PRINCIPAL" title="Total Amount UST Covered" showLabels={false}/>
      </Grid>
    </Grid>
  )
}

function LFGPage()
{
  return (
    <Grid container spacing={2}>
      <Grid item md={12}>
        <li>TFL - https://finder.extraterrestrial.money/mainnet/address/terra1dp0taj85ruc299rkdvzp4z5pfg6z6swaed74e6 </li>
        <li>TFL - Hotwallet? - https://etherscan.io/address/0xe3011271416f3a827e25d5251d34a56d83446159</li>
        <li>TFL - Gnosis Safe for 1B BTC? https://etherscan.io/address/0xad41bd1cf3fd753017ef5c0da8df31a3074ea1ea </li>
        <li>LFG Wallet - https://finder.extraterrestrial.money/mainnet/account/terra1gr0xesnseevzt3h4nxr64sh5gk4dwrwgszx3nw</li>
        <li>LFG/TFL Burning Wallet (Burns 1000Luna every 10 blocks for UST) - https://finder.extraterrestrial.money/mainnet/address/terra1cymh5ywgn4azak74h4gsrnakqgel4y9ssersvx</li>
      </Grid>
      <Grid item md={6}>
        <LazyChartOne url="/api/getLFGBalances" xKey="DATE" yKey="LUNA_BALANCE" title="LFG Balances" showLabels={false}/>
      </Grid>
      <Grid item md={6}>
        <LazyChartOne url="/api/getLFGVesting" xKey="DAY_DATE" yKey="CUM_SUM_AMOUNT" title="LFG Spend to Vesting Contracts" showLabels={false}/>
      </Grid>
    </Grid>
  )
}



function ET_Circulation()
{
  const [getLunaPrice,setLunaPrice] = useState("")
  const [getUSTPrice,setUSTPrice] = useState("")
  
  // {"type":"INVALID_REQUEST_ERROR","message":"child \"denom\" fails because [\"denom\" must be one of 
  // [uluna, usdr, ukrw, uusd, ueur, luna, sdr, sdt, krw, krt, usd, ust, eur, eut]]","code":400}

  React.useEffect(() => {

    axios.get("/api/getETTokenCirc?denom=uluna").then (response => {
      setLunaPrice(response);
    }).catch (error => {
      console.log(error);
    })

    axios.get("/api/getETTokenCirc?denom=uusd").then (response => {
      setUSTPrice(response);
    }).catch (error => {
      console.log(error);
    })

  },[]);

  if (getLunaPrice === "") return (<div><CircularProgress /></div>);
  if (getUSTPrice === "") return (<div><CircularProgress /></div>);

  var dataLunaDate = []
  var dataLunaBurnTotal = []
  var dataLunaBurnCirc = []

  var limit=30;
  getLunaPrice.data.uluna.forEach(element => {
    if (limit > 0)
    {
      dataLunaDate.push(element.date);
      dataLunaBurnTotal.push(element.total / 10**6 );
      dataLunaBurnCirc.push(element.circ / 10**6 );
      limit -= 1;
    }
  });
  var lunaBurnOptions = generateChartOptions("Luna in Circulation", false);
  var lunaBurn = generateBarChartData(dataLunaDate, dataLunaBurnCirc);

  var dataUSTDate = []
  var dataUSTBurn = []
  limit=30;
  getUSTPrice.data.uusd.forEach(element => {
    if (limit > 0)
    {
      dataUSTDate.push(element.date);
      dataUSTBurn.push(element.total / 10**6 );
      limit -= 1;
    }
  });
  var USTBurnOptions = generateChartOptions("UST in Circulation", false);
  var USTBurn = generateBarChartData(dataUSTDate, dataUSTBurn);

  return (
    <Grid container spacing={2}>
        <Grid item md={12}>
          Partial Completion : TODO Get ALL ET Prices
        </Grid>
        <Grid item md={6}>
          <Bar md={6} options={lunaBurnOptions} data={lunaBurn} height={null}/>
        </Grid>
        <Grid item md={6}>
          <Bar md={6} options={USTBurnOptions} data={USTBurn} height={null}/>
        </Grid>
    </Grid>
    );
}

function StableCoinPage()
{
  const [getLunaBurn,setLunaBurn] = useState("")
  const [getUSTBurn,setUSTBurn] = useState("")
  
  React.useEffect(() => {

    axios.get("/api/getLunaBurn").then (response => {
      setLunaBurn(response);
    }).catch (error => {
      console.log(error);
    })
    axios.get("/api/getUSTBurn").then (response => {
      setUSTBurn(response);
    }).catch (error => {
      console.log(error);
    })
  },[]);

  if (getLunaBurn === "") return (<div><CircularProgress /></div>);
  if (getUSTBurn === "") return (<div><CircularProgress /></div>);

  var dataLunaDate = []
  var dataLunaBurn = []
  getLunaBurn.data.forEach(element => {
    dataLunaDate.push(element.DAY_DATE.substr(0,10));
    dataLunaBurn.push(element.NET_BURN);
  });
  var lunaBurnOptions = generateChartOptions("Luna Daily Net Burn", false);
  var lunaBurn = generateBarChartData(dataLunaDate, dataLunaBurn);

  var dataUSTDate = []
  var dataUSTBurn = []
  getUSTBurn.data.forEach(element => {
    dataUSTDate.push(element.DAY_DATE.substr(0,10));
    dataUSTBurn.push(element.NET_BURN);
  });
  var USTBurnOptions = generateChartOptions("UST Daily Net Mint", false);
  var USTBurn = generateBarChartData(dataUSTDate, dataUSTBurn);

  return (
    <>
    <Grid container spacing={2}>
        <Grid item md={12}>
          This is calculated from market swaps into Luna / UST
        </Grid>
        <Grid item md={6}>
          <Bar md={6} options={lunaBurnOptions} data={lunaBurn} height={null}/>
        </Grid>
        <Grid item md={6}>
          <Bar md={6} options={USTBurnOptions} data={USTBurn} height={null}/>
        </Grid>
    </Grid>
    <ET_Circulation />
    </>
    );
}

function CW20Page()
{
  const [getPrices,setPrices] = useState("")
  
  React.useEffect(() => {

    axios.get("/api/getPricesFromET").then (response => {
      setPrices(response);
    }).catch (error => {
      console.log(error);
    })

  },[]);

  if (getPrices === "") return (<div><CircularProgress /></div>);

  var dataLunaName = []
  var dataLunaPrice = []

  //console.log(getPrices.data.prices);
  /*
  getPrices.data.prices.forEach(element => {
    dataLunaName.push(element.symbol);
    dataLunaPrice.push(element.market_cap);
  });
  */


  for (var mykey in getPrices.data.prices)
  {
    dataLunaName.push([getPrices.data.prices[mykey].symbol, Math.round(getPrices.data.prices[mykey].price*1000) / 1000]);
  }
  //var lunaBurnOptions = generateChartOptions("CW20 Market Caps", false);
  //var lunaBurn = generateBarChartData(dataLunaName, dataLunaPrice);

  return (
    <Grid container spacing={2}>
      {
      dataLunaName.map(e => {
        return (
          <Grid item md={3} key={e[0]}>
            {e[0] + " " + e[1]}
          </Grid>
        )
      })}
    </Grid>
    );
}

function FreeWillyPage()
{
  const [getData,setData] = useState("")
  const [getDataLUNA,setDataLUNA] = useState("")
  const [getDataETH,setDataETH] = useState("")

  React.useEffect(() => {

    axios.get("/api/getFreeWillyLiquidationProfile").then (response => {
      setData(response);
    }).catch (error => {
      console.log(error);
    })

    axios.get("/api/getFreeWillyLUNA").then (response => {
      setDataLUNA(response);
    }).catch (error => {
      console.log(error);
    })

    axios.get("/api/getFreeWillyETH").then (response => {
      setDataETH(response);
    }).catch (error => {
      console.log(error);
    })

  },[]);

  if (getData === "") return (<div><CircularProgress /></div>);
  if (getDataETH === "") return (<div><CircularProgress /></div>);
  if (getDataLUNA === "") return (<div><CircularProgress /></div>);

  console.log(getData.data);
  //console.log(getDataETH.data);
  //console.log(getDataLUNA.data);

  var dETHxAxis = []
  var dETHyAxis = []
  getDataETH.data.query_result.bid_pools.forEach(e => {
    dETHxAxis.push(e.premium_rate);
    dETHyAxis.push(e.total_bid_amount / 10**9);
  })
  var c1o = generateChartOptions("bETH Bidding Volumes", false);
  var c1d = generateBarChartData(dETHxAxis, dETHyAxis);

  var dLUNAxAxis = []
  var dLUNAyAxis = []
  getDataLUNA.data.query_result.bid_pools.forEach(e => {
    dLUNAxAxis.push(e.premium_rate);
    dLUNAyAxis.push(e.total_bid_amount / 10**9);
  })
  var c2o = generateChartOptions("bLUNA Bidding Volumes", false);
  var c2d = generateBarChartData(dLUNAxAxis, dLUNAyAxis);

  return (
    <Grid container spacing={2}>
    <Grid item md={6}>
      <Bar options={c1o} data={c1d} height={null}/>
    </Grid>
    <Grid item md={6}>
      <Bar options={c2o} data={c2d} height={null}/>
    </Grid>
    </Grid>
  )
}

function AnchorPage()
{
  const [getData,setData] = useState("")
  const [getDataStats,setDataStats] = useState("")
  const [getAncFlows,setAncFlows] = useState("")
  

  //TODO: ADD this https://app.flipsidecrypto.com/dashboard/anchor-collaterals-UxMbQB
  React.useEffect(() => {

    axios.get("/api/getAncDailyDeals").then (response => {
      setData(response);
    }).catch (error => {
      console.log(error);
    })

    axios.get("/api/getAncStats").then (response => {
      setDataStats(response);
    }).catch (error => {
      console.log(error);
    })

    axios.get("/api/getAncFlows").then (response => {
      setAncFlows(response);
    }).catch (error => {
      console.log(error);
    })

  },[]);

  if (getData === "") return (<div><CircularProgress /></div>);
  if (getDataStats === "") return (<div><CircularProgress /></div>);
  if (getAncFlows === "") return (<div><CircularProgress /></div>);
  
  var dataDate = []
  var dataBorrow = []
  var dataRepay = []
  var dataNet = []
  var dataFinal = []
  getData.data.forEach(element => {
    dataDate.push(element.DAY_DATE.substr(0,10));
    dataBorrow.push(element.AMOUNT_BORROWED);
    dataRepay.push(-element.AMOUNT_REPAYED);
    dataNet.push(element.AMOUNT_BORROWED - element.AMOUNT_REPAYED);
  });
  dataFinal.push(dataBorrow);
  dataFinal.push(dataRepay);
  dataFinal.push(dataNet);
  var USTBurnOptions = generateChartOptions("UST Amount Flows", true);
  var USTBurn = generateBarChartSeriesData(dataDate, dataFinal, ["Borrow", "Repay", "Net"]);


  var dataStatsDate = []
  var dataStatsRate = []
  var limit = 30;
  getDataStats.data.forEach(element => {
    if (limit > 0)
    {
      dataStatsDate.push(element.DATE_H);
      dataStatsRate.push(element.ANC_EMISSION_RATE);
      limit -= 1;
    }
  });
  dataStatsDate.reverse();
  dataStatsRate.reverse();
  var ancInterestRateOptions = generateChartOptions("ANC Interest Rate", false);
  var ancInterestRate = generateBarChartData(dataStatsDate, dataStatsRate);

  var dataStatsDate2 = []
  var dataStatsRate2 = []
  var limit = 30;
  getDataStats.data.forEach(element => {
    if (limit > 0)
    {
      dataStatsDate2.push(element.DATE_H);
      dataStatsRate2.push(element.YIELD_RESERVES);
      limit -= 1;
    }
  });
  dataStatsDate2.reverse();
  dataStatsRate2.reverse();
  var ancInterestRateOptions2 = generateChartOptions("Yield Reserves", false);
  var ancInterestRate2 = generateBarChartData(dataStatsDate2, dataStatsRate2);

  var dataStatsDate3 = []
  var dataStatsRate3 = []
  var limit = 30;
  getDataStats.data.forEach(element => {
    if (limit > 0)
    {
      dataStatsDate3.push(element.DATE_H);
      dataStatsRate3.push(element.ANC_PURCHASE_AMOUNT);
      limit -= 1;
    }
  });
  dataStatsDate3.reverse();
  dataStatsRate3.reverse();
  var ancInterestRateOptions3 = generateChartOptions("ANC Buyback", false);
  var ancInterestRate3 = generateBarChartData(dataStatsDate3, dataStatsRate3);

  var ancbLunaDate = []
  var ancbLunaFinal = []
  var ancbLunaProvide = []
  var ancbLunaWithdraw = []
  var ancbLunaNet = []
  var limit = 30;
  getAncFlows.data.forEach(element => {
    if (limit > 0)
    {
      ancbLunaDate.push(element.DAY_DATE.substr(0,10));
      ancbLunaProvide.push(element.PROVIDE_BLUNA);
      ancbLunaWithdraw.push(-element.WITHDRAW_BLUNA);
      ancbLunaNet.push(element.PROVIDE_BLUNA-element.WITHDRAW_BLUNA);
      limit -= 1;
    }
  });
  ancbLunaFinal.push(ancbLunaProvide)
  ancbLunaFinal.push(ancbLunaWithdraw)
  ancbLunaFinal.push(ancbLunaNet)
  var ancbLunaOptions = generateChartOptions("bLuna Inflow / Outflows", false);
  var ancbLunaData = generateBarChartSeriesData(ancbLunaDate, ancbLunaFinal,["Provide","Withdraw","Net"]);

  var ancbEthDate = []
  var ancbEthFinal = []
  var ancbEthProvide = []
  var ancbEthWithdraw = []
  var ancbEthNet = []
  limit = 30;
  getAncFlows.data.forEach(element => {
    if (limit > 0)
    {
      ancbEthDate.push(element.DAY_DATE.substr(0,10));
      ancbEthProvide.push(element.PROVIDE_BETH);
      ancbEthWithdraw.push(-element.WITHDRAW_BETH);
      ancbEthNet.push(element.PROVIDE_BETH-element.WITHDRAW_BETH);
      limit -= 1;
    }
  });
  ancbEthFinal.push(ancbEthProvide)
  ancbEthFinal.push(ancbEthWithdraw)
  ancbEthFinal.push(ancbEthNet)
  var ancbEthOptions = generateChartOptions("bEth Inflows / Outflows", false);
  var ancbEthData = generateBarChartSeriesData(ancbEthDate, ancbEthFinal,["Provide","Withdraw","Net"]);
  
  return (
    <>
    <Grid container spacing={2}>
        <Grid item md={6}>
          <LazyChartCoinGecko url="/api/getAncPrice"  title="Anchor Price (USD)" showLabels={false}/>
        </Grid>
        <Grid item md={6}>
          <Bar options={USTBurnOptions} data={USTBurn} height={null}/>
        </Grid>
    </Grid>
    <Grid container spacing={2}>
        <Grid item md={4}>
          <Bar options={ancInterestRateOptions} data={ancInterestRate} height={null}/>
        </Grid>
        <Grid item md={4}>
          <Bar options={ancInterestRateOptions2} data={ancInterestRate2} height={null}/>
        </Grid>
        <Grid item md={4}>
          <Bar options={ancInterestRateOptions3} data={ancInterestRate3} height={null}/>
        </Grid>
    </Grid>
    <Grid container spacing={2}>
        <Grid item md={6}>
          <Bar options={ancbLunaOptions} data={ancbLunaData} height={null}/>
        </Grid>
        <Grid item md={6}>
          <Bar options={ancbEthOptions} data={ancbEthData} height={null}/>
        </Grid>
    </Grid>
    <Grid container spacing={2}>
        <Grid item md={6}>
          <LazyChartOne url="/api/getAncbLunaStats" xKey="DATES" yKey="TVL_AMT" title="bLuna TVL (bLUNA)" showLabels={false}/>
        </Grid>
        <Grid item md={6}>
          <LazyChartOne url="/api/getAncbEthStats" xKey="DATES" yKey="TVL_AMT" title="bETH TVL (bETH)" showLabels={false}/>
        </Grid>
    </Grid>
    </>
    );
}

function KnowherePage()
{
  const [getVolume,setVolume] = useState("")

  React.useEffect(() => {

    axios.get("/api/getKnowhereTrades").then (response => {
      setVolume(response);
    }).catch (error => {
      console.log(error);
    })

  },[]);

  if (getVolume === "") return (<div><CircularProgress /></div>);

  var dataDate = []
  var dataVolume = []
  var dataCount = []
  var dataFinal = []
  var limit=30;
  getVolume.data.forEach(element => {
    if (limit > 0)
    {
      dataDate.push(element.DATES);
      dataVolume.push(element.VOLUME_IN_USD);
      dataCount.push(element.NUMB_OF_TXS);
      limit -= 1;
    }
  });
  dataFinal.push(dataVolume);
  dataFinal.push(dataCount);
  var lunaBurnOptions = generateLRChartOptions("Knowhere Volume");
  var lunaBurn = generateBarChartLRData(dataDate, dataFinal, ["USD Volume", "Num of NFT Sold"]);

  return (
    <Grid container spacing={2}>
        <Grid item md={12}>
          <Bar md={12} options={lunaBurnOptions} data={lunaBurn} height={null}/>
        </Grid>
    </Grid>
    );
}

function RandomEarthPage()
{
  const [getVolume,setVolume] = useState("")

  React.useEffect(() => {

    axios.get("/api/getRandomEarthTrades").then (response => {
      setVolume(response);
    }).catch (error => {
      console.log(error);
    })

  },[]);

  if (getVolume === "") return (<div><CircularProgress /></div>);

  var dataDate = []
  var dataVolume = []
  var dataCount = []
  var dataFinal = []
  var limit=30;
  getVolume.data.forEach(element => {
    if (limit > 0)
    {
      dataDate.push(element.DATES);
      dataVolume.push(element.VOLUME_IN_USD);
      dataCount.push(element.NUMBER_OF_TRANSACTIONS);
      limit -= 1;
    }
  });
  dataFinal.push(dataVolume);
  dataFinal.push(dataCount);
  var lunaBurnOptions = generateLRChartOptions("RandomEarth Volume");
  var lunaBurn = generateBarChartLRData(dataDate, dataFinal, ["USD Volume", "Num of NFT Sold"]);

  return (
    <Grid container spacing={2}>
        <Grid item md={12}>
          <Bar md={12} options={lunaBurnOptions} data={lunaBurn} height={null}/>
        </Grid>
    </Grid>
    );
}

//---------------------- Main Pages
function PermanentDrawerLeft() {
  const [page, setPage] = useState(0);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        //sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Luna Intelligence Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
            <ListItem button key={'About'} onClick={() => setPage(0)}>
              <ListItemIcon>
              <IconButton color="secondary" aria-label="add an alarm">
                <Image alt="" src='/me.png' height={24} width={24} />
              </IconButton>
              </ListItemIcon>
              <ListItemText primary={'About'} />
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button key={'Blockchain Stats'} onClick={() => setPage(1)}>
              <ListItemIcon>
                <Image alt="" src='/luna.png' height={24} width={24} />
              </ListItemIcon>
              <ListItemText primary={'Blockchain Stats'} />
            </ListItem>
            <ListItem button key={'Stablecoins'} onClick={() => setPage(2)}>
              <ListItemIcon>
              <Image alt="" src='/luna.png' height={24} width={24} />
              </ListItemIcon>
              <ListItemText primary={'Stablecoins'} />
            </ListItem>
            <ListItem button key={'CW20 Tokens'} onClick={() => setPage(3)}>
              <ListItemIcon>
              <Image alt="" src='/luna.png' height={24} width={24} />
              </ListItemIcon>
              <ListItemText primary={'CW20 Tokens'} />
            </ListItem>
            <ListItem button key={'Market Flow'} onClick={() => setPage(4)}>
              <ListItemIcon>
              <Image alt="" src='/luna.png' height={24} width={24} />
              </ListItemIcon>
              <ListItemText primary={'Market Flow'} />
            </ListItem>
            <ListItem button key={'Bridges'} onClick={() => setPage(5)}>
              <ListItemIcon>
              <Image alt="" src='/luna.png' height={24} width={24} />
              </ListItemIcon>
              <ListItemText primary={'Bridges'} />
            </ListItem>
            <ListItem button key={'Luna Liq Queue'} onClick={() => setPage(8)}>
              <ListItemIcon>
              <Image alt="" src='/luna.png' height={24} width={24} />
              </ListItemIcon>
              <ListItemText primary={'Luna Liq Queue'} />
            </ListItem>
            {/* <ListItem button key={'NFTs'} onClick={() => setPage(7)}>
              <ListItemIcon>
              <Image alt="" src='/x.png' height={24} width={24} />
              </ListItemIcon>
              <ListItemText primary={'NFTs'} />
            </ListItem> */}
            <Divider></Divider>
            {
              [
                ['Anchor','/anchor.png']
                ,['Mirror',"/mirror.png"]
                ,['Knowhere','/kw.jpeg'] 
                ,['RandomEarth','/RE.png']
                ,['Angel (Halo)','/HALO60.png']
                ,['Spectrum','/SPEC60.png']
                ,['Galactic Punks', '/gp.jpeg']
                ,['Levana Dragons', '/ld.png']
                ,['Chai', '/chai.jpeg']
                ,['DegenBox', '/degen.png']
                ,['Mars', '/mars.jpeg']
                ,['RiskHarbor', '/RH.jpg']
                ,['LFG', '/LFG.jpg']
                
                // governance https://app.flipsidecrypto.com/dashboard/terra-146-whale-voters-k56HKq
                // loop https://app.flipsidecrypto.com/dashboard/whale-dependency-index-IqUTca
                // astroport price https://app.flipsidecrypto.com/dashboard/lockdrops-keep-fallin-on-my-head-txvCxH
                // bridge in https://app.flipsidecrypto.com/dashboard/bridge-then-anchor-WZMBAJ
                // stader https://app.flipsidecrypto.com/velocity/collections/d207f92a-0455-454e-a6b0-8444ba179246
                // tfloki https://app.flipsidecrypto.com/velocity/queries/5967c8f2-eb21-4de2-b760-aaec5e5992d8
                // pylon https://app.flipsidecrypto.com/velocity/collections/4aaac826-5678-4338-b19a-98c967118e70
                // ldo https://app.flipsidecrypto.com/velocity/collections/b62badb5-1698-4205-a613-6a32b5c92b58
                // galatic grds https://app.flipsidecrypto.com/velocity/queries/f3aa6a75-6ce5-4b8b-ac01-ec8272bd7164
              ].sort().map( n => {
                return (
                  <ListItem button key={n[0]} onClick={() => setPage(n[0])}>
                    <ListItemIcon>
                    <Image alt="" src={n[1]} height={24} width={24} />
                    </ListItemIcon>
                    <ListItemText primary={n[0]} />
                  </ListItem>
                );
            })
            }
            <Divider></Divider>
            {
              [
              'Astroport'
              ,'Loop'
              ,'TerraSwap'
              ,'Luart'
              ,'Talis'
              ,'OnePlanet'
              ,'Mars'
              ,'Pylon'
              ,'Prism'
              ,'StarTerra'
              ,'Kuji'
              ,'VKR'
              ,'Apollo'
              ,'Orion'
              ,'Glow'
              ,'Alte'
              ,'Kujira'
              ,'Loterra'
              ,'Terra World Token'
              ,'Playnity'
              ,'White Whale'
              ,'Terraland'
              ,'Terra Floki'
              ,'Messier.art'
              ].sort().map( n => {
                return (
                  <ListItem button key={n} onClick={() => setPage(n)}>
                    <ListItemIcon>
                    <Image alt="" src='/x.png' height={24} width={24} />
                    </ListItemIcon>
                    <ListItemText primary={n} />
                  </ListItem>
                );
            })
            }
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Pages pageNumber={page}></Pages>
      </Box>
    </Box>
  );
}

export default function Home() {

  return (
    <div className={styles.container}>
      <PermanentDrawerLeft />
    </div>
  )
}
