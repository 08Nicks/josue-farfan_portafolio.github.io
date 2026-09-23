@echo off
setlocal enabledelayedexpansion

:: Habilitar colores ANSI en Windows generando el caracter ESCAPE
for /f %%a in ('echo prompt $E^| cmd') do set "ESC=%%a"
set "cyan=%ESC%[36m"
set "green=%ESC%[32m"
set "white=%ESC%[97m"
set "yellow=%ESC%[33m"
set "red=%ESC%[31m"
set "reset=%ESC%[0m"

cls

:INICIO
echo.
echo %cyan%                _ _ _ _ _ _ _ _ _ _ _ _ _ _ %reset%
echo %cyan%               ^| ^| ^| ^| ^| ^| ^| ^| ^| ^| ^| ^| ^| ^|%reset%
echo %cyan%             .---^|%green%___________________________%cyan%^|---.%reset%
echo %cyan%             ^|---^|%green%                           %cyan%^|---^|%reset%
echo %cyan%             ^|---^|%green%   .-------------------.   %cyan%^|---^|%reset%
echo %cyan%             ^|---^|%green%   ^|%white%    C A D E N C E    %green%^|   %cyan%^|---^|%reset%
echo %cyan%             ^|---^|%green%   ^|%white%   V I R T U O S O   %green%^|   %cyan%^|---^|%reset%
echo %cyan%             ^|---^|%green%   ^|                   ^|   %cyan%^|---^|%reset%
echo %cyan%             ^|---^|%green%   ^|%yellow%   TSMC 28nm NODE   %green%^|   %cyan%^|---^|%reset%
echo %cyan%             ^|---^|%green%   '-------------------'   %cyan%^|---^|%reset%
echo %cyan%             ^|---^|%green%                           %cyan%^|---^|%reset%
echo %cyan%             '---^|%green%___________________________%cyan%^|---'%reset%
echo %cyan%               ^| ^| ^| ^| ^| ^| ^| ^| ^| ^| ^| ^| ^| ^|%reset%
echo.
echo %cyan%==================================================%reset%
echo %white%         CADENCE EDA - WORKSTATION LAUNCHER       %reset%
echo %cyan%==================================================%reset%
echo.
echo %green%Ingresa tus credenciales para conectar al servidor EDA.%reset%
echo.
set /p usuario="%yellow%Usuario: %reset%"

if "%usuario%"=="" (
    cls
    goto INICIO
)

set /p contrasena="%yellow%Contrasena: %reset%"

if "%contrasena%"=="" (
    echo.
    echo %red%[ERROR] La contrasena no puede estar vacia.%reset%
    echo %white%Presiona cualquier tecla para intentar de nuevo...%reset%
    pause > nul
    cls
    goto INICIO
)

:MENU_ENTORNO
cls
echo.
echo %cyan%==================================================%reset%
echo %white%              SELECCION DE ENTORNO                %reset%
echo %cyan%==================================================%reset%
echo %green%1)%reset% %white%Lanzar Virtuoso (TSMC 28nm)%reset%
echo %green%2)%reset% %white%Usar entorno Verilog/VHDL (RTL_simulation)%reset%
echo %green%3)%reset% %white%Sintesis (Genus - Synthesis)%reset%
echo %green%4)%reset% %white%Solo terminal (Directo en carpeta tsmc28nm)%reset%
echo %cyan%==================================================%reset%
set /p opcion="%yellow%Elige una opcion (1-4): %reset%"

if "%opcion%"=="1" goto OP_VIRTUOSO
if "%opcion%"=="2" goto OP_VHDL
if "%opcion%"=="3" goto OP_SINTESIS
if "%opcion%"=="4" goto OP_TERMINAL

echo.
echo %red%Opcion no valida. Intenta de nuevo.%reset%
timeout /t 2 > nul
goto MENU_ENTORNO

