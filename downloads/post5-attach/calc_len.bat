@echo off
set mystr="hello world"
set str=%mystr%

::��"���滻�ɿո�
set "str=%str:"= %"

:next
if not "%str%"==" " (
set /a num+=1
set "str=%str:~1%"
goto next
)
echo %mystr%�ַ�������Ϊ:%num%
pause