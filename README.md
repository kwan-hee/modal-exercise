![2022-09-23_130502](https://user-images.githubusercontent.com/80756638/191890565-275080cc-013d-4431-a252-4e80460d45d0.jpg)


```C
const ErrorModal = (props) => {
    return (
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm}>
                <Card className={classes.modal}>
                    <header className={classes.header}>
                        <h2>{props.title}</h2>
                    </header>
                    <div className={classes.content}>
                        <p>{props.content}</p>
                    </div>
                    <footer className={classes.actions}>
                        <Button onClick={props.onConfirm}>Okay</Button>
                    </footer>
                </Card>
            </div>
        </div>
    );
};



```
main

```C
 return (
        <div>
            {error && <ErrorModal title={error.title} content={error.content}
                 onConfirm={errorHandler}
            /> } 
                               
```
에러가 날 경우 ErrorModal 창을 나오게 하고  나온 모달창을 닫게 하는 방법은  onConfirm 인데  이것은 ErrorModal 컴퍼넌트에서 Button 컴퍼넌트의 onClick 을 누르면 props를 타고 on
Confirm으로 오고 이 props가 main의 onConfirm을 통해 비록 버튼이 main의 ErrorModal에 없을지라도 Button 역할을 해 errorHandler 함수로 가게끔 하였다. 
