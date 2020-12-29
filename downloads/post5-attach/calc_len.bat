@echo off
set mystr="hello world"
set str=%mystr%

::将"号替换成空格
set "str=%str:"= %"

:next
if not "%str%"==" " (
set /a num+=1
set "str=%str:~1%"
goto next
)
echo %mystr%字符串长度为:%num%
pause