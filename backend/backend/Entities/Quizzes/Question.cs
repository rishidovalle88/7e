using System.Collections.Generic;

namespace _7e.Domain.Entities.Quizzes
{
    public class Question : QuizContext
    {
        public ICollection<Response> Responses { get; set; }
    }
}