:: ========================================================
:: OPCION 1: VIRTUOSO
:: ========================================================
:OP_VIRTUOSO
call :VERIFICAR_XMING
echo %green%Preparando entorno automatizado para: %white%%usuario%%green%...%reset%
echo set PIDS = ( `pgrep -u $USER -x virtuoso` ) > "%TEMP%\cmd_remote.txt"
echo if ( $#PIDS ^> 1 ) then >> "%TEMP%\cmd_remote.txt"
echo      clear >> "%TEMP%\cmd_remote.txt"
echo      echo "==================================================" >> "%TEMP%\cmd_remote.txt"
echo      echo "[ATENCION] Tienes $#PIDS sesiones de Virtuoso activas:" >> "%TEMP%\cmd_remote.txt"
echo      ps -x ^| grep virtuoso ^| grep -v grep >> "%TEMP%\cmd_remote.txt"
echo      echo "==================================================" >> "%TEMP%\cmd_remote.txt"
echo      echo "¿Que deseas hacer?" >> "%TEMP%\cmd_remote.txt"
echo      echo "  1) Borrar TODAS las sesiones de golpe" >> "%TEMP%\cmd_remote.txt"
echo      echo "  2) Elegir cual borrar (Te preguntara SI/NO por cada una)" >> "%TEMP%\cmd_remote.txt"
echo      echo "  3) NINGUNA (Ignorar y continuar)" >> "%TEMP%\cmd_remote.txt"
echo      echo -n "Ingresa tu eleccion (1/2/3): " >> "%TEMP%\cmd_remote.txt"
echo      set opc = $^< >> "%TEMP%\cmd_remote.txt"
echo      if ( "$opc" == "1" ) then >> "%TEMP%\cmd_remote.txt"
echo          pkill -9 -u $USER -x virtuoso >> "%TEMP%\cmd_remote.txt"
echo          find /home/$USER/eda/ -name "*.cdslck" -type f -delete ^>^& /dev/null >> "%TEMP%\cmd_remote.txt"
echo          rm -f /home/$USER/CDS.log.cdslck ^>^& /dev/null >> "%TEMP%\cmd_remote.txt"
echo          echo "Todas las sesiones y candados eliminados." >> "%TEMP%\cmd_remote.txt"
echo      else if ( "$opc" == "2" ) then >> "%TEMP%\cmd_remote.txt"
echo          killall -i -9 -u $USER virtuoso >> "%TEMP%\cmd_remote.txt"
echo          find /home/$USER/eda/ -name "*.cdslck" -type f -delete ^>^& /dev/null >> "%TEMP%\cmd_remote.txt"
echo          rm -f /home/$USER/CDS.log.cdslck ^>^& /dev/null >> "%TEMP%\cmd_remote.txt"
echo          echo "Limpieza completada." >> "%TEMP%\cmd_remote.txt"
echo      endif >> "%TEMP%\cmd_remote.txt"
echo      echo "Continuando..." >> "%TEMP%\cmd_remote.txt"
echo endif >> "%TEMP%\cmd_remote.txt"
echo cd /home/$USER/eda/tsmc28nm >> "%TEMP%\cmd_remote.txt"
echo source .cds28nm >> "%TEMP%\cmd_remote.txt"
echo echo "Iniciando Virtuoso..." >> "%TEMP%\cmd_remote.txt"
echo virtuoso ^& >> "%TEMP%\cmd_remote.txt"
echo exec tcsh >> "%TEMP%\cmd_remote.txt"
goto LANZAR_PUTTY

:: ========================================================
:: OPCION 2: VERILOG/VHDL (RTL_simulation)
:: ========================================================
:OP_VHDL
call :VERIFICAR_XMING
echo %green%Preparando entorno Verilog/VHDL para: %white%%usuario%%green%...%reset%
echo clear > "%TEMP%\cmd_remote.txt"
echo cd /home/$USER/eda/tsmc28nm/digital_design/RTL_simulation >> "%TEMP%\cmd_remote.txt"
echo source /home/$USER/eda/tsmc28nm/.cds28nm >> "%TEMP%\cmd_remote.txt"
echo echo "----------- GUIA RAPIDA VERILOG / VHDL -----------" >> "%TEMP%\cmd_remote.txt"
echo echo " 1) Crear/Editar el programa (Editor de texto):" >> "%TEMP%\cmd_remote.txt"
echo echo "    Usamos el comando 'vi' para abrir el editor en la terminal." >> "%TEMP%\cmd_remote.txt"
echo echo "    Verilog: vi nombre.v   (Usa la extension .v)" >> "%TEMP%\cmd_remote.txt"
echo echo "    VHDL:    vi nombre.vhd (Usa la extension .vhd)" >> "%TEMP%\cmd_remote.txt"
echo echo "" >> "%TEMP%\cmd_remote.txt"
echo echo " 2) Compilar y revisar errores de sintaxis:" >> "%TEMP%\cmd_remote.txt"
echo echo "    Comprobar sintaxis del codigo antes de simular." >> "%TEMP%\cmd_remote.txt"
echo echo "    Verilog: xmverilog nombre.v" >> "%TEMP%\cmd_remote.txt"
echo echo "    VHDL:    xmvhdl nombre.vhd" >> "%TEMP%\cmd_remote.txt"
echo echo "" >> "%TEMP%\cmd_remote.txt"
echo echo " 3) Simular y abrir interfaz grafica (GUI):" >> "%TEMP%\cmd_remote.txt"
echo echo "    -- PARA VHDL --" >> "%TEMP%\cmd_remote.txt"
echo echo "    Comando: xrun programa.vhd comp_tb.vhd -top comp_tb -access +rwc -gui" >> "%TEMP%\cmd_remote.txt"
echo echo "    Explicacion: '-top comp_tb' indica el testbench de mayor jerarquia." >> "%TEMP%\cmd_remote.txt"
echo echo "" >> "%TEMP%\cmd_remote.txt"
echo echo "    -- PARA VERILOG --" >> "%TEMP%\cmd_remote.txt"
echo echo "    Comando: xrun NOMBREtb.v -access +rwc -gui" >> "%TEMP%\cmd_remote.txt"
echo echo "--------------------------------------------------" >> "%TEMP%\cmd_remote.txt"
echo exec tcsh >> "%TEMP%\cmd_remote.txt"
goto LANZAR_PUTTY

:: ========================================================
:: OPCION 3: SINTESIS (Synthesis - Genus)
:: ========================================================
:OP_SINTESIS
call :VERIFICAR_XMING
echo %green%Preparando entorno de Sintesis para: %white%%usuario%%green%...%reset%
echo clear > "%TEMP%\cmd_remote.txt"
echo cd /home/$USER/eda/tsmc28nm/digital_design/Synthesis >> "%TEMP%\cmd_remote.txt"
echo source /home/$USER/eda/tsmc28nm/.cds28nm >> "%TEMP%\cmd_remote.txt"
echo echo "----------- GUIA RAPIDA DE SINTESIS (GENUS) -----------" >> "%TEMP%\cmd_remote.txt"
echo echo " 1) Crear/Editar el script de sintesis:" >> "%TEMP%\cmd_remote.txt"
echo echo "    Ejemplo: vi nombre.tcl   (Usa la extension .tcl)" >> "%TEMP%\cmd_remote.txt"
echo echo "    Definir librerias de celdas estandar, leer RTL y aplicar constraints." >> "%TEMP%\cmd_remote.txt"
echo echo "" >> "%TEMP%\cmd_remote.txt"
echo echo " 2) Iniciar la herramienta de sintesis Genus:" >> "%TEMP%\cmd_remote.txt"
echo echo "    Comando: genus -legacy_ui" >> "%TEMP%\cmd_remote.txt"
echo echo "" >> "%TEMP%\cmd_remote.txt"
echo echo " 3) Ejecutar sintesis y abrir interfaz grafica (GUI):" >> "%TEMP%\cmd_remote.txt"
echo echo "    Dentro de la consola de Genus:" >> "%TEMP%\cmd_remote.txt"
echo echo "        source nombre.tcl" >> "%TEMP%\cmd_remote.txt"
echo echo "        gui_show" >> "%TEMP%\cmd_remote.txt"
echo echo "    Explicacion: 'gui_show' abre el visor esquematico y reportes de timing/area." >> "%TEMP%\cmd_remote.txt"
echo echo "--------------------------------------------------------" >> "%TEMP%\cmd_remote.txt"
echo exec tcsh >> "%TEMP%\cmd_remote.txt"
goto LANZAR_PUTTY

:: ========================================================
:: OPCION 4: TERMINAL DIRECTA EN TSMC28NM
:: ========================================================
:OP_TERMINAL
echo %green%Iniciando sesion de terminal para: %white%%usuario%%green%...%reset%
echo clear > "%TEMP%\cmd_remote.txt"
echo cd /home/$USER/eda/tsmc28nm >> "%TEMP%\cmd_remote.txt"
echo source .cds28nm >> "%TEMP%\cmd_remote.txt"
echo echo "Sesion iniciada en el directorio tsmc28nm." >> "%TEMP%\cmd_remote.txt"
echo exec tcsh >> "%TEMP%\cmd_remote.txt"
goto LANZAR_PUTTY

:: ========================================================
:: RUTINA DE CONEXION SSH VIA PUTTY
:: ========================================================
:LANZAR_PUTTY
echo %cyan%Iniciando conexion SSH con reenvio X11 hacia el servidor EDA...%reset%
:: Direccion del cluster o servidor EDA (ajustable segun configuracion de red)
if "%SERVER_HOST%"=="" set "SERVER_HOST=eda-server.local"

"C:\Program Files\PuTTY\putty.exe" -ssh %usuario%@%SERVER_HOST% -pw %contrasena% -X -t -m "%TEMP%\cmd_remote.txt"

del "%TEMP%\cmd_remote.txt" 2>nul
exit

:: ========================================================
:: FUNCION PARA VERIFICAR Y ARRANCAR XMING
:: ========================================================
:VERIFICAR_XMING
echo %cyan%Verificando estado del Servidor X11 (Xming)...%reset%
tasklist /FI "IMAGENAME eq Xming.exe" 2>NUL | find /I /N "Xming.exe">NUL
if "%ERRORLEVEL%"=="1" (
    echo %yellow%Iniciando Xming...%reset%
    if exist "C:\Program Files (x86)\Xming\Xming.exe" (
        start "" "C:\Program Files (x86)\Xming\Xming.exe" :0 -clipboard -multiwindow
        timeout /t 2 /nobreak > nul
    ) else if exist "C:\Program Files\Xming\Xming.exe" (
        start "" "C:\Program Files\Xming\Xming.exe" :0 -clipboard -multiwindow
        timeout /t 2 /nobreak > nul
    ) else (
        echo %yellow%[INFO] Inicie su servidor X11 si la interfaz grafica no se visualiza.%reset%
    )
) else (
    echo %green%Xming ya esta en ejecucion.%reset%
)
goto :EOF