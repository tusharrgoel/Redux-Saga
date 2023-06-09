import React from "react";
import { useSelector } from "react-redux";
function Header() {
  const result = useSelector((state) => state.cart);
  console.log("DATA FROM HEADER", result);
  return (
    <div>
      <div className="cart-div">
        <h1>{result.noofItems}</h1>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAACBCAMAAADg8jhDAAAAaVBMVEX///8AAADx8fFycnLNzc0LCwt3d3fIyMg/Pz+Dg4PExMS2trZPT0/29vb7+/vV1dWOjo5kZGRsbGzd3d0WFhY0NDTk5OS9vb1bW1shISEREREcHBwuLi7r6+tKSkomJiaenp6WlpaqqqpehEraAAAEw0lEQVR4nO2ba3eyMAzHEUTxAngB5p3p9/+QzyQpDW2H25qC5zz9vdkhq/KnTZO01CDweDwej8fj8Xg8/x/Xpcp0bEmCx3micduPraphryv74jK2rIaZUdvkHTouPZi15WML+2JfGKXFY+t6sjRKK99ipi5AzKrLdWxZDRBAyrFlmAih2zZj6zCxAm3zsXWY2ECkrcbWYQCj22FsHSYqGNIFx3dNFxErW9C2ZJB2N+cXazJ7aVdH0m720oKpI213Bm3mUsueDwZtqRtpNUt0w2mVzORMm2H9taa2ujEVUX+zKIobG4e7BcEn3GBLbeiED2pbN6aSTr+lYfgysLFEt+ADR4HacjB1sjVqS4kJH6tTaqNenlrtetTvUF30hzdow2VBJ5Jh7cZUrF30AQxvjWlH72rQdtN7PMBkmgYs4JPuiCmDO6zDfm3Q452l3b7WvcECdLiOkB0IoSOja8vO+iyaw5etmLRh3dBZoaEn0SCla6tivY+gdpvQ57QhXOuh4K7PD2h1IdrmuqOi8x6ZpLUONyMmQ1mta1vpzxRM9AluxQO+sCCmXO8SXRuGNxrKlvoz2SHSPXESrJyoK+nawLdqOvBgOjFufEz0yTXRpqCmLYPJnJBHSnmj25OD3kswBZM+bSlY1qRNdWR2t9bhypkEblJIw6JWLRHsyNTkU1vD7LCEu/ZlHNKgKlml1YzS2vqSCd6NkA2rNq5kCrA6XM27rSsWNJekBYLIURpwn1QaTs11nKif4VkqSBK48SMNkT0k7Zm4DjOIZudra4HKMpEGTCYRszZ0OJLuQS3ZDAJtxzY+hNCClKToGRwbIRQsKWpZhEOvkGXVQdGmV7j4gNz7uvuj+r2Yx1LFULQGrN4+5ZdAz944I28DOpyc/ljUyUSuasNSXpZRGMH5t3m3qsNpa09VGyZhWaot1cfjAh1u3d5aW7Or2sC7CrmkuDeGE/82L9aXMm7uVXcCbadW206ZG2Iis0sLwlLpJwxWshQDbXGrBT5AFqeqV/CBq77Wk68Q9mXlu1W0QXuZBKaqE/CBvt++6EkhwMngq2jDNCeTwEadPHyIdC+uM9AioxXOZHGt+SP8f821aqbgvplc3UOAk9sOqE0kCgy9bYK6ls7crY2+6wUCYxpHeLnBySL+jXljJ64juOaPbk946ksXQ9oOkiVOpIm1pR1u3E3sB9rhxt2+OwHwK87OTlms6kn8RyCJOKjdJOFfqWClw71UYGHv1t2suIO29zgComB4ofQuYPXHue/GBvNbBVag+Cve4QyZBtRPb3kACWu/3euWw4PR7fG6pQXh9C/kuAfg9ABSbrXvm7ipK4EssZHmNrrlhgPDv8Cpu+Xm46U/xenp3exmIy15fQMbxHLm1PnTA2lYuk4K6fzJFGJCPMvn/YiGi6+GA5UgD9Etny8a3rFd7DbqEshCtf/9MVn8DJTl6Yzozd4pCYfc7zu+gR4kLPriQkUa8hwpe0nn3VbfTl9nk2KYg8Y5vWXfOxb6EPEwZ+xDcstz31DRwR/qEPRO3rL3bHNG3ggPVVaSQe0PDaThYL+EWYpk9cqJPmL0tgEXMdX2eDodd687ozo8G0bD/n4ozPOfVbE/bujxeDwej8fj8XjekH9DGzwTY8MG3AAAAABJRU5ErkJggg=="
          alt=""
          height="200px"
          width="100px"
        />
      </div>
    </div>
  );
}

export default Header;
