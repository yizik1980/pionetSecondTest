//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace pionetPages.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class page
    {
        public int id { get; set; }
        public string title { get; set; }
        public string content { get; set; }
        public string htmlContent { get; set; }
        public Nullable<System.DateTime> create_at { get; set; }
        public string nickName { get; set; }
        public int category_id { get; set; }
    }
}
