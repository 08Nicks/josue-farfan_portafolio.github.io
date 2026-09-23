@echo off
setlocal enabledelayedexpansion

:: Truco Hacker: Habilitar colores ANSI en Windows generando el caracter ESCAPE
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
echo %white%             INICIO DE SESION AUTOMATICO%reset%
echo %cyan%==================================================%reset%
echo.
echo %green%Ingresa tus credenciales de acceso.%reset%
echo %white%Ejemplo de usuario: usuario_eda%reset%
echo.
set /p usuario="%yellow%Usuario: %reset%"

:: Si el usuario no escribe nada y da Enter por error, lo regresa al inicio
if "%usuario%"=="" (
    cls
    goto INICIO
)

:: Pide la contrasena
set /p contrasena="%yellow%Contrasena: %reset%"

:: Valida que no dejen la contrasena en blanco
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
echo %red%Opción no valida. Intenta de nuevo.%reset%
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
echo          find /home/$USER/wdcad/ -name "*.cdslck" -type f -delete ^>^& /dev/null >> "%TEMP%\cmd_remote.txt"
echo          rm -f /home/$USER/CDS.log.cdslck ^>^& /dev/null >> "%TEMP%\cmd_remote.txt"
echo          echo "Todas las sesiones y candados eliminados." >> "%TEMP%\cmd_remote.txt"
echo      else if ( "$opc" == "2" ) then >> "%TEMP%\cmd_remote.txt"
echo          killall -i -9 -u $USER virtuoso >> "%TEMP%\cmd_remote.txt"
echo          find /home/$USER/wdcad/ -name "*.cdslck" -type f -delete ^>^& /dev/null >> "%TEMP%\cmd_remote.txt"
echo          rm -f /home/$USER/CDS.log.cdslck ^>^& /dev/null >> "%TEMP%\cmd_remote.txt"
echo          echo "Limpieza completada." >> "%TEMP%\cmd_remote.txt"
echo      endif >> "%TEMP%\cmd_remote.txt"
echo      echo "Continuando..." >> "%TEMP%\cmd_remote.txt"
echo endif >> "%TEMP%\cmd_remote.txt"
echo cd /home/$USER/wdcad/tsmc28nm >> "%TEMP%\cmd_remote.txt"
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
:: Navegacion directa a la carpeta RTL_simulation y carga de variables
echo cd /home/$USER/wdcad/tsmc28nm/digital_design/RTL_simulation >> "%TEMP%\cmd_remote.txt"
echo source /home/$USER/wdcad/tsmc28nm/.cds28nm >> "%TEMP%\cmd_remote.txt"
echo echo "----------- GUIA RAPIDA VERILOG / VHDL -----------" >> "%TEMP%\cmd_remote.txt"
echo echo " 1) Crear/Editar el programa (Editor de texto):" >> "%TEMP%\cmd_remote.txt"
echo echo "    Usamos el comando 'vi' para abrir el editor en la terminal." >> "%TEMP%\cmd_remote.txt"
echo echo "    Verilog: vi nombre.v   (Usa la extension .v)" >> "%TEMP%\cmd_remote.txt"
echo echo "    VHDL:    vi nombre.vhd (Usa la extension .vhd)" >> "%TEMP%\cmd_remote.txt"
echo echo "" >> "%TEMP%\cmd_remote.txt"
echo echo " 2) Compilar y revisar errores de sintaxis:" >> "%TEMP%\cmd_remote.txt"
echo echo "    Sirve para comprobar que tu codigo este bien escrito antes de simular." >> "%TEMP%\cmd_remote.txt"
echo echo "    Verilog: xmverilog nombre.v" >> "%TEMP%\cmd_remote.txt"
echo echo "    VHDL:    xmvhdl nombre.vhd" >> "%TEMP%\cmd_remote.txt"
echo echo "" >> "%TEMP%\cmd_remote.txt"
echo echo " 3) Simular y abrir interfaz grafica (GUI):" >> "%TEMP%\cmd_remote.txt"
echo echo "    -- PARA VHDL --" >> "%TEMP%\cmd_remote.txt"
echo echo "    Comando: xrun programa.vhd comp_tb.vhd -top comp_tb -access +rwc -gui" >> "%TEMP%\cmd_remote.txt"
echo echo "    Explicacion de '-top': En VHDL, el simulador a veces no sabe de donde" >> "%TEMP%\cmd_remote.txt"
echo echo "    empezar. La bandera '-top comp_tb' le dice exactamente cual es el" >> "%TEMP%\cmd_remote.txt"
echo echo "    modulo principal (el jefe de mayor jerarquia), que casi siempre es" >> "%TEMP%\cmd_remote.txt"
echo echo "    tu Testbench, porque este contiene y pone a prueba a tu programa." >> "%TEMP%\cmd_remote.txt"
echo echo "" >> "%TEMP%\cmd_remote.txt"
echo echo "    -- PARA VERILOG --" >> "%TEMP%\cmd_remote.txt"
echo echo "    Comando: xrun NOMBREtb.v -access +rwc -gui" >> "%TEMP%\cmd_remote.txt"
echo echo "    Explicacion: Reemplaza 'NOMBREtb.v' por el nombre real de tu testbench." >> "%TEMP%\cmd_remote.txt"
echo echo "    Como en Verilog el testbench ya incluye al programa principal por" >> "%TEMP%\cmd_remote.txt"
echo echo "    dentro, usualmente solo necesitas simular el testbench directamente." >> "%TEMP%\cmd_remote.txt"
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
:: Navegacion directa a la carpeta Synthesis y carga de variables
echo cd /home/$USER/wdcad/tsmc28nm/digital_design/Synthesis >> "%TEMP%\cmd_remote.txt"
echo source /home/$USER/wdcad/tsmc28nm/.cds28nm >> "%TEMP%\cmd_remote.txt"
echo echo "----------- GUIA RAPIDA DE SINTESIS (GENUS) -----------" >> "%TEMP%\cmd_remote.txt"
echo echo " 1) Crear/Editar el script de sintesis (Editor de texto):" >> "%TEMP%\cmd_remote.txt"
echo echo "    Usamos el comando 'vi' para abrir el editor en la terminal." >> "%TEMP%\cmd_remote.txt"
echo echo "    Ejemplo: vi nombre.tcl   (Usa la extension .tcl)" >> "%TEMP%\cmd_remote.txt"
echo echo "    Aqui defines tus 'set_' de librerias, lees el RTL, restricciones" >> "%TEMP%\cmd_remote.txt"
echo echo "    de reloj (constraints) y los comandos de sintesis." >> "%TEMP%\cmd_remote.txt"
echo echo "" >> "%TEMP%\cmd_remote.txt"
echo echo " 2) Iniciar la herramienta de sintesis Genus:" >> "%TEMP%\cmd_remote.txt"
echo echo "    Comando: genus -legacy_ui" >> "%TEMP%\cmd_remote.txt"
echo echo "    Explicacion: Esto abre Genus en modo de linea de comandos (shell)." >> "%TEMP%\cmd_remote.txt"
echo echo "    La bandera '-legacy_ui' usa la sintaxis clasica de comandos, la" >> "%TEMP%\cmd_remote.txt"
echo echo "    mas usada en los flujos y scripts .tcl de este curso." >> "%TEMP%\cmd_remote.txt"
echo echo "" >> "%TEMP%\cmd_remote.txt"
echo echo " 3) Revisar que no haya errores y abrir la interfaz grafica (GUI):" >> "%TEMP%\cmd_remote.txt"
echo echo "    Dentro de la consola de Genus, primero corre tu script:" >> "%TEMP%\cmd_remote.txt"
echo echo "        source nombre.tcl" >> "%TEMP%\cmd_remote.txt"
echo echo "    Revisa la salida en pantalla; si no aparecen mensajes de 'Error'" >> "%TEMP%\cmd_remote.txt"
echo echo "    (los 'Warning' normalmente no son criticos), continua con:" >> "%TEMP%\cmd_remote.txt"
echo echo "        gui_show" >> "%TEMP%\cmd_remote.txt"
echo echo "    Explicacion: 'gui_show' abre la interfaz grafica de Genus para" >> "%TEMP%\cmd_remote.txt"
echo echo "    que puedas ver el esquematico, el reporte de tiempos (timing) y" >> "%TEMP%\cmd_remote.txt"
echo echo "    el area de tu diseño sintetizado de forma visual." >> "%TEMP%\cmd_remote.txt"
echo echo "--------------------------------------------------------" >> "%TEMP%\cmd_remote.txt"
echo exec tcsh >> "%TEMP%\cmd_remote.txt"
goto LANZAR_PUTTY

