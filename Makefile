PACKAGE_MANAGER = npm

# Códigos de color ANSI
RED = \033[0;31m
GREEN = \033[0;32m
YELLOW = \033[1;33m
BLUE = \033[0;34m
CYAN = \033[0;36m
RESET = \033[0m

# Comandos básicos
help:
	@echo "\t$(GREEN)Comandos disponibles:$(RESET)"
	@echo ""
	@echo "  $(YELLOW)install$(RESET)     -> Instala dependencias"
	@echo "  $(YELLOW)start$(RESET)       -> Inicia el servidor de desarrollo"
	@echo "  $(YELLOW)android$(RESET)     -> Corre app en Android"
	@echo "  $(YELLOW)ios$(RESET)         -> Corre app en iOS"
	@echo "  $(YELLOW)web$(RESET)         -> Corre app en Web"
	@echo "  $(YELLOW)clean$(RESET)       -> Limpia proyecto y cachés"
	@echo "  $(YELLOW)prebuild$(RESET)    -> Regenera carpetas nativas"
	@echo "  $(YELLOW)logs$(RESET)        -> Muestra logs de Metro Bundler"

install:
	@echo -e "$(GREEN)Instalando dependencias...$(RESET)"
	$(PACKAGE_MANAGER) install

start:
	@echo -e "$(CYAN)Iniciando Metro Bundler...$(RESET)"
	npx expo start

android:
	@echo -e "$(BLUE)Corriendo app en Android...$(RESET)"
	npx expo run:android

ios:
	@echo -e "$(BLUE)Corriendo app en iOS...$(RESET)"
	npx expo run:ios

web:
	@echo -e "$(CYAN)Corriendo app en Web...$(RESET)"
	npx expo start --web

clean:
	@echo -e "$(RED)Limpiando proyecto...$(RESET)"
	rm -rf node_modules package-lock.json yarn.lock
	rm -rf ios android
	$(PACKAGE_MANAGER) cache clean --force
	npx expo start -c

prebuild:
	@echo -e "$(YELLOW)Regenerando carpetas nativas...$(RESET)"
	npx expo prebuild --clean

logs:
	@echo -e "$(CYAN)Mostrando logs de Metro Bundler...$(RESET)"
	npx expo start --no-dev --minify


