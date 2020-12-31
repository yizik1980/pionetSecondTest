using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace pionetPages.Models
{
    public class PagesDbContent: DbContext
    {
        public PagesDbContent() : base("masterEntities")
        {
           
        }
        public DbSet<page> pages { get; set; }
        public DbSet<categories> categoriesDb { get; set; }

        
    }
}