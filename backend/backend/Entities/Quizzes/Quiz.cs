using System.Collections.Generic;

namespace _7e.Domain.Entities.Quizzes
{
    public class Quiz : QuizContext
    {
        public ICollection<Question> Questions { get; set; }
    }
}
