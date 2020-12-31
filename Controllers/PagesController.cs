using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using pionetPages.Models;

namespace pionetPages.Controllers
{
    public class PagesController : Controller
    {
        // GET: Pages
        [HttpGet]
        public JsonResult Index()
        {
            try
            {
                PagesDbContent context = new PagesDbContent();
                List<MappedPage> pages = (from p in context.Set<page>()
                                          select new MappedPage
                                          {
                                              title = p.title,
                                              id = p.id,
                                              nickName = p.nickName,
                                              htmlContent = p.htmlContent,
                                              category_id = p.category_id,
                                              create_at_string = p.create_at.ToString(),
                                          }).ToList();

                return Json(pages, JsonRequestBehavior.AllowGet);

            }
            catch (Exception e)
            {
                throw e;
            }
        }

        // GET: Pages/5
        [HttpGet]
        public JsonResult getPage(int id)
        {
            try
            {
                PagesDbContent context = new PagesDbContent();
                IQueryable<page> localEntity = context.pages.AsQueryable();
                page p = localEntity.Where(pg => pg.id == id).FirstOrDefault();
                return Json(p, JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {

                throw e;
            }

        }

        // GET: Pages/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Pages/
        [HttpPost]
        public void postPage(page p)
        {
            try
            {
                using (PagesDbContent context = new PagesDbContent())
                {
                    context.Entry<page>(p).State = p.id == 0 ? EntityState.Added : EntityState.Modified;
                    context.SaveChanges();
                }

            }
            catch (Exception e)
            {
                throw e;
            }
        }





        // POST: Pages/Delete/5
        [HttpPost]
        public void Delete(int id)
        {
            try
            {
                PagesDbContent context = new PagesDbContent();
                page p = context.pages.Single(page => page.id == id);
                context.Entry(p).State = EntityState.Deleted;
                context.SaveChanges();
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}
