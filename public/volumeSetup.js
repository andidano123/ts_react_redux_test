var volumeSetup = function () {
    // setup volume unit interface
    var el_ids = {
        'FIRSTCCY' : 'tickervolccy_0',
        'USD' : 'tickervolccy_USD',
        'BTC' : 'tickervolccy_BTC',
        'ETH' : 'tickervolccy_ETH'        
    };    
    var volumeUnit = window.APP.util.getSettings('ticker_vol_unit').toUpperCase();
    var element = $(el_ids[volumeUnit]);        
    if (element) {
        element.prop("checked", true);
    }
    // override currencies list    
    return window.APP.util.initCurrenciesList();
}