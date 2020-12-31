using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace pionetPages.Models
{
    public class MappedPage
    {
        public MappedPage()
        {
       
        }
        public int id { get; set; }
        public string title { get; set; }
        public string content { get; set; }
        public string htmlContent { get; set; }
        public Nullable<System.DateTime> create_at { get; set; }
        public string nickName { get; set; }
        public int category_id { get; set; }
        public string create_at_string { get; set; }
       

    }
}