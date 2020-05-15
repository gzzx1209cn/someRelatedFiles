function FindProxyForURL(url, host)
{
    if (shExpMatch(url,"*.cyol.com/*"))
    {
        return "PROXY 10.0.0.95:9999";
    }
    else return "DIRECT";
}
