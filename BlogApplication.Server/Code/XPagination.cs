﻿using Azure;
using Microsoft.Extensions.Primitives;
using Newtonsoft.Json;
using System.Drawing.Printing;

namespace BlogApplication.Server.Code
{

    public class XPagination
    {
        public int PageNumber { get; set; } = 1;
        public int TotalPages { get; set; }
        public int PageSize { get; set; } = 10;
        public delegate void UpdatePageValues(XPagination xPagination);
        
        public static XPagination GetXPagination(HttpRequest request)
        {
            StringValues paginationDetails = string.Empty;
            request.Headers.TryGetValue("x-pagination", out paginationDetails);
            var xpagination = new XPagination();
            if (!string.IsNullOrWhiteSpace(paginationDetails))
            {
                xpagination = JsonConvert.DeserializeObject<XPagination>(paginationDetails);
            }

            return xpagination;
        }
    }

    public static class XPaginationExt
    {
        public static void SetXPagination(this XPagination xPagination,HttpResponse response)
        {
            var xpagn = JsonHelper.Serialize(xPagination);
            response.Headers.Append("x-pagination", xpagn);
            response.Headers.Append("Access-Control-Expose-Headers", "x-pagination");
        }
    }
}
