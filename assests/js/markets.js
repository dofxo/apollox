// coin section maker

const coins = document.getElementById('coins')


function coinMaker(coinName , coinPrice , coinChange, coinHigh, coinLow,coinVolume) {
    coins.innerHTML += `
    <table class="coin">

    <tr>
        <th class="coin-label details">
            <h2>${coinName} Perpetual</h2>
            <i class='bx bxs-coin'></i>
        </th>
        <th>
        <td>
            <i class='bx bxs-coin'></i>
            <div class="coin-name">
                <span>${coinName} </span>
                <span> Perpetual </span>
            </div>

        </td>
        </th>

        <th>
        <td>
            <div class="coin-price details">
                <span>Last Price</span>
                <div>
                    <span>${coinPrice}</span>
                    <span>≈$${coinPrice} </span>
                    <span> / $${coinPrice}</span>
                </div>


            </div>
        </td>
        <td class="details">
            <span>24h Change</span>
            ${coinChange}
        </td>
        <td class="details">
            <span>24h High</span>
           ${coinHigh}
        </td>
        </th>

        <th>
        <td class="details">
            <span>24h Low</span>
           ${coinLow}
        </td>

        </th>
        <th>
        <td class="details">
            <span>24h Volume</span>
           ${coinVolume}
        </td>

        </th>


        <th class="trade-btn">
            Trade
        </th>
    </tr>



</table>
`

}

coinMaker('ETHUSDT',`21,700.00`,`+1.48%`,`1,720.90`,`1,651.00`,`13.05M`)
coinMaker('RUNUSDT',`12.56860`,`+2.50%`,`1.82092`,`11.5212`,`1.23M`)
coinMaker('GALUSDT',`12.73860`,`+0.50%`,`2.72092`,`2.6510`,`2.15M`)
coinMaker('ENSUSDT',`10.56860`,`+1.50%`,`3.82092`,`2.5512`,`2.01M`)
coinMaker('RUNUSDT',`12.56860`,`+2.50%`,`1.82092`,`11.5212`,`1.23M`)
coinMaker('LINUSDT',`5,56256`,`+1.33%`,`1.82092`,`1.5613`,`1.98M`)
coinMaker('OKBUSDT',`2,54256`,`+0.43%`,`2.22092`,`2.2113`,`0.99M`)
coinMaker('LINUSDT',`5,56256`,`+1.33%`,`1.82092`,`1.5613`,`1.98M`)
coinMaker('GALUSDT',`12.73860`,`+0.50%`,`2.72092`,`2.6510`,`2.15M`)
coinMaker('RUNUSDT',`12.56860`,`+2.50%`,`1.82092`,`11.5212`,`1.23M`)
coinMaker('LINUSDT',`5,56256`,`+1.33%`,`1.82092`,`1.5613`,`1.98M`)
coinMaker('GALUSDT',`12.73860`,`+0.50%`,`2.72092`,`2.6510`,`2.15M`)
coinMaker('ENSUSDT',`10.56860`,`+1.50%`,`3.82092`,`2.5512`,`2.01M`)
coinMaker('KAVSUSDT',`13.56860`,`+1.70%`,`1.82092`,`3.5512`,`1.01M`)
coinMaker('RUNUSDT',`12.56860`,`+2.50%`,`1.82092`,`11.5212`,`1.23M`)
coinMaker('100SHUSDT',`0.16860`,`+4.50%`,`3.82092`,`4.5212`,`0.68M`)
coinMaker('ZRXUSDT',`0.32`,`+2.222%`,`0.3078`,`0.3285`,`0.9M`)
coinMaker('ETCUSDT',`37.260`,`+3.185%`,`38.030`,`35.130`,`0.74M`)
coinMaker('ATOMUSDT',`13.02`,`+0.45%`,`12.550`,`12.550`,`0.727M`)
coinMaker('CAKEUSDT',`4.032`,`+1.77%`,`4.05800`,`3.91000`,`0.714M`)
coinMaker('GMTUSDT',`0.78`,`+1.251%`,`0.80820`,`0.77640`,`0.66M`)
