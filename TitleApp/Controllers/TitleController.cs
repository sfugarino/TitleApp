using System.Linq;
using System.Web.Http;
using System.Threading.Tasks;
using TitleApp.Models.Repository;

namespace TitleApp.Controllers
{
    [RoutePrefix("title")]
    public class TitleController : ApiController
    {
        TitleRepository _repository = new TitleRepository();

        // GET: api/Title
        public async Task<IHttpActionResult> Get()
        {
            var result = await _repository.GetAllAsync();
            var titles = result.Select(r => new Models.ViewModels.Title(r));
            return Ok(titles.ToArray());
        }

        // GET: api/Title/5
        public async Task<IHttpActionResult> Get(int id)
        {
            var result = await _repository.GetByIdAsync(id);
            Models.ViewModels.Title title = new Models.ViewModels.Title(result);
            if (result == null)
                return NotFound();

            return Ok(result);
        }
    }
}
