import React, { useEffect, useState } from "react";
import Tabs from "../components/Dashboard/Tabs";
import Header from "../components/Common/Header";
import axios from "axios";
import Search from "../components/Dashboard/Search";

function DashboardPage() {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

   const searchChanged = (value) =>
    {
        console.log(value);
        setSearch(value);
    }

    const filterSearch = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase().trim()) || coin.symbol.toLowerCase().includes(search.toLowerCase().trim()))

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en");

            setCoins(response.data);
        }
        catch (err) {
            alert(err.message);
        }
    }

    return (
        <div>
            <Header />
            <Search search={search} searchChanged={searchChanged}/>
            <div className="tabs">
                <Tabs coins={filterSearch}/>
            </div>
        </div>
    )
}

export default DashboardPage;