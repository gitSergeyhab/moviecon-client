import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  console.log({ location });
  return (
    <div>
      <p>404</p>
      <div>
        <h1>Страница не найдена</h1>
        <p>Неправильно набран адрес или такой страницы не существует</p>
      </div>
      <Button onClick={() => navigate(-1)}>Вернуться назад</Button>
    </div>
  );
};

export default PageNotFound;
