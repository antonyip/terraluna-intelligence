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
    </CardContent>
    </Card></div>);
}

function Pages(props) {

  console.log(props.pageNumber);
  if(props.pageNumber === 0) {return (<div><AboutPage /></div>);}
  if(props.pageNumber === 1) {return (<div><BlockchainStatsPage /></div>);}
  if(props.pageNumber === 2) {return (<div><StableCoinPage /></div>);}
  if(props.pageNumber === 3) {return (<div><CW20Page /></div>);}
  
  if (props.pageNumber === 'Anchor') {return (<div><AnchorPage /></div>);}
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
function generateChartOptions(myVar) {
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
        position: 'right',
      },
      title: {
        display: true,
        text: myVar,
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

function generateBarChartSeriesData(xValues, yValues) {
    var localDataset = []
    yValues.forEach(element => {
      localDataset.push({
        type: 'bar',
        data: element,
        backgroundColor: colors[0]
      })
    });
    console.log(localDataset[localDataset.length-1]);
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

//---------------------- Sub Pages
function BlockchainStatsPage()
{
  const [getLunaPrice,setLunaPrice] = useState("")
  const [getLunaTxCount,setLunaTxCount] = useState("")
  const [getLunaMsgCount,setLunaMsgCount] = useState("")
  const [getLunaValidatorVotingPower,setLunaValidatorVotingPower] = useState("")
  const [getLunaBreakdown,setLunaBreakdown] = useState("")
  
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

  },[])

  if (getLunaPrice === "") return (<div><CircularProgress /></div>);
  if (getLunaTxCount === "") return (<div><CircularProgress /></div>);
  if (getLunaMsgCount === "") return (<div><CircularProgress /></div>);
  if (getLunaValidatorVotingPower === "") return (<div><CircularProgress /></div>);
  if (getLunaBreakdown === "") return (<div><CircularProgress /></div>);

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
  var lunaPriceOptions = generateChartOptions("Daily Luna Price");
  var lunaPrice = generateLunaPriceChartData(dataLunaPriceDate, dataLunaPrice, dataLunaPriceMin, dataLunaPriceMax);

  var dataTxsDate = []
  var dataTxs = []
  getLunaTxCount.data.forEach( d => {
    dataTxsDate.push(d.DAY_DATE.substr(0,10));
    dataTxs.push(d.NUM_TXS);
  })
  var lunaTxsOptions = generateChartOptions("Daily Number of Transactions (TerraLuna Module Interactions)");
  var lunaTxs = generateBarChartData(dataTxsDate, dataTxs);

  var dataMsgDate = []
  var dataMsg = []
  getLunaMsgCount.data.forEach( d => {
    dataMsgDate.push(d.DAY_DATE.substr(0,10));
    dataMsg.push(d.NUM_TXS);
  })
  var lunaMsgOptions = generateChartOptions("Daily Number of Msgs (Smart Contract Interactions)");
  var lunaMsg = generateBarChartData(dataMsgDate, dataMsg);

  var dataVoteDate = []
  var dataVote = []
  getLunaValidatorVotingPower.data.forEach( d => {
    var day_date = d.DAY_DATE.substr(0,10)
    dataVoteDate.push(day_date);
    dataVote.push(d.TOTAL_VOTING_POWER);
  })

  var lunaVoteOptions = generateChartOptions("Daily Total Voting Power");
  var lunaVote = generateBarChartData(dataVoteDate, dataVote);

  var dataBreakdownName = []
  var dataBreakdown = []
  getLunaBreakdown.data.forEach( d => {
    dataBreakdownName.push(d.RE_TYPED);
    dataBreakdown.push(d.AVG_SUM_LUNA);
  })

  var lunaBreakdownOptions = generateChartOptions("Current Luna Distribution");
  var lunaBreakdown = generatePieChartData(dataBreakdownName, dataBreakdown);

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

    </Grid>);
}

function ET_Circulation()
{
  const [getLunaPrice,setLunaPrice] = useState("")
  const [getUSTPrice,setUSTPrice] = useState("")
  
  // {"type":"INVALID_REQUEST_ERROR","message":"child \"denom\" fails because [\"denom\" must be one of 
  // [uluna, usdr, ukrw, uusd, ueur, luna, sdr, sdt, krw, krt, usd, ust, eur, eut]]","code":400}

  React.useEffect(() => {

    axios.get("/api/getCircFromET?denom=uluna").then (response => {
      setLunaPrice(response);
    }).catch (error => {
      console.log(error);
    })

    axios.get("/api/getCircFromET?denom=uusd").then (response => {
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
  var lunaBurnOptions = generateChartOptions("Luna in Circulation");
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
  var USTBurnOptions = generateChartOptions("UST in Circulation");
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
  var lunaBurnOptions = generateChartOptions("Luna Daily Net Burn");
  var lunaBurn = generateBarChartData(dataLunaDate, dataLunaBurn);

  var dataUSTDate = []
  var dataUSTBurn = []
  getUSTBurn.data.forEach(element => {
    dataUSTDate.push(element.DAY_DATE.substr(0,10));
    dataUSTBurn.push(element.NET_BURN);
  });
  var USTBurnOptions = generateChartOptions("UST Daily Net Mint");
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
  //var lunaBurnOptions = generateChartOptions("CW20 Market Caps");
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

function AnchorPage()
{
  const [getData,setData] = useState("")
  const [getDataStats,setDataStats] = useState("")
  const [getAncFlows,setAncFlows] = useState("")
  
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
  dataFinal.push(dataDate);
  dataFinal.push(dataBorrow);
  dataFinal.push(dataRepay);
  dataFinal.push(dataNet);
  var USTBurnOptions = generateChartOptions("UST Amount Flows");
  var USTBurn = generateBarChartSeriesData(dataDate, dataFinal);


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
  var ancInterestRateOptions = generateChartOptions("ANC Interest Rate");
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
  var ancInterestRateOptions2 = generateChartOptions("Yield Reserves");
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
  var ancInterestRateOptions3 = generateChartOptions("ANC Buyback");
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
  var ancbLunaOptions = generateChartOptions("bLuna Stats");
  var ancbLunaData = generateBarChartSeriesData(ancbLunaDate, ancbLunaFinal);

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
  var ancbEthOptions = generateChartOptions("bEth Stats");
  var ancbEthData = generateBarChartSeriesData(ancbEthDate, ancbEthFinal);
  
  return (
    <>
    <Grid container spacing={2}>
        <Grid item md={12}>
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
    </>
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
            <ListItem button key={'NFTs'} onClick={() => setPage(4)}>
              <ListItemIcon>
              <Image alt="" src='/luna.png' height={24} width={24} />
              </ListItemIcon>
              <ListItemText primary={'NFTs'} />
            </ListItem>
            <Divider></Divider>
            {
              [
                'Anchor'
                ,'Mirror'
              ].sort().map( n => {
                return (
                  <ListItem button key={n} onClick={() => setPage(n)}>
                    <ListItemIcon>
                    <Image alt="" src='/luna.png' height={24} width={24} />
                    </ListItemIcon>
                    <ListItemText primary={n} />
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
              ,'RandomEarth'
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
              ,'Spectrum'
              ,'Glow'
              ,'Angel (HALO)'
              ,'Alte'
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
