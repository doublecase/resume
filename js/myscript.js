// 파일 위치가 <head>구역에 있을때는
// $(function)(){ 이 안에 코딩함 }

// 파일 위치가 <body> 맨 아래 있을때는
// $(function)(){} 이 필요없음.

// .prev() : 바로 이전 형제 1개  ※xxx부모xxx※
// .next() : 바로 다음 형제 1개
// .nextAll() : 이전 모든 형제들
// .siblings() : 나를 제외한 모든 형제 (중요)
// .eq(index) : 시작번호 0부터 지목
// .child('자식이름') : 한명의 자식
// .children() : 모든 자식
// .find('후손이름') : 후손 한명
// .parents(조상이름) : 부모보다 상위요소 지목
// .even : 짝수 index번호
// .odd : 홀수 index번호

// p326 이벤트 메서드
// $('li').on('click',function(){
//     $(this).css({
//         color:'red'
//     }).sibling().css({
//         color:'black'
//     })
// })

// 위 코드와 아래 코드 같은의미
$('li').on('click',function(){
    $(this).addClass('on')
    $(this).siblings().removeClass('on')
})