:: ========================================================
:: OPCION 4: TERMINAL PURA EN TSMC28NM
:: ========================================================
:OP_TERMINAL
echo %green%Iniciando sesion de terminal para: %white%%usuario%%green%...%reset%
echo clear > "%TEMP%\cmd_remote.txt"
echo cd /home/$USER/wdcad/tsmc28nm >> "%TEMP%\cmd_remote.txt"
echo source .cds28nm >> "%TEMP%\cmd_remote.txt"
echo echo "Bienvenido, %usuario%. Estas en el directorio tsmc28nm." >> "%TEMP%\cmd_remote.txt"
echo exec tcsh >> "%TEMP%\cmd_remote.txt"
goto LANZAR_PUTTY

:: ========================================================
:: RUTINA DE CONEXION PUTTY
:: ========================================================
:LANZAR_PUTTY
echo %cyan%Iniciando conexion SSH hacia el servidor EDA...%reset%
:: Configuracion de servidor remoto (generica y configurable)
if "%SERVER_HOST%"=="" set "SERVER_HOST=servidor.eda.local"

"C:\Program Files\PuTTY\putty.exe" -ssh %usuario%@%SERVER_HOST% -pw %contrasena% -X -t -m "%TEMP%\cmd_remote.txt"

:: Borra el archivo temporal al terminar
del "%TEMP%\cmd_remote.txt"
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
        echo %red%[ADVERTENCIA] No se encontro Xming en las rutas predeterminadas.%reset%
        echo %yellow%Asegurate de iniciarlo manualmente si la interfaz grafica no carga.%reset%
    )
) else (
    echo %green%Xming ya esta en ejecucion.%reset%
)
goto :EOF