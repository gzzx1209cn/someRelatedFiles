function FindProxyForURL(url, host)
{
    if (shExpMatch(host,"*.cyol.com/special/daxuexi/*"))
    {
        return "PROXY 10.0.0.95:9999";
    }
    else return "DIRECT";
}
