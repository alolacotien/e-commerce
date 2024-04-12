using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BuggyController : BaseApiController
{
    [HttpGet("not-found")]
    public ActionResult GetNotFound()
    {
        return NotFound();
    }
    
    [HttpGet("bad-request")]
    public ActionResult GetBadRequest()
    {
        return BadRequest(new ProblemDetails{Title = "This is a bad request", Status = 400});
    }
    
    [HttpGet("unauthorised")]
    public ActionResult GetUnauthorised()
    {
        return Unauthorized();
    }
    
    [HttpGet("validation-error")]
    public ActionResult GetValidationError()
    {
        ModelState.AddModelError("problem1", "This is the first problem");
        ModelState.AddModelError("problem2", "This is the second problem");
        return ValidationProblem();
    }
    
    [HttpGet("server-error")]
    public ActionResult ServerError()
    {
        throw new Exception("This is a server error");
    }
}