/// <reference path="./internal_*.d.ts" />
declare namespace net.fabricmc.fabric.api.renderer.v1.mesh {
    interface MutableQuadView extends Internal.QuadView {
        abstract material(arg0: Internal.RenderMaterial_): this;
        abstract normalX(arg0: number): number;
        /**
         * @deprecated
        */
        spriteBake(spriteIndex: number, sprite: Internal.TextureAtlasSprite_, bakeFlags: number): this;
        abstract x(arg0: number): number;
        abstract cullFace(): Internal.Direction;
        abstract v(arg0: number): number;
        abstract color(arg0: number): number;
        abstract copyNormal(arg0: number, arg1: Vec3f_): Vec3f;
        abstract copyFrom(arg0: Internal.QuadView_): this;
        abstract z(arg0: number): number;
        abstract normal(arg0: number, arg1: number, arg2: number, arg3: number): this;
        /**
         * @deprecated
        */
        spriteV(vertexIndex: number, spriteIndex: number): number;
        abstract nominalFace(arg0: Internal.Direction_): this;
        abstract nominalFace(): Internal.Direction;
        abstract hasNormal(arg0: number): boolean;
        abstract lightFace(): Internal.Direction;
        abstract cullFace(arg0: Internal.Direction_): this;
        /**
         * @deprecated
        */
        sprite(vertexIndex: number, spriteIndex: number, uv: Internal.Vec2_): this;
        abstract colorIndex(): number;
        abstract lightmap(arg0: number): number;
        abstract tag(arg0: number): this;
        /**
         * @deprecated
        */
        spriteColor(vertexIndex: number, spriteIndex: number): number;
        abstract tag(): number;
        /**
         * @deprecated
        */
        fromVanilla(quadData: number[], startIndex: number, isItem: boolean): this;
        /**
         * @deprecated
        */
        toBakedQuad(spriteIndex: number, sprite: Internal.TextureAtlasSprite_, isItem: boolean): Internal.BakedQuad;
        abstract uv(arg0: number, arg1: number, arg2: number): this;
        abstract color(arg0: number, arg1: number): this;
        abstract colorIndex(arg0: number): this;
        abstract spriteBake(arg0: Internal.TextureAtlasSprite_, arg1: number): this;
        abstract normalZ(arg0: number): number;
        abstract copyUv(arg0: number, arg1: Internal.Vector2f_): Internal.Vector2f;
        /**
         * @deprecated
        */
        spriteColor(vertexIndex: number, spriteIndex: number, color: number): this;
        abstract u(arg0: number): number;
        toBakedQuad(sprite: Internal.TextureAtlasSprite_): Internal.BakedQuad;
        pos(vertexIndex: number, pos: Vec3f_): this;
        lightmap(b0: number, b1: number, b2: number, b3: number): this;
        abstract y(arg0: number): number;
        abstract copyPos(arg0: number, arg1: Vec3f_): Vec3f;
        /**
         * @deprecated
        */
        spriteU(vertexIndex: number, spriteIndex: number): number;
        abstract fromVanilla(arg0: Internal.BakedQuad_, arg1: Internal.RenderMaterial_, arg2: Internal.Direction_): this;
        /**
         * @deprecated
        */
        toVanilla(spriteIndex: number, target: number[], targetIndex: number, isItem: boolean): void;
        abstract lightmap(arg0: number, arg1: number): this;
        abstract "fromVanilla(net.minecraft.client.renderer.block.model.BakedQuad,net.fabricmc.fabric.api.renderer.v1.material.RenderMaterial,net.minecraft.core.Direction)"(arg0: Internal.BakedQuad_, arg1: Internal.RenderMaterial_, arg2: Internal.Direction_): this;
        abstract material(): Internal.RenderMaterial;
        abstract faceNormal(): Vec3f;
        abstract toVanilla(arg0: number[], arg1: number): void;
        uv(vertexIndex: number, uv: Internal.Vector2f_): this;
        abstract posByIndex(arg0: number, arg1: number): number;
        abstract pos(arg0: number, arg1: number, arg2: number, arg3: number): this;
        abstract fromVanilla(arg0: number[], arg1: number): this;
        color(c0: number, c1: number, c2: number, c3: number): this;
        /**
         * @deprecated
        */
        "fromVanilla(int[],int,boolean)"(quadData: number[], startIndex: number, isItem: boolean): this;
        /**
         * @deprecated
        */
        spriteColor(spriteIndex: number, c0: number, c1: number, c2: number, c3: number): this;
        /**
         * @deprecated
        */
        sprite(vertexIndex: number, spriteIndex: number, u: number, v: number): this;
        /**
         * @deprecated
        */
        copyTo(target: net.fabricmc.fabric.api.renderer.v1.mesh.MutableQuadView_): void;
        normal(vertexIndex: number, normal: Vec3f_): this;
        abstract normalY(arg0: number): number;
        readonly BAKE_ROTATE_270: (3) & (number);
        readonly BAKE_FLIP_V: (16) & (number);
        readonly BAKE_FLIP_U: (8) & (number);
        readonly BAKE_ROTATE_180: (2) & (number);
        readonly BAKE_ROTATE_90: (1) & (number);
        readonly BAKE_ROTATE_NONE: (0) & (number);
        readonly BAKE_LOCK_UV: (4) & (number);
        readonly BAKE_NORMALIZED: (32) & (number);
    }
    type MutableQuadView_ = MutableQuadView;
}
declare namespace Internal {
    class DeployerBlock extends Internal.DirectionalAxisKineticBlock implements Internal.IBE<Internal.DeployerBlockEntity> {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        handler$cag000$betterend$be_getDroppedStacks(state: Internal.BlockState_, builder: Internal.LootParams$Builder_, info: Internal.CallbackInfoReturnable_<any>): void;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getRotationAxis(arg0: Internal.BlockState_): Internal.Direction$Axis;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.DeployerBlockEntity>;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        getPreferredFacing(arg0: Internal.BlockPlaceContext_): Internal.Direction;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        getParticleInitialRadius(): number;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getBlockEntityType(): Internal.BlockEntityType<Internal.DeployerBlockEntity>;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        transform(arg0: Internal.BlockState_, arg1: Internal.StructureTransform_): Internal.BlockState;
        handler$cjp000$bclib$appendSurvivalBlock(itemStack: Internal.ItemStack_, blockGetter: Internal.BlockGetter_, list: Internal.List_<any>, tooltipFlag: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.DeployerBlockEntity;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        hideStressImpact(): boolean;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        getBlockEntityClass(): typeof Internal.DeployerBlockEntity;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.DeployerBlockEntity, InteractionResult>): InteractionResult;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): InteractionResult;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.DeployerBlockEntity>): void;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): InteractionResult;
        getParticleTargetRadius(): number;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        getMinimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        lychee$setTickable(arg0: boolean): void;
        showCapacityWithAnnotation(): boolean;
        static stateById(arg0: number): Internal.BlockState;
        hasShaftTowards(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_): boolean;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get particleInitialRadius(): number
        get blockEntityType(): Internal.BlockEntityType<Internal.DeployerBlockEntity>
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        get blockEntityClass(): typeof Internal.DeployerBlockEntity
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        get particleTargetRadius(): number
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get minimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type DeployerBlock_ = DeployerBlock;
    interface Reference2ReferenceMap$Entry <K, V> extends Internal.Map$Entry<K, V> {
        abstract getKey(): K;
        comparingByValue<K, V extends Internal.Comparable<any>>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract hashCode(): number;
        copyOf<K, V>(arg0: Internal.Map$Entry_<K, V>): Internal.Map$Entry<K, V>;
        comparingByKey<K, V>(arg0: Internal.Comparator_<K>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract getValue(): V;
        comparingByKey<K extends Internal.Comparable<any>, V>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        comparingByValue<K, V>(arg0: Internal.Comparator_<V>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract equals(arg0: any): boolean;
        abstract setValue(arg0: V): V;
        get key(): K
        get value(): V
        set value(arg0: V)
    }
    type Reference2ReferenceMap$Entry_<K, V> = Reference2ReferenceMap$Entry<K, V>;
    interface IItemHandlerInteractionUpgrade {
        abstract onHandlerInteract(arg0: Internal.IItemHandler_, arg1: Internal.Player_): void;
        (arg0: Internal.IItemHandler, arg1: Internal.Player): void;
    }
    type IItemHandlerInteractionUpgrade_ = ((arg0: Internal.IItemHandler, arg1: Internal.Player)=> void) | IItemHandlerInteractionUpgrade;
    class SourceJar extends com.hollingsworth.arsnouveau.common.block.SourceBlock implements Internal.SimpleWaterloggedBlock {
        constructor()
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: string)
        handler$cag000$betterend$be_getDroppedStacks(state: Internal.BlockState_, builder: Internal.LootParams$Builder_, info: Internal.CallbackInfoReturnable_<any>): void;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        handler$cjp000$bclib$appendSurvivalBlock(itemStack: Internal.ItemStack_, blockGetter: Internal.BlockGetter_, list: Internal.List_<any>, tooltipFlag: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        static defaultProperties(): Internal.BlockBehaviour$Properties;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        lychee$setTickable(arg0: boolean): void;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly fill: (Internal.IntegerProperty) & (Internal.Property<number>);
    }
    type SourceJar_ = SourceJar;
    class ResourceCache implements Internal.AutoCloseable {
        purgeFreeResourcesUpToBytes(bytesToPurge: number, preferScratch: boolean): void;
        getClass(): typeof any;
        setSurfaceProvider(surfaceProvider: Internal.SurfaceProvider_): void;
        setCacheLimit(maxBytes: number): void;
        findAndRefUniqueResource(key: Internal.IUniqueKey_): Internal.GpuResource;
        getBudgetedResourceBytes(): number;
        purgeFreeResources(scratchOnly: boolean): void;
        getMaxResourceBytes(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasUniqueKey(key: Internal.IUniqueKey_): boolean;
        getContextID(): number;
        isFlushNeeded(): boolean;
        cleanup(): boolean;
        releaseAll(): void;
        getResourceCount(): number;
        toString(): string;
        findAndRefScratchResource(key: Internal.IScratchKey_): Internal.GpuResource;
        setThreadSafeCache(threadSafeCache: Internal.ThreadSafeCache_): void;
        purgeFreeResourcesToReserveBytes(bytesToReserve: number): boolean;
        notifyAll(): void;
        isOverBudget(): boolean;
        purgeFreeResourcesOlderThan(timeMillis: number, scratchOnly: boolean): void;
        hashCode(): number;
        discardAll(): void;
        wait(): void;
        close(): void;
        wait(arg0: number): void;
        getFreeResourceBytes(): number;
        getBudgetedResourceCount(): number;
        equals(arg0: any): boolean;
        getResourceBytes(): number;
        get class(): typeof any
        set surfaceProvider(surfaceProvider: Internal.SurfaceProvider_)
        set cacheLimit(maxBytes: number)
        get budgetedResourceBytes(): number
        get maxResourceBytes(): number
        get contextID(): number
        get flushNeeded(): boolean
        get resourceCount(): number
        set threadSafeCache(threadSafeCache: Internal.ThreadSafeCache_)
        get overBudget(): boolean
        get freeResourceBytes(): number
        get budgetedResourceCount(): number
        get resourceBytes(): number
    }
    type ResourceCache_ = ResourceCache;
    abstract class AttributeValue {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type AttributeValue_ = AttributeValue;
    interface ItemVariant extends Internal.TransferVariant<Internal.Item> {
        of(stack: Internal.ItemStack_): this;
        abstract getNbt(): Internal.CompoundTag;
        toStack(count: number): Internal.ItemStack;
        fromPacket(buf: Internal.FriendlyByteBuf_): this;
        hasNbt(): boolean;
        abstract toNbt(): Internal.CompoundTag;
        abstract toPacket(arg0: Internal.FriendlyByteBuf_): void;
        toStack(): Internal.ItemStack;
        copyOrCreateNbt(): Internal.CompoundTag;
        of(item: Internal.ItemLike_, tag: Internal.CompoundTag_): this;
        abstract isBlank(): boolean;
        nbtMatches(other: Internal.CompoundTag_): boolean;
        "of(net.minecraft.world.item.ItemStack)"(stack: Internal.ItemStack_): this;
        copyNbt(): Internal.CompoundTag;
        blank(): this;
        abstract getObject(): Internal.Item;
        "of(net.minecraft.world.level.ItemLike)"(item: Internal.ItemLike_): this;
        of(item: Internal.ItemLike_): this;
        getItem(): Internal.Item;
        isOf(object: Internal.Item_): boolean;
        matches(stack: Internal.ItemStack_): boolean;
        fromNbt(nbt: Internal.CompoundTag_): this;
        get nbt(): Internal.CompoundTag
        get blank(): boolean
        get object(): Internal.Item
        get item(): Internal.Item
    }
    type ItemVariant_ = ItemVariant;
    class BlockIcicle extends Internal.Block implements Internal.Fallable, Internal.SimpleWaterloggedBlock {
        constructor()
        handler$cag000$betterend$be_getDroppedStacks(state: Internal.BlockState_, builder: Internal.LootParams$Builder_, info: Internal.CallbackInfoReturnable_<any>): void;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        handler$cjp000$bclib$appendSurvivalBlock(itemStack: Internal.ItemStack_, blockGetter: Internal.BlockGetter_, list: Internal.List_<any>, tooltipFlag: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        onLand(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.FallingBlockEntity_): void;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getHurtsEntitySelector(): Internal.Predicate<Internal.Entity>;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        onBrokenAfterFall(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FallingBlockEntity_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        getFallDamageSource(arg0: Internal.Entity_): Internal.DamageSource;
        static growStalactiteOrStalagmiteIfPossible(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        lychee$setTickable(arg0: boolean): void;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get hurtsEntitySelector(): Internal.Predicate<Internal.Entity>
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly THICKNESS: Internal.EnumProperty<Internal.DripstoneThickness>;
        static readonly TIP_DIRECTION: (Internal.DirectionProperty) & (Internal.DirectionProperty);
        static readonly WATERLOGGED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type BlockIcicle_ = BlockIcicle;
    interface WeatheringCopper extends Internal.ChangeOverTimeBlock<Internal.WeatheringCopper$WeatherState>, Internal.WeatheringCopperMixin {
        "getFirst(net.minecraft.world.level.block.Block)"(arg0: Internal.Block_): Internal.Block;
        getPrevious(arg0: Internal.Block_): Internal.Optional<Internal.Block>;
        "getNext(net.minecraft.world.level.block.state.BlockState)"(arg0: Internal.BlockState_): Internal.Optional<Internal.BlockState>;
        getFirst(arg0: Internal.Block_): Internal.Block;
        getNext(arg0: Internal.Block_): Internal.Optional<Internal.Block>;
        "getFirst(net.minecraft.world.level.block.state.BlockState)"(arg0: Internal.BlockState_): Internal.BlockState;
        getFirst(arg0: Internal.BlockState_): Internal.BlockState;
        "getNext(net.minecraft.world.level.block.Block)"(arg0: Internal.Block_): Internal.Optional<Internal.Block>;
        applyChangeOverTime(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getNext(arg0: Internal.BlockState_): Internal.Optional<Internal.BlockState>;
        abstract getAge(): Internal.WeatheringCopper$WeatherState;
        "getPrevious(net.minecraft.world.level.block.state.BlockState)"(arg0: Internal.BlockState_): Internal.Optional<Internal.BlockState>;
        getPrevious(arg0: Internal.BlockState_): Internal.Optional<Internal.BlockState>;
        onRandomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        "getPrevious(net.minecraft.world.level.block.Block)"(arg0: Internal.Block_): Internal.Optional<Internal.Block>;
        getChanceModifier(): number;
        get age(): Internal.WeatheringCopper$WeatherState
        get chanceModifier(): number
        (): Internal.WeatheringCopper$WeatherState_;
        readonly PREVIOUS_BY_BLOCK: Internal.Supplier<Internal.BiMap<Internal.Block, Internal.Block>>;
        readonly NEXT_BY_BLOCK: Internal.Supplier<Internal.BiMap<Internal.Block, Internal.Block>>;
    }
    type WeatheringCopper_ = WeatheringCopper | (()=> Internal.WeatheringCopper$WeatherState_);
    class CapabilityAir$ItemStackBuilder extends Internal.CapabilityBuilderForge<Internal.ItemStack, Internal.IAirHandlerItem> {
        constructor(capacity: number, maxPressure: number)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        getCapability(instance: Internal.ItemStack_): Internal.IAirHandlerItem;
        availableOn(isAvailable: Internal.BiPredicate_<Internal.ItemStack, Internal.Direction>): Internal.CapabilityBuilder<Internal.ItemStack, Internal.IAirHandlerItem, Internal.Capability<T>>;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        side(direction: Internal.Direction_): Internal.CapabilityBuilder<Internal.ItemStack, Internal.IAirHandlerItem, Internal.Capability<T>>;
        get class(): typeof any
    }
    type CapabilityAir$ItemStackBuilder_ = CapabilityAir$ItemStackBuilder;
    class TankRenderInfo {
        constructor(arg0: Internal.FluidStack_, arg1: number, arg2: Internal.AABB_, ...arg3: Internal.Direction_[])
        constructor(arg0: Internal.IFluidTank_, arg1: Internal.AABB_, ...arg2: Internal.Direction_[])
        getClass(): typeof any;
        getTank(): Internal.IFluidTank;
        without(arg0: Internal.Direction_): this;
        toString(): string;
        getBounds(): Internal.AABB;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getFaces(): Internal.BitSet;
        hashCode(): number;
        wait(): void;
        shouldRender(arg0: Internal.Direction_): boolean;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get tank(): Internal.IFluidTank
        get bounds(): Internal.AABB
        get faces(): Internal.BitSet
    }
    type TankRenderInfo_ = TankRenderInfo;
    class ClientboundSetPlayerTeamPacket$Parameters {
        constructor(arg0: Internal.PlayerTeam_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        getCollisionRule(): string;
        getNametagVisibility(): string;
        getDisplayName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        notifyAll(): void;
        getPlayerSuffix(): net.minecraft.network.chat.Component;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getPlayerPrefix(): net.minecraft.network.chat.Component;
        wait(): void;
        wait(arg0: number): void;
        getColor(): Internal.ChatFormatting;
        getOptions(): number;
        equals(arg0: any): boolean;
        get collisionRule(): string
        get nametagVisibility(): string
        get displayName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get playerSuffix(): net.minecraft.network.chat.Component
        get playerPrefix(): net.minecraft.network.chat.Component
        get color(): Internal.ChatFormatting
        get options(): number
    }
    type ClientboundSetPlayerTeamPacket$Parameters_ = ClientboundSetPlayerTeamPacket$Parameters;
    class LaserEnergyContainer extends Internal.BasicEnergyContainer {
        getClass(): typeof any;
        static "create(mekanism.api.math.FloatingLong,java.util.function.Predicate,java.util.function.Predicate,mekanism.api.IContentsListener)"(maxEnergy: Internal.FloatingLong_, canExtract: Internal.Predicate_<Internal.AutomationType>, canInsert: Internal.Predicate_<Internal.AutomationType>, listener: Internal.IContentsListener_): Internal.BasicEnergyContainer;
        static create(maxEnergy: Internal.FloatingLong_, canExtract: Internal.Predicate_<Internal.AutomationType>, canInsert: Internal.Predicate_<Internal.AutomationType>, listener: Internal.IContentsListener_): Internal.BasicEnergyContainer;
        static create(canExtract: Internal.Predicate_<Internal.AutomationType>, canInsert: Internal.Predicate_<Internal.AutomationType>, tile: Internal.TileEntityMekanism_, listener: Internal.IContentsListener_): Internal.LaserEnergyContainer;
        isEmpty(): boolean;
        getNeeded(): Internal.FloatingLong;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(nbt: Internal.CompoundTag_): void;
        notify(): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(nbt: Internal.Tag_): void;
        wait(arg0: number, arg1: number): void;
        static create(maxEnergy: Internal.FloatingLong_, listener: Internal.IContentsListener_): Internal.BasicEnergyContainer;
        static "create(java.util.function.Predicate,java.util.function.Predicate,mekanism.common.tile.base.TileEntityMekanism,mekanism.api.IContentsListener)"(canExtract: Internal.Predicate_<Internal.AutomationType>, canInsert: Internal.Predicate_<Internal.AutomationType>, tile: Internal.TileEntityMekanism_, listener: Internal.IContentsListener_): Internal.LaserEnergyContainer;
        setEmpty(): void;
        getMaxEnergy(): Internal.FloatingLong;
        serializeNBT(): Internal.Tag;
        setEnergy(energy: Internal.FloatingLong_): void;
        onContentsChanged(): void;
        static output(maxEnergy: Internal.FloatingLong_, listener: Internal.IContentsListener_): Internal.BasicEnergyContainer;
        deserializeNBT(nbt: Internal.Tag_): void;
        toString(): string;
        insert(amount: Internal.FloatingLong_, action: Internal.Action_, automationType: Internal.AutomationType_): Internal.FloatingLong;
        notifyAll(): void;
        getEnergy(): Internal.FloatingLong;
        deserializeNBT(nbt: Internal.CompoundTag_): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        extract(amount: Internal.FloatingLong_, action: Internal.Action_, automationType: Internal.AutomationType_): Internal.FloatingLong;
        equals(arg0: any): boolean;
        static input(maxEnergy: Internal.FloatingLong_, listener: Internal.IContentsListener_): Internal.BasicEnergyContainer;
        get class(): typeof any
        get empty(): boolean
        get needed(): Internal.FloatingLong
        get maxEnergy(): Internal.FloatingLong
        set energy(energy: Internal.FloatingLong_)
        get energy(): Internal.FloatingLong
    }
    type LaserEnergyContainer_ = LaserEnergyContainer;
    class ItemGaugeDropper extends mekanism.common.item.CapabilityItem {
        constructor(properties: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<net.minecraft.network.chat.Component>, flag: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(stack: Internal.ItemStack_, nbt: Internal.CompoundTag_): Internal.ICapabilityProvider;
        modifyReturnValue$ecn000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(stack: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(stack: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        modifyReturnValue$ecn000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(world: Internal.Level_, player: Internal.Player_, hand: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(stack: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        handler$daa000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type ItemGaugeDropper_ = ItemGaugeDropper;
    interface Control {
    }
    type Control_ = Control;
    interface FragmentResultListener {
        abstract onFragmentResult(arg0: string, arg1: Internal.DataSet_): void;
        (arg0: string, arg1: Internal.DataSet): void;
    }
    type FragmentResultListener_ = ((arg0: string, arg1: Internal.DataSet)=> void) | FragmentResultListener;
    interface ISlurryHandler$ISidedSlurryHandler extends Internal.ISlurryHandler, Internal.ISidedChemicalHandler<Internal.Slurry, Internal.SlurryStack> {
        abstract insertChemical(arg0: number, arg1: Internal.SlurryStack_, arg2: Internal.Direction_, arg3: Internal.Action_): Internal.SlurryStack;
        getTankCapacity(arg0: number): number;
        extractChemical(arg0: Internal.SlurryStack_, arg1: Internal.Action_): Internal.SlurryStack;
        "extractChemical(mekanism.api.chemical.slurry.SlurryStack,mekanism.api.Action)"(arg0: Internal.SlurryStack_, arg1: Internal.Action_): Internal.SlurryStack;
        isValid(arg0: number, arg1: Internal.SlurryStack_): boolean;
        "insertChemical(int,mekanism.api.chemical.slurry.SlurryStack,mekanism.api.Action)"(arg0: number, arg1: Internal.SlurryStack_, arg2: Internal.Action_): Internal.SlurryStack;
        abstract extractChemical(arg0: number, arg1: number, arg2: Internal.Direction_, arg3: Internal.Action_): Internal.SlurryStack;
        extractChemical(arg0: Internal.SlurryStack_, arg1: Internal.Direction_, arg2: Internal.Action_): Internal.SlurryStack;
        getEmptyStack(): Internal.SlurryStack;
        insertChemical(arg0: Internal.SlurryStack_, arg1: Internal.Direction_, arg2: Internal.Action_): Internal.SlurryStack;
        "extractChemical(long,mekanism.api.Action)"(arg0: number, arg1: Internal.Action_): Internal.SlurryStack;
        "insertChemical(mekanism.api.chemical.slurry.SlurryStack,net.minecraft.core.Direction,mekanism.api.Action)"(arg0: Internal.SlurryStack_, arg1: Internal.Direction_, arg2: Internal.Action_): Internal.SlurryStack;
        getChemicalInTank(arg0: number): Internal.SlurryStack;
        insertChemical(arg0: Internal.SlurryStack_, arg1: Internal.Action_): Internal.SlurryStack;
        abstract getChemicalInTank(arg0: number, arg1: Internal.Direction_): Internal.SlurryStack;
        abstract isValid(arg0: number, arg1: Internal.SlurryStack_, arg2: Internal.Direction_): boolean;
        "extractChemical(mekanism.api.chemical.slurry.SlurryStack,net.minecraft.core.Direction,mekanism.api.Action)"(arg0: Internal.SlurryStack_, arg1: Internal.Direction_, arg2: Internal.Action_): Internal.SlurryStack;
        abstract setChemicalInTank(arg0: number, arg1: Internal.SlurryStack_, arg2: Internal.Direction_): void;
        insertChemical(arg0: number, arg1: Internal.SlurryStack_, arg2: Internal.Action_): Internal.SlurryStack;
        extractChemical(arg0: number, arg1: number, arg2: Internal.Action_): Internal.SlurryStack;
        "extractChemical(int,long,mekanism.api.Action)"(arg0: number, arg1: number, arg2: Internal.Action_): Internal.SlurryStack;
        getTanks(): number;
        extractChemical(arg0: number, arg1: Internal.Action_): Internal.SlurryStack;
        abstract getTanks(arg0: Internal.Direction_): number;
        getSideFor(): Internal.Direction;
        extractChemical(arg0: number, arg1: Internal.Direction_, arg2: Internal.Action_): Internal.SlurryStack;
        abstract getTankCapacity(arg0: number, arg1: Internal.Direction_): number;
        setChemicalInTank(arg0: number, arg1: Internal.SlurryStack_): void;
        "extractChemical(long,net.minecraft.core.Direction,mekanism.api.Action)"(arg0: number, arg1: Internal.Direction_, arg2: Internal.Action_): Internal.SlurryStack;
        get emptyStack(): Internal.SlurryStack
        get tanks(): number
        get sideFor(): Internal.Direction
    }
    type ISlurryHandler$ISidedSlurryHandler_ = ISlurryHandler$ISidedSlurryHandler;
    class CrystalItem extends Internal.ElementalItem {
        constructor(arg0: sirttas.elementalcraft.api.element.ElementType_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        static addAttributeMultiMapToTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.Multimap_<Internal.Attribute, Internal.AttributeModifier>, arg2: net.minecraft.network.chat.Component_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        static addAttributeMultiMapToTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.Multimap_<Internal.Attribute, Internal.AttributeModifier>): void;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        modifyReturnValue$ecn000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        modifyReturnValue$ecn000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getElementType(): sirttas.elementalcraft.api.element.ElementType;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getElementTypeSupplier(): Internal.Supplier<sirttas.elementalcraft.api.element.ElementType>;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setFoil(arg0: boolean): Internal.ECItem;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        handler$daa000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        static getAttributeTooltip(arg0: Internal.Attribute_, arg1: Internal.AttributeModifier_): Internal.MutableComponent;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get elementType(): sirttas.elementalcraft.api.element.ElementType
        get elementTypeSupplier(): Internal.Supplier<sirttas.elementalcraft.api.element.ElementType>
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set foil(arg0: boolean)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type CrystalItem_ = CrystalItem;
    class LootContextJS {
        constructor(context: Internal.LootContext_)
        getClass(): typeof any;
        findLoot(itemFilter: ItemFilter_): Internal.List<Internal.ItemStack>;
        getDamageSource(): Internal.DamageSource;
        getLevel(): Internal.ServerLevel;
        getPosition(): Vec3d;
        forEachLoot(action: Internal.Consumer_<Internal.ItemStack>): void;
        getLoot(): Internal.List<Internal.ItemStack>;
        isCanceled(): boolean;
        getKillerEntity(): Internal.Entity;
        getType(): LootType;
        cancel(): void;
        removeLoot(itemFilter: ItemFilter_): void;
        notify(): void;
        addLoot(lootEntry: Internal.LootEntry_): void;
        wait(arg0: number, arg1: number): void;
        getPlayer(): Internal.ServerPlayer;
        getBlockPos(): BlockPos;
        getCustomData(): Internal.Map<string, any>;
        lootSize(): number;
        getRandom(): Internal.RandomSource;
        getVanillaContext(): Internal.LootContext;
        getLooting(): number;
        isExploded(): boolean;
        getLootTableId(): ResourceLocation;
        toString(): string;
        notifyAll(): void;
        getExplosionRadius(): number;
        getLuck(): number;
        hashCode(): number;
        getDestroyedBlock(): Internal.BlockContainerJS;
        getEntity(): Internal.Entity;
        hasLoot(ingredient: ItemFilter_): boolean;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getServer(): Internal.MinecraftServer;
        getTool(): Internal.ItemStack;
        get class(): typeof any
        get damageSource(): Internal.DamageSource
        get level(): Internal.ServerLevel
        get position(): Vec3d
        get loot(): Internal.List<Internal.ItemStack>
        get canceled(): boolean
        get killerEntity(): Internal.Entity
        get type(): LootType
        get player(): Internal.ServerPlayer
        get blockPos(): BlockPos
        get customData(): Internal.Map<string, any>
        get random(): Internal.RandomSource
        get vanillaContext(): Internal.LootContext
        get looting(): number
        get exploded(): boolean
        get lootTableId(): ResourceLocation
        get explosionRadius(): number
        get luck(): number
        get destroyedBlock(): Internal.BlockContainerJS
        get entity(): Internal.Entity
        get server(): Internal.MinecraftServer
        get tool(): Internal.ItemStack
    }
    type LootContextJS_ = LootContextJS;
    interface OpenEndedPipe$IEffectHandler {
        abstract applyEffects(arg0: Internal.OpenEndedPipe_, arg1: Internal.FluidStack_): void;
        abstract canApplyEffects(arg0: Internal.OpenEndedPipe_, arg1: Internal.FluidStack_): boolean;
    }
    type OpenEndedPipe$IEffectHandler_ = OpenEndedPipe$IEffectHandler;
    interface ParticleRenderType {
        abstract begin(arg0: Internal.BufferBuilder_, arg1: Internal.TextureManager_): void;
        abstract end(arg0: Internal.Tesselator_): void;
        readonly TERRAIN_SHEET: Internal.ParticleRenderType;
        readonly CUSTOM: Internal.ParticleRenderType;
        readonly PARTICLE_SHEET_OPAQUE: Internal.ParticleRenderType;
        readonly PARTICLE_SHEET_LIT: Internal.ParticleRenderType;
        readonly NO_RENDER: Internal.ParticleRenderType;
        readonly PARTICLE_SHEET_TRANSLUCENT: Internal.ParticleRenderType;
    }
    type ParticleRenderType_ = ParticleRenderType;
    class Glyph extends Internal.ModItem {
        constructor(arg0: Internal.AbstractSpellPart_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        withTooltip(arg0: string): Internal.ModItem;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        modifyReturnValue$ecn000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        modifyReturnValue$ecn000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        withRarity(arg0: Internal.Rarity_): Internal.ModItem;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        withTooltip(arg0: net.minecraft.network.chat.Component_): Internal.ModItem;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        "withTooltip(net.minecraft.network.chat.Component)"(arg0: net.minecraft.network.chat.Component_): Internal.ModItem;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        handler$daa000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        "withTooltip(java.lang.String)"(arg0: string): Internal.ModItem;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        spellPart: Internal.AbstractSpellPart;
    }
    type Glyph_ = Glyph;
    class ThresholdSwitchBlock extends Internal.DirectedDirectionalBlock implements Internal.IBE<Internal.ThresholdSwitchBlockEntity> {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        handler$cag000$betterend$be_getDroppedStacks(state: Internal.BlockState_, builder: Internal.LootParams$Builder_, info: Internal.CallbackInfoReturnable_<any>): void;
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.ThresholdSwitchBlockEntity>): void;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.ThresholdSwitchBlockEntity>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        static getTargetDirection(arg0: Internal.BlockState_): Internal.Direction;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        transform(arg0: Internal.BlockState_, arg1: Internal.StructureTransform_): Internal.BlockState;
        handler$cjp000$bclib$appendSurvivalBlock(itemStack: Internal.ItemStack_, blockGetter: Internal.BlockGetter_, list: Internal.List_<any>, tooltipFlag: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        getBlockEntityClass(): typeof Internal.ThresholdSwitchBlockEntity;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): InteractionResult;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.ThresholdSwitchBlockEntity;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.ThresholdSwitchBlockEntity, InteractionResult>): InteractionResult;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getBlockEntityType(): Internal.BlockEntityType<Internal.ThresholdSwitchBlockEntity>;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): InteractionResult;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        lychee$setTickable(arg0: boolean): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get blockEntityClass(): typeof Internal.ThresholdSwitchBlockEntity
        get descriptionId(): string
        get jumpFactor(): number
        get blockEntityType(): Internal.BlockEntityType<Internal.ThresholdSwitchBlockEntity>
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly LEVEL: (Internal.IntegerProperty) & (Internal.IntegerProperty);
    }
    type ThresholdSwitchBlock_ = ThresholdSwitchBlock;
    class MachineControllerBlockItem extends Internal.BlockItem implements Internal.IControllerPart {
        constructor(arg0: Internal.ControllerModel_, arg1: any_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        static setBlockEntityData(arg0: Internal.ItemStack_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getModel(): Internal.ControllerModel;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        modifyReturnValue$ecn000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        canPlace(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getBlockEntityData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        removeFromBlockToItemMap(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        static updateCustomBlockEntityTag(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getPlaceSound(arg0: Internal.BlockState_): Internal.SoundEvent;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        getBlock(): Internal.Block;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        registerBlocks(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        mustSurvive(): boolean;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getPlaceSound(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): Internal.SoundEvent;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        modifyReturnValue$ecn000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        quark$getPlacementState(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getPlacementState(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        updateCustomBlockEntityTag(arg0: BlockPos_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.ItemStack_, arg4: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        place(arg0: Internal.BlockPlaceContext_): InteractionResult;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        updatePlacementContext(arg0: Internal.BlockPlaceContext_): Internal.BlockPlaceContext;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        placeBlock(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$daa000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        get model(): Internal.ControllerModel
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        get block(): Internal.Block
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type MachineControllerBlockItem_ = MachineControllerBlockItem;
    class Tooltip implements Internal.NarrationSupplier, Internal.TooltipAccess {
        constructor(arg0: net.minecraft.network.chat.Component_, arg1: net.minecraft.network.chat.Component_)
        getClass(): typeof any;
        toCharSequence(arg0: Internal.Minecraft_): Internal.List<Internal.FormattedCharSequence>;
        toString(): string;
        static splitTooltip(arg0: Internal.Minecraft_, arg1: net.minecraft.network.chat.Component_): Internal.List<Internal.FormattedCharSequence>;
        static create(arg0: net.minecraft.network.chat.Component_, arg1: net.minecraft.network.chat.Component_): Internal.Tooltip;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getMessage(): net.minecraft.network.chat.Component;
        hashCode(): number;
        updateNarration(arg0: Internal.NarrationElementOutput_): void;
        wait(): void;
        wait(arg0: number): void;
        static create(arg0: net.minecraft.network.chat.Component_): Internal.Tooltip;
        equals(arg0: any): boolean;
        get class(): typeof any
        get message(): net.minecraft.network.chat.Component
    }
    type Tooltip_ = Tooltip;
    class LootDataManager implements Internal.LootDataResolver, Internal.PreparableReloadListener, Internal.LootTablesKJS, Internal.IdentifiableResourceReloadListener {
        constructor()
        getLootTable(arg0: ResourceLocation_): Internal.LootTable;
        getClass(): typeof any;
        getElement<T>(arg0: Internal.LootDataType_<T>, arg1: ResourceLocation_): T;
        static kjs$postLootEvents(map: Internal.Map_<ResourceLocation, Internal.JsonElement>): void;
        getElementOptional<T>(arg0: Internal.LootDataType_<T>, arg1: ResourceLocation_): Internal.Optional<T>;
        getElement<T>(arg0: Internal.LootDataId_<T>): T;
        handler$ddp000$probejs$apply(parsedMap: Internal.Map_<any, any>, ci: Internal.CallbackInfo_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getName(): string;
        static "createComposite(net.minecraft.world.level.storage.loot.predicates.LootItemCondition[])"(arg0: Internal.LootItemCondition_[]): Internal.LootItemCondition;
        getFabricId(): ResourceLocation;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        static "createComposite(net.minecraft.world.level.storage.loot.functions.LootItemFunction[])"(arg0: Internal.LootItemFunction_[]): Internal.LootItemFunction;
        toString(): string;
        getKeys(arg0: Internal.LootDataType_<any>): Internal.Collection<ResourceLocation>;
        notifyAll(): void;
        getFabricDependencies(): Internal.Collection<any>;
        static createComposite(arg0: Internal.LootItemCondition_[]): Internal.LootItemCondition;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        getElementOptional<T>(arg0: Internal.LootDataId_<T>): Internal.Optional<T>;
        kjs$completeReload(parsedMap: Internal.Map_<Internal.LootDataType<any>, Internal.Map<ResourceLocation, any>>, elements: Internal.Map_<Internal.LootDataId<any>, any>): void;
        equals(arg0: any): boolean;
        static createComposite(arg0: Internal.LootItemFunction_[]): Internal.LootItemFunction;
        get class(): typeof any
        get name(): string
        get fabricId(): ResourceLocation
        get fabricDependencies(): Internal.Collection<any>
        static readonly $assertionsDisabled: (true) & (boolean);
        static readonly EMPTY_LOOT_TABLE_KEY: Internal.LootDataId<Internal.LootTable>;
    }
    type LootDataManager_ = LootDataManager;
    class ItemAttributeModifierEvent extends net.minecraftforge.eventbus.api.Event {
        constructor()
        constructor(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Multimap_<Internal.Attribute, Internal.AttributeModifier>)
        getOriginalModifiers(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        removeModifier(arg0: Internal.Attribute_, arg1: Internal.AttributeModifier_): boolean;
        setPhase(arg0: Internal.EventPriority_): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        isCancelable(): boolean;
        getListenerList(): Internal.ListenerList;
        getResult(): Internal.Event$Result;
        removeAttribute(arg0: Internal.Attribute_): Internal.Collection<Internal.AttributeModifier>;
        toString(): string;
        notifyAll(): void;
        getModifiers(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        addModifier(arg0: Internal.Attribute_, arg1: Internal.AttributeModifier_): boolean;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        wait(): void;
        clearModifiers(): void;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        getSlotType(): Internal.EquipmentSlot;
        equals(arg0: any): boolean;
        getItemStack(): Internal.ItemStack;
        get originalModifiers(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get result(): Internal.Event$Result
        get modifiers(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>
        set result(arg0: Internal.Event$Result_)
        get phase(): Internal.EventPriority
        get slotType(): Internal.EquipmentSlot
        get itemStack(): Internal.ItemStack
    }
    type ItemAttributeModifierEvent_ = ItemAttributeModifierEvent;
    interface IRadialMode {
        abstract icon(): ResourceLocation;
        abstract sliceName(): net.minecraft.network.chat.Component;
        color(): Internal.EnumColor;
    }
    type IRadialMode_ = IRadialMode;
    class BoatItem extends Internal.Item implements Internal.BoatItemAccess {
        constructor(arg0: boolean, arg1: Internal.Boat$Type_, arg2: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        modifyReturnValue$ecn000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        modifyReturnValue$ecn000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        modify$cmj000$bclib$bcl_suse(boat: Internal.Entity_): Internal.Entity;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        handler$daa000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        invokeGetBoat(arg0: Internal.Level_, arg1: Internal.HitResult_): Internal.Boat;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        readonly type: Internal.Boat$Type;
        readonly hasChest: boolean;
    }
    type BoatItem_ = BoatItem;
    class ServerPlayerTickHandler {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        tick(arg0: Internal.ServerPlayer_): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type ServerPlayerTickHandler_ = ServerPlayerTickHandler;
    class Event$Result extends Internal.Enum<Internal.Event$Result> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        getDeclaringClass(): typeof Internal.Event$Result;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        static values(): Internal.Event$Result[];
        ordinal(): number;
        wait(): void;
        static valueOf(arg0: string): Internal.Event$Result;
        wait(arg0: number): void;
        compareTo(arg0: Internal.Event$Result_): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.Event$Result>>;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        "compareTo(net.minecraftforge.eventbus.api.Event$Result)"(arg0: Internal.Event$Result_): number;
        get class(): typeof any
        get declaringClass(): typeof Internal.Event$Result
        static readonly ALLOW: (Internal.Event$Result) & (Internal.Event$Result);
        static readonly DEFAULT: (Internal.Event$Result) & (Internal.Event$Result);
        static readonly DENY: (Internal.Event$Result) & (Internal.Event$Result);
    }
    type Event$Result_ = "deny" | "allow" | "default" | Event$Result;
    class CodecRecipeSerializer <R extends Internal.Recipe<any>> implements Internal.RecipeSerializer<R> {
        constructor(recipeType: Internal.RecipeType_<R>, codec: Internal.Function_<ResourceLocation, Internal.Codec<R>>)
        constructor(recipeType: Internal.RecipeType_<R>, jsonCodec: Internal.Function_<ResourceLocation, Internal.Codec<R>>, networkCodec: Internal.Function_<ResourceLocation, Internal.Codec<R>>)
        getClass(): typeof any;
        fromJson(id: ResourceLocation_, json: Internal.JsonObject_): R;
        toNetwork(buffer: Internal.FriendlyByteBuf_, recipe: R): void;
        toString(): string;
        type(): Internal.RecipeType<R>;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        fromNetwork(id: ResourceLocation_, buffer: Internal.FriendlyByteBuf_): R;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): R;
        get class(): typeof any
    }
    type CodecRecipeSerializer_<R extends Internal.Recipe<any>> = CodecRecipeSerializer<R>;
    class FluidSounds {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        addSound(name: string, sound: Internal.SoundEvent_): void;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getSounds(): Internal.Map<string, Internal.SoundEvent>;
        getSound(name: string): Internal.SoundEvent;
        get class(): typeof any
        get sounds(): Internal.Map<string, Internal.SoundEvent>
    }
    type FluidSounds_ = FluidSounds;
    class ControllerState extends Internal.Enum<Internal.ControllerState> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        compareTo(arg0: Internal.ControllerState_): number;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        "compareTo(appeng.api.networking.pathing.ControllerState)"(arg0: Internal.ControllerState_): number;
        name(): string;
        static values(): Internal.ControllerState[];
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        getDeclaringClass(): typeof Internal.ControllerState;
        wait(arg0: number): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ControllerState>>;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static valueOf(arg0: string): Internal.ControllerState;
        get class(): typeof any
        get declaringClass(): typeof Internal.ControllerState
        static readonly CONTROLLER_CONFLICT: (Internal.ControllerState) & (Internal.ControllerState);
        static readonly NO_CONTROLLER: (Internal.ControllerState) & (Internal.ControllerState);
        static readonly CONTROLLER_ONLINE: (Internal.ControllerState) & (Internal.ControllerState);
    }
    type ControllerState_ = "no_controller" | ControllerState | "controller_online" | "controller_conflict";
    class PipeUpgradeType <T extends Internal.PipeUpgrade> implements Internal.ItemLike {
        constructor(arg0: Internal.PipeUpgradeType$Factory_<T>)
        getClass(): typeof any;
        getModel(): Internal.BakedModel;
        toString(): string;
        notifyAll(): void;
        asItem(): Internal.Item;
        getKey(): ResourceLocation;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        create(arg0: Internal.ElementPipeBlockEntity_, arg1: Internal.Direction_): T;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getDescriptionId(): string;
        get class(): typeof any
        get model(): Internal.BakedModel
        get key(): ResourceLocation
        get descriptionId(): string
        readonly factory: Internal.PipeUpgradeType$Factory<T>;
    }
    type PipeUpgradeType_<T extends Internal.PipeUpgrade> = PipeUpgradeType<T>;
    class ScaffoldingBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        handler$cag000$betterend$be_getDroppedStacks(state: Internal.BlockState_, builder: Internal.LootParams$Builder_, info: Internal.CallbackInfoReturnable_<any>): void;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        handler$cjp000$bclib$appendSurvivalBlock(itemStack: Internal.ItemStack_, blockGetter: Internal.BlockGetter_, list: Internal.List_<any>, tooltipFlag: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        static getDistance(arg0: Internal.BlockGetter_, arg1: BlockPos_): number;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        lychee$setTickable(arg0: boolean): void;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly STABILITY_MAX_DISTANCE: (7) & (number);
        static readonly BOTTOM: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly WATERLOGGED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly DISTANCE: (Internal.IntegerProperty) & (Internal.IntegerProperty);
    }
    type ScaffoldingBlock_ = ScaffoldingBlock;
    abstract class ScriptableObject implements Internal.SymbolScriptable, Internal.Scriptable, Internal.ConstProperties {
        constructor()
        constructor(scope: Internal.Scriptable_, prototype: Internal.Scriptable_)
        preventExtensions(): void;
        static getFunctionPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        static "hasProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        static getArrayPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        static putProperty(obj: Internal.Scriptable_, key: Internal.Symbol_, value: any, cx: Internal.Context_): void;
        "get(dev.latvian.mods.rhino.Context,java.lang.String,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, name: string, start: Internal.Scriptable_): any;
        static putProperty(obj: Internal.Scriptable_, name: string, value: any, cx: Internal.Context_): void;
        static "putProperty(dev.latvian.mods.rhino.Scriptable,int,java.lang.Object,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, value: any, cx: Internal.Context_): void;
        get(cx: Internal.Context_, index: number, start: Internal.Scriptable_): any;
        setParentScope(m: Internal.Scriptable_): void;
        "setAttributes(dev.latvian.mods.rhino.Context,int,int)"(cx: Internal.Context_, index: number, attributes: number): void;
        "put(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Scriptable,java.lang.Object)"(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_, value: any): void;
        getTypeOf(): Internal.MemberType;
        getIds(cx: Internal.Context_): any[];
        static deleteProperty(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        defineOwnProperties(cx: Internal.Context_, props: Internal.ScriptableObject_): void;
        static getTopScopeValue(scope: Internal.Scriptable_, key: any, cx: Internal.Context_): any;
        "delete(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol)"(cx: Internal.Context_, key: Internal.Symbol_): void;
        setAttributes(cx: Internal.Context_, name: string, attributes: number): void;
        associateValue(key: any, value: any): any;
        getParentScope(): Internal.Scriptable;
        setAttributes(cx: Internal.Context_, key: Internal.Symbol_, attributes: number): void;
        static defineClass<T extends Internal.Scriptable>(scope: Internal.Scriptable_, clazz: T, cx: Internal.Context_): void;
        "delete(dev.latvian.mods.rhino.Context,java.lang.String)"(cx: Internal.Context_, name: string): void;
        avoidObjectDetection(): boolean;
        static getClassPrototype(scope: Internal.Scriptable_, className: string, cx: Internal.Context_): Internal.Scriptable;
        put(cx: Internal.Context_, name: string, start: Internal.Scriptable_, value: any): void;
        static getProperty(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): any;
        getClass(): typeof any;
        static hasProperty(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        "delete(dev.latvian.mods.rhino.Context,int)"(cx: Internal.Context_, index: number): void;
        hasInstance(cx: Internal.Context_, instance: Internal.Scriptable_): boolean;
        getExternalArrayData(): Internal.ExternalArrayData;
        put(cx: Internal.Context_, index: number, start: Internal.Scriptable_, value: any): void;
        static "getProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): any;
        "defineProperty(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,java.lang.Object,int)"(cx: Internal.Context_, key: Internal.Symbol_, value: any, attributes: number): void;
        static defineConstProperty(destination: Internal.Scriptable_, propertyName: string, cx: Internal.Context_): void;
        sealObject(cx: Internal.Context_): void;
        has(cx: Internal.Context_, index: number, start: Internal.Scriptable_): boolean;
        static deleteProperty(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        "get(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): any;
        static defineProperty(destination: Internal.Scriptable_, propertyName: string, value: any, attributes: number, cx: Internal.Context_): void;
        getAttributes(cx: Internal.Context_, index: number): number;
        static "deleteProperty(dev.latvian.mods.rhino.Scriptable,int,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        toString(): string;
        notifyAll(): void;
        setGetterOrSetter(cx: Internal.Context_, name: string, index: number, getterOrSetter: dev.latvian.mods.rhino.Callable_, isSetter: boolean): void;
        static defineClass<T extends Internal.Scriptable>(scope: Internal.Scriptable_, clazz: T, sealed: boolean, mapInheritance: boolean, cx: Internal.Context_): string;
        enumerationIteratorNext(cx: Internal.Context_, currentId: Internal.Consumer_<any>): boolean;
        static getProperty(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): any;
        size(): number;
        has(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): boolean;
        static "putProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,java.lang.Object,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, value: any, cx: Internal.Context_): void;
        static getObjectPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        wait(arg0: number): void;
        defineProperty(cx: Internal.Context_, propertyName: string, value: any, attributes: number): void;
        setAttributes(cx: Internal.Context_, index: number, attributes: number): void;
        putConst(cx: Internal.Context_, name: string, start: Internal.Scriptable_, value: any): void;
        static "getProperty(dev.latvian.mods.rhino.Scriptable,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): any;
        defineProperty(cx: Internal.Context_, propertyName: string, delegateTo: any, getter: Internal.WrappedExecutable_, setter: Internal.WrappedExecutable_, attributes: number): void;
        abstract getClassName(): string;
        defineFunctionProperties(cx: Internal.Context_, names: string[], clazz: typeof any, attributes: number): void;
        "delete"(cx: Internal.Context_, name: string): void;
        static putProperty(obj: Internal.Scriptable_, index: number, value: any, cx: Internal.Context_): void;
        "delete"(cx: Internal.Context_, index: number): void;
        static getGeneratorFunctionPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        "put(dev.latvian.mods.rhino.Context,java.lang.String,dev.latvian.mods.rhino.Scriptable,java.lang.Object)"(cx: Internal.Context_, name: string, start: Internal.Scriptable_, value: any): void;
        static defineClass<T extends Internal.Scriptable>(scope: Internal.Scriptable_, clazz: T, sealed: boolean, cx: Internal.Context_): void;
        notify(): void;
        static putConstProperty(obj: Internal.Scriptable_, name: string, value: any, cx: Internal.Context_): void;
        static redefineProperty(obj: Internal.Scriptable_, name: string, isConst: boolean, cx: Internal.Context_): void;
        static "putProperty(dev.latvian.mods.rhino.Scriptable,dev.latvian.mods.rhino.Symbol,java.lang.Object,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, key: Internal.Symbol_, value: any, cx: Internal.Context_): void;
        get(cx: Internal.Context_, key: any): any;
        get(cx: Internal.Context_, name: string, start: Internal.Scriptable_): any;
        getPrototype(cx: Internal.Context_): Internal.Scriptable;
        static getDefaultValue(object: Internal.Scriptable_, typeHint: typeof any, cx: Internal.Context_): any;
        "put(dev.latvian.mods.rhino.Context,int,dev.latvian.mods.rhino.Scriptable,java.lang.Object)"(cx: Internal.Context_, index: number, start: Internal.Scriptable_, value: any): void;
        enumerationIteratorHasNext(cx: Internal.Context_, currentId: Internal.Consumer_<any>): boolean;
        static "getProperty(dev.latvian.mods.rhino.Scriptable,int,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): any;
        "has(dev.latvian.mods.rhino.Context,int,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, index: number, start: Internal.Scriptable_): boolean;
        isConst(name: string): boolean;
        getAttributes(cx: Internal.Context_, sym: Internal.Symbol_): number;
        "getAttributes(dev.latvian.mods.rhino.Context,int)"(cx: Internal.Context_, index: number): number;
        static "deleteProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        isExtensible(): boolean;
        wait(): void;
        setPrototype(m: Internal.Scriptable_): void;
        getGetterOrSetter(name: string, index: number, isSetter: boolean): any;
        getAttributes(cx: Internal.Context_, name: string): number;
        defineProperty(cx: Internal.Context_, key: Internal.Symbol_, value: any, attributes: number): void;
        static getPropertyIds(cx: Internal.Context_, obj: Internal.Scriptable_): any[];
        getAssociatedValue(key: any): any;
        "defineProperty(dev.latvian.mods.rhino.Context,java.lang.String,java.lang.Object,int)"(cx: Internal.Context_, propertyName: string, value: any, attributes: number): void;
        "delete"(cx: Internal.Context_, key: Internal.Symbol_): void;
        static "hasProperty(dev.latvian.mods.rhino.Scriptable,int,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        static getProperty(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): any;
        "has(dev.latvian.mods.rhino.Context,java.lang.String,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, name: string, start: Internal.Scriptable_): boolean;
        isEmpty(): boolean;
        wait(arg0: number, arg1: number): void;
        has(cx: Internal.Context_, name: string, start: Internal.Scriptable_): boolean;
        defineConst(cx: Internal.Context_, name: string, start: Internal.Scriptable_): void;
        "defineProperty(dev.latvian.mods.rhino.Context,java.lang.String,java.lang.Class,int)"(cx: Internal.Context_, propertyName: string, clazz: typeof any, attributes: number): void;
        defineOwnProperty(cx: Internal.Context_, id: any, desc: Internal.ScriptableObject_): void;
        getDefaultValue(cx: Internal.Context_, typeHint: typeof any): any;
        setExternalArrayData(cx: Internal.Context_, array: Internal.ExternalArrayData_): void;
        "getAttributes(dev.latvian.mods.rhino.Context,java.lang.String)"(cx: Internal.Context_, name: string): number;
        get(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): any;
        static hasProperty(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): boolean;
        "setAttributes(dev.latvian.mods.rhino.Context,java.lang.String,int)"(cx: Internal.Context_, name: string, attributes: number): void;
        isSealed(cx: Internal.Context_): boolean;
        getAllIds(cx: Internal.Context_): any[];
        "has(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): boolean;
        defineProperty(cx: Internal.Context_, propertyName: string, clazz: typeof any, attributes: number): void;
        static hasProperty(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        "get(dev.latvian.mods.rhino.Context,int,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, index: number, start: Internal.Scriptable_): any;
        "setAttributes(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,int)"(cx: Internal.Context_, key: Internal.Symbol_, attributes: number): void;
        static "hasProperty(dev.latvian.mods.rhino.Scriptable,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): boolean;
        hashCode(): number;
        getExternalArrayLength(): any;
        "getAttributes(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol)"(cx: Internal.Context_, sym: Internal.Symbol_): number;
        static getTopLevelScope(obj: Internal.Scriptable_): Internal.Scriptable;
        put(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_, value: any): void;
        equals(arg0: any): boolean;
        set parentScope(m: Internal.Scriptable_)
        get typeOf(): Internal.MemberType
        get parentScope(): Internal.Scriptable
        get class(): typeof any
        get externalArrayData(): Internal.ExternalArrayData
        get className(): string
        get extensible(): boolean
        set prototype(m: Internal.Scriptable_)
        get empty(): boolean
        get externalArrayLength(): any
        static readonly EMPTY: (0) & (number);
        static readonly READONLY: (1) & (number);
        static readonly DONTENUM: (2) & (number);
        static readonly UNINITIALIZED_CONST: (8) & (number);
        static readonly CONST: (13) & (number);
        static readonly PERMANENT: (4) & (number);
    }
    type ScriptableObject_ = ScriptableObject;
    class ClientboundUpdateRecipesPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.Collection_<Internal.Recipe<any>>)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        static fromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        hashCode(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        static toNetwork<T extends Internal.Recipe<any>>(arg0: Internal.FriendlyByteBuf_, arg1: T): void;
        equals(arg0: any): boolean;
        getRecipes(): Internal.List<Internal.Recipe<any>>;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
        get recipes(): Internal.List<Internal.Recipe<any>>
    }
    type ClientboundUpdateRecipesPacket_ = ClientboundUpdateRecipesPacket;
    class VineFeatureConfig extends Internal.ScatterFeatureConfig {
        constructor(vineBlock: Internal.Block_, maxLength: number)
        constructor(plant: Internal.BlockStateProvider_, radius: number, maxLength: number)
        getClass(): typeof any;
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        toString(): string;
        notifyAll(): void;
        static lanceleaf(): Internal.ScatterFeatureConfig;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static filalux(): Internal.ScatterFeatureConfig;
        hashCode(): number;
        static blueVine(): Internal.ScatterFeatureConfig;
        static glowPillar(): Internal.ScatterFeatureConfig;
        getPlantState(rnd: Internal.RandomSource_, pos: BlockPos_): Internal.BlockState;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        readonly plant: Internal.BlockStateProvider;
        readonly maxLength: number;
        static readonly CODEC: Internal.Codec<Internal.VineFeatureConfig>;
    }
    type VineFeatureConfig_ = VineFeatureConfig;
    class JukeboxBlock extends Internal.BaseEntityBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        handler$cag000$betterend$be_getDroppedStacks(state: Internal.BlockState_, builder: Internal.LootParams$Builder_, info: Internal.CallbackInfoReturnable_<any>): void;
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static createTickerHelper<E extends Internal.BlockEntity, A extends Internal.BlockEntity>(arg0: Internal.BlockEntityType_<A>, arg1: Internal.BlockEntityType_<E>, arg2: Internal.BlockEntityTicker_<E>): Internal.BlockEntityTicker<A>;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        handler$cjp000$bclib$appendSurvivalBlock(itemStack: Internal.ItemStack_, blockGetter: Internal.BlockGetter_, list: Internal.List_<any>, tooltipFlag: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        lychee$setTickable(arg0: boolean): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly HAS_RECORD: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type JukeboxBlock_ = JukeboxBlock;
    class IndustrialWorkingTile$WorkAction {
        constructor(arg0: Internal.IndustrialWorkingTile_<any>, arg1: number, arg2: number)
        getClass(): typeof any;
        getEnergyConsumed(): number;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        getWorkAmount(): number;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get energyConsumed(): number
        get workAmount(): number
    }
    type IndustrialWorkingTile$WorkAction_ = IndustrialWorkingTile$WorkAction;
    class BigInteger extends number implements Internal.Comparable<Internal.BigInteger> {
        constructor(arg0: number, arg1: number[], arg2: number, arg3: number)
        constructor(arg0: string, arg1: number)
        constructor(arg0: number, arg1: number[])
        constructor(arg0: number, arg1: number, arg2: Internal.Random_)
        constructor(arg0: number[], arg1: number, arg2: number)
        constructor(arg0: number[])
        constructor(arg0: number, arg1: Internal.Random_)
        constructor(arg0: string)
        modInverse(arg0: Internal.BigInteger_): this;
        doubleValue(): number;
        static valueOf(arg0: number): Internal.BigInteger;
        andNot(arg0: Internal.BigInteger_): this;
        bitCount(): number;
        notify(): void;
        not(): this;
        compareTo(arg0: any): number;
        min(arg0: Internal.BigInteger_): this;
        shiftRight(arg0: number): this;
        compareTo(arg0: Internal.BigInteger_): number;
        longValue(): number;
        max(arg0: Internal.BigInteger_): this;
        setBit(arg0: number): this;
        clearBit(arg0: number): this;
        multiply(arg0: Internal.BigInteger_): this;
        divideAndRemainder(arg0: Internal.BigInteger_): Internal.BigInteger[];
        testBit(arg0: number): boolean;
        abs(): this;
        pow(arg0: number): this;
        toByteArray(): number[];
        shortValue(): number;
        modPow(arg0: Internal.BigInteger_, arg1: Internal.BigInteger_): this;
        isProbablePrime(arg0: number): boolean;
        wait(): void;
        toString(arg0: number): string;
        and(arg0: Internal.BigInteger_): this;
        getLowestSetBit(): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        getClass(): typeof any;
        nextProbablePrime(): this;
        floatValue(): number;
        "compareTo(java.math.BigInteger)"(arg0: Internal.BigInteger_): number;
        wait(arg0: number, arg1: number): void;
        mod(arg0: Internal.BigInteger_): this;
        static probablePrime(arg0: number, arg1: Internal.Random_): Internal.BigInteger;
        sqrtAndRemainder(): Internal.BigInteger[];
        remainder(arg0: Internal.BigInteger_): this;
        intValue(): number;
        intValueExact(): number;
        negate(): this;
        shiftLeft(arg0: number): this;
        toString(): string;
        subtract(arg0: Internal.BigInteger_): this;
        shortValueExact(): number;
        notifyAll(): void;
        or(arg0: Internal.BigInteger_): this;
        longValueExact(): number;
        byteValueExact(): number;
        bitLength(): number;
        hashCode(): number;
        flipBit(arg0: number): this;
        divide(arg0: Internal.BigInteger_): this;
        wait(arg0: number): void;
        sqrt(): this;
        gcd(arg0: Internal.BigInteger_): this;
        xor(arg0: Internal.BigInteger_): this;
        add(arg0: Internal.BigInteger_): this;
        equals(arg0: any): boolean;
        signum(): number;
        byteValue(): number;
        set bit(arg0: number)
        get lowestSetBit(): number
        get class(): typeof any
        static readonly TEN: (10) & (Internal.BigInteger);
        static readonly ONE: (1) & (Internal.BigInteger);
        static readonly TWO: (2) & (Internal.BigInteger);
        static readonly ZERO: (0) & (Internal.BigInteger);
    }
    type BigInteger_ = BigInteger;
    interface DimensionTypeAccessor {
        abstract getFixedTime(): Internal.OptionalLong;
        abstract getAmbientLight(): number;
        get fixedTime(): Internal.OptionalLong
        get ambientLight(): number
    }
    type DimensionTypeAccessor_ = DimensionTypeAccessor;
    class ScribesTile extends Internal.ModdedTile implements net.minecraft.world.Container, Internal.GeoBlockEntity, Internal.ITickable, Internal.ITooltipProvider, Internal.IAnimationListener, Internal.IWandable {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        stopOpen(arg0: Internal.Player_): void;
        requestModelDataUpdate(): void;
        onFinishedConnectionFirst(arg0: BlockPos_, arg1: Internal.LivingEntity_, arg2: Internal.Player_): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        getRemainingRequired(): Internal.List<Internal.Ingredient>;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        getTick(arg0: any): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        removeItem(arg0: number, arg1: number): Internal.ItemStack;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        load(arg0: Internal.CompoundTag_): void;
        abstract setChanged(): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        onFinishedConnectionLast(arg0: BlockPos_, arg1: Internal.LivingEntity_, arg2: Internal.Player_): void;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        "setChanged()"(): void;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getLogicTile(): this;
        "getUpdatePacket()"(): Internal.Packet<any>;
        refundConsumed(): void;
        kjs$self(): net.minecraft.world.Container;
        getWidth(): number;
        setRemoved(): void;
        "isEmpty()"(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getType(): Internal.BlockEntityType<any>;
        getX(): number;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        static getExperienceForLevel(arg0: number): number;
        getItem(arg0: number): Internal.ItemStack;
        "getUpdatePacket()"(): Internal.ClientboundBlockEntityDataPacket;
        getRenderBoundingBox(): Internal.AABB;
        setAnimData<D>(arg0: Internal.SerializableDataTicket_<D>, arg1: D): void;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        getClass(): typeof any;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        onFinishedConnectionFirst(arg0: BlockPos_, arg1: Internal.Direction_, arg2: Internal.LivingEntity_, arg3: Internal.Player_): void;
        countItem(arg0: Internal.Item_): number;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        isMasterTile(): boolean;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        startOpen(arg0: Internal.Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        getAnimatableInstanceCache(): Internal.AnimatableInstanceCache;
        getStack(): Internal.ItemStack;
        fabric_hasPersistentAttachments(): boolean;
        clearRemoved(): void;
        getUpdatePacket(): Internal.Packet<any>;
        consumeStack(arg0: Internal.ItemStack_): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        fabric_getAttachments(): Internal.Map<any, any>;
        shouldPlayAnimsWhileGamePaused(): boolean;
        getHeight(): number;
        static getLevelsFromExp(arg0: number): number;
        countNonEmpty(): number;
        getPersistentData(): Internal.CompoundTag;
        updateBlock(): boolean;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        setRecipe(arg0: Internal.GlyphRecipe_, arg1: Internal.Player_): void;
        canTakeItem(arg0: net.minecraft.world.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        onWanded(arg0: Internal.Player_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        clear(): void;
        wait(arg0: number): void;
        static getTotalPlayerExperience(arg0: Internal.Player_): number;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        clearContent(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        reviveCaps(): void;
        static tryClear(arg0: any): void;
        getAttached(type: Internal.AttachmentType_<any>): any;
        getUpdateTag(): Internal.CompoundTag;
        getRenderAttachmentData(): any;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        triggerAnim(arg0: string, arg1: string): void;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        setLevel(arg0: Internal.Level_): void;
        notify(): void;
        getSlots(): number;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        onLoad(): void;
        getAnimData<D>(arg0: Internal.SerializableDataTicket_<D>): D;
        getContainerSize(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        setItem(arg0: number, arg1: Internal.ItemStack_): void;
        invalidateCaps(): void;
        getBlockState(): Internal.BlockState;
        getSlotLimit(slot: number): number;
        animatableCacheOverride(): Internal.AnimatableInstanceCache;
        getMaxStackSize(): number;
        removeItemNoUpdate(arg0: number): Internal.ItemStack;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        tick(): void;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        getZ(): number;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        getTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        getWandHighlight(arg0: Internal.List_<Internal.ColorPos>): Internal.List<Internal.ColorPos>;
        count(ingredient: Internal.Ingredient_): number;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveAdditional(arg0: Internal.CompoundTag_): void;
        count(): number;
        saveWithId(): Internal.CompoundTag;
        canConsumeItemstack(arg0: Internal.ItemStack_): boolean;
        getBoneResetTime(): number;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        isEmpty(): boolean;
        onFinishedConnectionLast(arg0: BlockPos_, arg1: Internal.Direction_, arg2: Internal.LivingEntity_, arg3: Internal.Player_): void;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        static setChanged(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        onlyOpCanSetNbt(): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        serializeNBT(): Internal.Tag;
        setStack(arg0: Internal.ItemStack_): void;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        getStackInSlot(slot: number): Internal.ItemStack;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        asContainer(): net.minecraft.world.Container;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getAllItems(): Internal.List<Internal.ItemStack>;
        takeNearby(): void;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        stillValid(arg0: Internal.Player_): boolean;
        startAnimation(arg0: number): void;
        getY(): number;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        tick(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_): void;
        getRenderData(): any;
        getModelData(): Internal.ModelData;
        isMutable(): boolean;
        find(ingredient: Internal.Ingredient_): number;
        registerControllers(arg0: Internal.AnimatableManager$ControllerRegistrar_): void;
        equals(arg0: any): boolean;
        get remainingRequired(): Internal.List<Internal.Ingredient>
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get logicTile(): Internal.ScribesTile
        get "updatePacket()"(): Internal.Packet<any>
        get width(): number
        get "empty()"(): boolean
        get type(): Internal.BlockEntityType<any>
        get x(): number
        get "updatePacket()"(): Internal.ClientboundBlockEntityDataPacket
        get renderBoundingBox(): Internal.AABB
        get class(): typeof any
        get masterTile(): boolean
        get animatableInstanceCache(): Internal.AnimatableInstanceCache
        get stack(): Internal.ItemStack
        get updatePacket(): Internal.Packet<any>
        get height(): number
        get persistentData(): Internal.CompoundTag
        get updateTag(): Internal.CompoundTag
        get renderAttachmentData(): any
        set level(arg0: Internal.Level_)
        get slots(): number
        get blockPos(): BlockPos
        get removed(): boolean
        get containerSize(): number
        get blockState(): Internal.BlockState
        get maxStackSize(): number
        get z(): number
        get boneResetTime(): number
        get empty(): boolean
        get level(): Internal.Level
        set stack(arg0: Internal.ItemStack_)
        get allItems(): Internal.List<Internal.ItemStack>
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get y(): number
        get renderData(): any
        get modelData(): Internal.ModelData
        get mutable(): boolean
        crafting: boolean;
        autoYoink: boolean;
        recipe: Internal.GlyphRecipe;
        craftingTicks: number;
        consumedStacks: Internal.List<Internal.ItemStack>;
    }
    type ScribesTile_ = ScribesTile;
    class ItemBlockBin extends Internal.ItemBlockTooltip<Internal.BlockBin> implements Internal.IItemSustainedInventory {
        constructor(block: Internal.BlockBin_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        static setBlockEntityData(arg0: Internal.ItemStack_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        canContentsDrop(stack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<net.minecraft.network.chat.Component>, flag: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        hasSustainedInventory(): boolean;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        modifyReturnValue$ecn000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        canPlace(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getBlockEntityData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getSustainedInventory(): Internal.ListTag;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        removeFromBlockToItemMap(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        setSustainedInventory(nbtTags: Internal.ListTag_, stack: Internal.ItemStack_): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        static updateCustomBlockEntityTag(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getPlaceSound(arg0: Internal.BlockState_): Internal.SoundEvent;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        registerBlocks(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getTextColor(stack: Internal.ItemStack_): Internal.TextColor;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(stack: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        mustSurvive(): boolean;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getPlaceSound(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): Internal.SoundEvent;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(stack: Internal.ItemStack_, nbt: Internal.CompoundTag_): Internal.ICapabilityProvider;
        modifyReturnValue$ecn000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getDroppedSlots(stack: Internal.ItemStack_): Internal.List<Internal.IInventorySlot>;
        onDestroyed(item: Internal.ItemEntity_, damageSource: Internal.DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        setSustainedInventory(nbtTags: Internal.ListTag_): void;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        hasSustainedInventory(stack: Internal.ItemStack_): boolean;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        quark$getPlacementState(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getPlacementState(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getBlock(): Internal.BlockBin;
        updateCustomBlockEntityTag(arg0: BlockPos_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.ItemStack_, arg4: Internal.BlockState_): boolean;
        getTier(): Internal.BinTier;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        place(arg0: Internal.BlockPlaceContext_): InteractionResult;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getSustainedInventory(stack: Internal.ItemStack_): Internal.ListTag;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        updatePlacementContext(arg0: Internal.BlockPlaceContext_): Internal.BlockPlaceContext;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        placeBlock(context: Internal.BlockPlaceContext_, state: Internal.BlockState_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$daa000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_, slotChanged: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        get sustainedInventory(): Internal.ListTag
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        set sustainedInventory(nbtTags: Internal.ListTag_)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        get block(): Internal.BlockBin
        get tier(): Internal.BinTier
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type ItemBlockBin_ = ItemBlockBin;
    interface IRecipeTransferInfo <C extends Internal.AbstractContainerMenu, R> {
        requireCompleteSets(arg0: C, arg1: R): boolean;
        abstract getContainerClass(): C;
        abstract getInventorySlots(arg0: C, arg1: R): Internal.List<Internal.Slot>;
        abstract getRecipeSlots(arg0: C, arg1: R): Internal.List<Internal.Slot>;
        abstract getMenuType(): Internal.Optional<Internal.MenuType<C>>;
        abstract canHandle(arg0: C, arg1: R): boolean;
        abstract getRecipeType(): mezz.jei.api.recipe.RecipeType<R>;
        getHandlingError(arg0: C, arg1: R): Internal.IRecipeTransferError;
        get containerClass(): C
        get menuType(): Internal.Optional<Internal.MenuType<C>>
        get recipeType(): mezz.jei.api.recipe.RecipeType<R>
    }
    type IRecipeTransferInfo_<C extends Internal.AbstractContainerMenu, R> = IRecipeTransferInfo<C, R>;
    class JackHammerItem$EnchantmentHandler extends Internal.BaseItemStackHandler {
        constructor(arg0: Internal.ItemStack_)
        setStackInSlot(arg0: number, arg1: Internal.ItemStack_): void;
        notify(): void;
        clear(ingredient: Internal.Ingredient_): void;
        "extractItem(int,int,boolean)"(i: number, i1: number, b: boolean): Internal.ItemStack;
        find(): number;
        getSlots(): number;
        setChanged(): void;
        "getSlots()"(): number;
        kjs$self(): Internal.IItemHandler;
        static validateBook(arg0: Internal.ItemStack_): boolean;
        "insertItem(int,net.minecraft.world.item.ItemStack,boolean)"(i: number, itemStack: Internal.ItemStack_, b: boolean): Internal.ItemStack;
        "getStackInSlot(int)"(arg0: number): Internal.ItemStack;
        "getSlotLimit(int)"(arg0: number): number;
        getWidth(): number;
        getSlotLimit(arg0: number): number;
        "setStackInSlot(int,net.minecraft.world.item.ItemStack)"(arg0: number, arg1: Internal.ItemStack_): void;
        wait(): void;
        isItemValid(arg0: number, arg1: Internal.ItemStack_): boolean;
        getClass(): typeof any;
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        isEmpty(): boolean;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        wait(arg0: number, arg1: number): void;
        extractItem(arg0: number, arg1: number, arg2: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        serializeNBT(): Internal.Tag;
        getStackInSlot(arg0: number): Internal.ItemStack;
        getHeight(): number;
        countNonEmpty(): number;
        asContainer(): net.minecraft.world.Container;
        deserializeNBT(arg0: Internal.Tag_): void;
        toString(): string;
        notifyAll(): void;
        getAllItems(): Internal.List<Internal.ItemStack>;
        save(): void;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        insertItem(arg0: number, arg1: Internal.ItemStack_, arg2: boolean): Internal.ItemStack;
        "isItemValid(int,net.minecraft.world.item.ItemStack)"(i: number, itemStack: Internal.ItemStack_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        isMutable(): boolean;
        clear(): void;
        wait(arg0: number): void;
        find(ingredient: Internal.Ingredient_): number;
        setSize(arg0: number): void;
        equals(arg0: any): boolean;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        get slots(): number
        get "slots()"(): number
        get width(): number
        get class(): typeof any
        get empty(): boolean
        get height(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get mutable(): boolean
        set size(arg0: number)
    }
    type JackHammerItem$EnchantmentHandler_ = JackHammerItem$EnchantmentHandler;
    interface CommentedConfig$Entry extends Internal.UnmodifiableCommentedConfig$Entry, Internal.Config$Entry {
        getChar(): string;
        getShortOrElse(arg0: number): number;
        abstract removeComment(): string;
        abstract setValue<T>(arg0: any): T;
        getByte(): number;
        abstract getComment(): string;
        abstract getKey(): string;
        abstract getRawValue<T>(): T;
        getIntOrElse(arg0: number): number;
        getLongOrElse(arg0: number): number;
        getOptionalLong(): Internal.OptionalLong;
        getLong(): number;
        abstract setComment(arg0: string): string;
        getByteOrElse(arg0: number): number;
        getShort(): number;
        getValue<T>(): T;
        isNull(): boolean;
        getOrElse<T>(arg0: T): T;
        getOptional<T>(): Internal.Optional<T>;
        getOptionalInt(): Internal.OptionalInt;
        getInt(): number;
        getCharOrElse(arg0: string): string;
        get "char"(): string
        set value(arg0: any)
        get "byte"(): number
        get comment(): string
        get key(): string
        get rawValue(): T
        get optionalLong(): Internal.OptionalLong
        get "long"(): number
        set comment(arg0: string)
        get "short"(): number
        get value(): T
        get "null"(): boolean
        get optional(): Internal.Optional<T>
        get optionalInt(): Internal.OptionalInt
        get "int"(): number
    }
    type CommentedConfig$Entry_ = CommentedConfig$Entry;
    class NetCableBlock extends Internal.GenericCableBlock {
        constructor(arg0: any_)
        handler$cag000$betterend$be_getDroppedStacks(state: Internal.BlockState_, builder: Internal.LootParams$Builder_, info: Internal.CallbackInfoReturnable_<any>): void;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        handler$cjp000$bclib$appendSurvivalBlock(itemStack: Internal.ItemStack_, blockGetter: Internal.BlockGetter_, list: Internal.List_<any>, tooltipFlag: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        isAdvancedConnector(): boolean;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        createCableSegment(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        calculateState(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.BlockState;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        unlinkBlock(arg0: Internal.Level_, arg1: BlockPos_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        getProbeDriver(): Internal.TOPDriver;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        lychee$setTickable(arg0: boolean): void;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get advancedConnector(): boolean
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        get probeDriver(): Internal.TOPDriver
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type NetCableBlock_ = NetCableBlock;
    interface IMekanismFluidHandler extends Internal.ISidedFluidHandler, Internal.IContentsListener {
        getFluidInTank(arg0: number): Internal.FluidStack;
        /**
         * @deprecated
        */
        drain(arg0: Internal.FluidStack_, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        isFluidValid(arg0: number, arg1: Internal.FluidStack_): boolean;
        "insertFluid(int,net.minecraftforge.fluids.FluidStack,mekanism.api.Action)"(arg0: number, arg1: Internal.FluidStack_, arg2: Internal.Action_): Internal.FluidStack;
        setFluidInTank(arg0: number, arg1: Internal.FluidStack_): void;
        /**
         * @deprecated
        */
        "drain(int,net.minecraftforge.fluids.capability.IFluidHandler$FluidAction)"(arg0: number, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        getFluidSideFor(): Internal.Direction;
        /**
         * @deprecated
        */
        drain(arg0: number, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        getFluidTank(arg0: number, arg1: Internal.Direction_): Internal.IExtendedFluidTank;
        "extractFluid(int,net.minecraft.core.Direction,mekanism.api.Action)"(arg0: number, arg1: Internal.Direction_, arg2: Internal.Action_): Internal.FluidStack;
        "extractFluid(int,mekanism.api.Action)"(arg0: number, arg1: Internal.Action_): Internal.FluidStack;
        "extractFluid(int,int,mekanism.api.Action)"(arg0: number, arg1: number, arg2: Internal.Action_): Internal.FluidStack;
        abstract getFluidTanks(arg0: Internal.Direction_): Internal.List<Internal.IExtendedFluidTank>;
        abstract onContentsChanged(): void;
        extractFluid(arg0: number, arg1: number, arg2: Internal.Action_): Internal.FluidStack;
        /**
         * @deprecated
        */
        "drain(net.minecraftforge.fluids.FluidStack,net.minecraftforge.fluids.capability.IFluidHandler$FluidAction)"(arg0: Internal.FluidStack_, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        getFluidInTank(arg0: number, arg1: Internal.Direction_): Internal.FluidStack;
        extractFluid(arg0: Internal.FluidStack_, arg1: Internal.Direction_, arg2: Internal.Action_): Internal.FluidStack;
        "insertFluid(net.minecraftforge.fluids.FluidStack,net.minecraft.core.Direction,mekanism.api.Action)"(arg0: Internal.FluidStack_, arg1: Internal.Direction_, arg2: Internal.Action_): Internal.FluidStack;
        insertFluid(arg0: Internal.FluidStack_, arg1: Internal.Direction_, arg2: Internal.Action_): Internal.FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: Internal.Direction_, arg3: Internal.Action_): Internal.FluidStack;
        extractFluid(arg0: Internal.FluidStack_, arg1: Internal.Action_): Internal.FluidStack;
        extractFluid(arg0: number, arg1: Internal.Direction_, arg2: Internal.Action_): Internal.FluidStack;
        insertFluid(arg0: number, arg1: Internal.FluidStack_, arg2: Internal.Action_): Internal.FluidStack;
        getTankCapacity(arg0: number): number;
        "extractFluid(net.minecraftforge.fluids.FluidStack,mekanism.api.Action)"(arg0: Internal.FluidStack_, arg1: Internal.Action_): Internal.FluidStack;
        /**
         * @deprecated
        */
        fill(arg0: Internal.FluidStack_, arg1: Internal.IFluidHandler$FluidAction_): number;
        extractFluid(arg0: number, arg1: Internal.Action_): Internal.FluidStack;
        insertFluid(arg0: Internal.FluidStack_, arg1: Internal.Action_): Internal.FluidStack;
        isFluidValid(arg0: number, arg1: Internal.FluidStack_, arg2: Internal.Direction_): boolean;
        getTanks(): number;
        getTankCapacity(arg0: number, arg1: Internal.Direction_): number;
        setFluidInTank(arg0: number, arg1: Internal.FluidStack_, arg2: Internal.Direction_): void;
        getTanks(arg0: Internal.Direction_): number;
        canHandleFluid(): boolean;
        "extractFluid(net.minecraftforge.fluids.FluidStack,net.minecraft.core.Direction,mekanism.api.Action)"(arg0: Internal.FluidStack_, arg1: Internal.Direction_, arg2: Internal.Action_): Internal.FluidStack;
        insertFluid(arg0: number, arg1: Internal.FluidStack_, arg2: Internal.Direction_, arg3: Internal.Action_): Internal.FluidStack;
        get fluidSideFor(): Internal.Direction
        get tanks(): number
    }
    type IMekanismFluidHandler_ = IMekanismFluidHandler;
    class SmallConnectorBlockEntity extends Internal.AbstractConnectorBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        "removeNode(com.mrh0.createaddition.energy.LocalNode,boolean)"(arg0: Internal.LocalNode_, arg1: boolean): void;
        dropWires(arg0: Internal.Level_, arg1: boolean): void;
        removeNode(arg0: Internal.LocalNode_, arg1: boolean): void;
        isNodeIndeciesConnected(arg0: number, arg1: number): boolean;
        requestModelDataUpdate(): void;
        containedFluidTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: boolean, arg2: Internal.LazyOptional_<Internal.IFluidHandler>): boolean;
        destroy(): void;
        write(arg0: Internal.CompoundTag_, arg1: boolean): void;
        static readNodeOtherIndex(arg0: Internal.CompoundTag_, arg1: number): number;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        readClient(arg0: Internal.CompoundTag_): void;
        isVirtual(): boolean;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        invalidateNodeCache(): void;
        getNodeType(arg0: number): Internal.WireType;
        remove(): void;
        getOtherNodeIndex(arg0: number): number;
        load(arg0: Internal.CompoundTag_): void;
        getConnectorType(): com.mrh0.createaddition.blocks.connector.ConnectorType;
        award(arg0: Internal.CreateAdvancement_): void;
        setChanged(): void;
        drawDebug(): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        isEnergyOutput(arg0: Internal.Direction_): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        getConnectionTo(arg0: BlockPos_): Internal.LocalNode;
        "getUpdatePacket()"(): Internal.Packet<any>;
        getMode(): Internal.ConnectorMode;
        packetTarget(): Internal.PacketDistributor$PacketTarget;
        setNode(arg0: number, arg1: number, arg2: BlockPos_, arg3: Internal.WireType_): void;
        setRemoved(): void;
        isEnergyInput(arg0: Internal.Direction_): boolean;
        removeNode(arg0: Internal.LocalNode_): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        static getWireNode(arg0: Internal.Level_, arg1: BlockPos_): Internal.IWireNode;
        writeSafe(arg0: Internal.CompoundTag_): void;
        getType(): Internal.BlockEntityType<any>;
        "removeNode(int,boolean)"(arg0: number, arg1: boolean): void;
        getAvailableNode(arg0: Vec3d_): number;
        handleWireCache(arg0: Internal.Level_, arg1: Internal.Set_<Internal.LocalNode>): void;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        writeClient(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getNodeOffset(arg0: number): Vec3d;
        "removeNode(com.mrh0.createaddition.energy.LocalNode)"(arg0: Internal.LocalNode_): void;
        "getUpdatePacket()"(): Internal.ClientboundBlockEntityDataPacket;
        refreshBlockState(): void;
        getRenderBoundingBox(): Internal.AABB;
        getClass(): typeof any;
        sendToMenu(arg0: Internal.FriendlyByteBuf_): void;
        setNetwork(arg0: number, arg1: com.mrh0.createaddition.energy.network.EnergyNetwork_): void;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        addBehaviours(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        static dropWire(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        getNetwork(arg0: number): com.mrh0.createaddition.energy.network.EnergyNetwork;
        fabric_hasPersistentAttachments(): boolean;
        clearRemoved(): void;
        isNodeInput(arg0: number): boolean;
        getUpdatePacket(): Internal.Packet<any>;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        setLazyTickRate(arg0: number): void;
        fabric_getAttachments(): Internal.Map<any, any>;
        awardIfNear(arg0: Internal.CreateAdvancement_, arg1: number): void;
        containedChunk(): Internal.LevelChunk;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        getWireNode(arg0: number): Internal.IWireNode;
        static disconnect(arg0: Internal.Level_, arg1: BlockPos_, arg2: BlockPos_): Internal.WireConnectResult;
        markVirtual(): void;
        triggerEvent(arg0: number, arg1: number): boolean;
        invalidateLocalNodes(): void;
        isNetworkValid(arg0: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        forEachBehaviour(arg0: Internal.Consumer_<Internal.BlockEntityBehaviour>): void;
        hasAnyConnection(): boolean;
        invalidate(): void;
        hasConnection(arg0: number): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        wait(arg0: number): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        disconnectWires(): void;
        reviveCaps(): void;
        sendData(): void;
        updateExternalEnergyStorage(): void;
        getBehaviour<T extends Internal.BlockEntityBehaviour>(arg0: Internal.BehaviourType_<T>): T;
        getMaxOut(): number;
        getAttached(type: Internal.AttachmentType_<any>): any;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        getUpdateTag(): Internal.CompoundTag;
        getRenderAttachmentData(): any;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setLevel(arg0: Internal.Level_): void;
        notify(): void;
        "removeNode(int)"(arg0: number): void;
        getMaxWireLength(): number;
        addBehavioursDeferred(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        getPos(): BlockPos;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        getNodeCount(): number;
        getLocalNode(arg0: number): Internal.LocalNode;
        onLoad(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        initialize(): void;
        invalidateCaps(): void;
        getMaxIn(): number;
        getBlockState(): Internal.BlockState;
        tick(): void;
        canPlayerUse(arg0: Internal.Player_): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        lazyTick(): void;
        convertOldNbt(arg0: Internal.CompoundTag_): void;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        static getWireNodeFrom(arg0: number, arg1: Internal.IWireNode_, arg2: Internal.LocalNode_[], arg3: Internal.IWireNode_[], arg4: Internal.Level_): Internal.IWireNode;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        dropWires(arg0: Internal.Level_, arg1: Internal.Player_, arg2: boolean): void;
        saveAdditional(arg0: Internal.CompoundTag_): void;
        static readNodeWireType(arg0: Internal.CompoundTag_, arg1: number): Internal.WireType;
        saveWithId(): Internal.CompoundTag;
        validateLocalNodes(arg0: Internal.LocalNode_[]): boolean;
        notifyUpdate(): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        static getTypeOfConnection(arg0: Internal.Level_, arg1: BlockPos_, arg2: BlockPos_): Internal.WireType;
        removeNode(arg0: number, arg1: boolean): void;
        getNodePos(arg0: number): BlockPos;
        wait(arg0: number, arg1: number): void;
        static getNbtNode(arg0: Internal.CompoundTag_, arg1: number): Internal.CompoundTag;
        dropWire(arg0: Internal.Level_, arg1: Internal.LocalNode_): void;
        isChunkUnloaded(): boolean;
        getLevel(): Internal.Level;
        getRequiredItems(arg0: Internal.BlockState_): Internal.ItemRequirement;
        static setChanged(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        onlyOpCanSetNbt(): boolean;
        ignoreCapSide(): boolean;
        read(arg0: Internal.CompoundTag_, arg1: boolean): void;
        serializeNBT(): Internal.Tag;
        static connect(arg0: Internal.Level_, arg1: BlockPos_, arg2: number, arg3: BlockPos_, arg4: number, arg5: Internal.WireType_): Internal.WireConnectResult;
        removeNode(arg0: number): void;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        isNodeOutput(arg0: number): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        blockHolderGetter(): Internal.HolderGetter<Internal.Block>;
        firstTick(): void;
        hasConnectionTo(arg0: BlockPos_): boolean;
        getAllBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>;
        onObserved(arg0: Internal.ServerPlayer_, arg1: com.mrh0.createaddition.network.ObservePacket_): void;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        static readNodeBlockPos(arg0: Internal.CompoundTag_, arg1: number, arg2: BlockPos_): BlockPos;
        registerAwardables(arg0: Internal.List_<Internal.BlockEntityBehaviour>, ...arg1: Internal.CreateAdvancement_[]): void;
        awakeNetwork(arg0: Internal.Level_): boolean;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getRenderData(): any;
        getModelData(): Internal.ModelData;
        addToGoggleTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: boolean): boolean;
        getCapacity(): number;
        equals(arg0: any): boolean;
        getAvailableNode(): number;
        get virtual(): boolean
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get connectorType(): com.mrh0.createaddition.blocks.connector.ConnectorType
        get "updatePacket()"(): Internal.Packet<any>
        get mode(): Internal.ConnectorMode
        get type(): Internal.BlockEntityType<any>
        get "updatePacket()"(): Internal.ClientboundBlockEntityDataPacket
        get renderBoundingBox(): Internal.AABB
        get class(): typeof any
        get updatePacket(): Internal.Packet<any>
        set lazyTickRate(arg0: number)
        get persistentData(): Internal.CompoundTag
        get maxOut(): number
        get updateTag(): Internal.CompoundTag
        get renderAttachmentData(): any
        set level(arg0: Internal.Level_)
        get maxWireLength(): number
        get pos(): BlockPos
        get blockPos(): BlockPos
        get removed(): boolean
        get nodeCount(): number
        get maxIn(): number
        get blockState(): Internal.BlockState
        get chunkUnloaded(): boolean
        get level(): Internal.Level
        get allBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get renderData(): any
        get modelData(): Internal.ModelData
        get capacity(): number
        get availableNode(): number
        static readonly OFFSET_NORTH: (Vec3d) & (Vec3d);
        static readonly OFFSET_SOUTH: (Vec3d) & (Vec3d);
        static readonly OFFSET_WEST: (Vec3d) & (Vec3d);
        static readonly OFFSET_DOWN: (Vec3d) & (Vec3d);
        static readonly OFFSET_UP: (Vec3d) & (Vec3d);
        static readonly OFFSET_EAST: (Vec3d) & (Vec3d);
    }
    type SmallConnectorBlockEntity_ = SmallConnectorBlockEntity;
    abstract class ItemScroll extends Internal.ModItem implements Internal.IScribeable {
        constructor()
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        modifyReturnValue$ecn000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        withTooltip(arg0: net.minecraft.network.chat.Component_): Internal.ModItem;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        abstract getSortPref(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.IItemHandler_): Internal.ItemScroll$SortPref;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        withTooltip(arg0: string): Internal.ModItem;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        modifyReturnValue$ecn000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        onScribe(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Player_, arg3: Internal.InteractionHand_, arg4: Internal.ItemStack_): boolean;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        withRarity(arg0: Internal.Rarity_): Internal.ModItem;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        "withTooltip(net.minecraft.network.chat.Component)"(arg0: net.minecraft.network.chat.Component_): Internal.ModItem;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$daa000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        "withTooltip(java.lang.String)"(arg0: string): Internal.ModItem;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type ItemScroll_ = ItemScroll;
    abstract class AreaDescriptor implements Internal.Iterator<BlockPos> {
        constructor()
        getClass(): typeof any;
        writeToNBT(arg0: Internal.CompoundTag_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        remove(): void;
        abstract isWithinArea(arg0: BlockPos_): boolean;
        abstract resetCache(): void;
        abstract getVolumeForOffsets(arg0: BlockPos_, arg1: BlockPos_): number;
        abstract getHeight(): number;
        abstract resetIterator(): void;
        abstract rotateDescriptor(arg0: Internal.StructurePlaceSettings_): this;
        getAABB(arg0: BlockPos_): Internal.AABB;
        readFromNBT(arg0: Internal.CompoundTag_): void;
        toString(): string;
        abstract modifyAreaByBlockPositions(arg0: BlockPos_, arg1: BlockPos_): void;
        notifyAll(): void;
        abstract copy(): this;
        forEachRemaining(arg0: Internal.Consumer_<BlockPos>): void;
        abstract isWithinRange(arg0: BlockPos_, arg1: BlockPos_, arg2: number, arg3: number): boolean;
        hashCode(): number;
        abstract intersects(arg0: Internal.AreaDescriptor_): boolean;
        abstract getVolume(): number;
        abstract isWithinRange(arg0: number, arg1: number): boolean;
        wait(): void;
        wait(arg0: number): void;
        abstract next(): BlockPos;
        getContainedPositions(arg0: BlockPos_): Internal.List<BlockPos>;
        abstract hasNext(): boolean;
        equals(arg0: any): boolean;
        abstract offset(arg0: BlockPos_): this;
        get class(): typeof any
        get height(): number
        get volume(): number
    }
    type AreaDescriptor_ = AreaDescriptor;
    class RegisterAdvancedEventJS extends Internal.JEIEventJS {
        constructor(data: Internal.IAdvancedRegistration_)
        getClass(): typeof any;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(): any;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(value: any): any;
        toString(): string;
        static removeCustomRecipeType(recipeType: ResourceLocation_): void;
        static getCustomRecipeType(recipeType: ResourceLocation_): mezz.jei.api.recipe.RecipeType<Internal.CustomJSRecipe>;
        notifyAll(): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(value: any): any;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(value: any): any;
        hashCode(): number;
        static clearCustomRecipeTypes(): void;
        wait(): void;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(): any;
        wait(arg0: number): void;
        static getOrCreateCustomRecipeType(recipeType: ResourceLocation_): mezz.jei.api.recipe.RecipeType<Internal.CustomJSRecipe>;
        categoryDecorator<T>(drawDecorator: Internal.CustomRecipeCategoryDecorator$DrawDecorator_<T>): Internal.CustomRecipeCategoryDecorator<T>;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(): any;
        equals(arg0: any): boolean;
        categoryDecorator<T>(drawDecorator: Internal.CustomRecipeCategoryDecorator$DrawDecorator_<T>, tooltipDecorator: Internal.CustomRecipeCategoryDecorator$TooltipDecorator_<T>): Internal.CustomRecipeCategoryDecorator<T>;
        get class(): typeof any
        readonly data: Internal.IAdvancedRegistration;
    }
    type RegisterAdvancedEventJS_ = RegisterAdvancedEventJS;
    class TropicalFish$Base extends Internal.Enum<Internal.TropicalFish$Base> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        static values(): Internal.TropicalFish$Base[];
        notifyAll(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.TropicalFish$Base>>;
        notify(): void;
        "compareTo(net.minecraft.world.entity.animal.TropicalFish$Base)"(arg0: Internal.TropicalFish$Base_): number;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        getDeclaringClass(): typeof Internal.TropicalFish$Base;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        compareTo(arg0: Internal.TropicalFish$Base_): number;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static valueOf(arg0: string): Internal.TropicalFish$Base;
        get class(): typeof any
        get declaringClass(): typeof Internal.TropicalFish$Base
        static readonly LARGE: (Internal.TropicalFish$Base) & (Internal.TropicalFish$Base);
        readonly id: number;
        static readonly SMALL: (Internal.TropicalFish$Base) & (Internal.TropicalFish$Base);
    }
    type TropicalFish$Base_ = "large" | "small" | TropicalFish$Base;
    class CreativeModeTab$ItemDisplayParameters extends Internal.Record {
        constructor(enabledFeatures: Internal.FeatureFlagSet_, hasPermissions: boolean, holders: Internal.HolderLookup$Provider_)
        getClass(): typeof any;
        needsUpdate(arg0: Internal.FeatureFlagSet_, arg1: boolean, arg2: Internal.HolderLookup$Provider_): boolean;
        holders(): Internal.HolderLookup$Provider;
        toString(): string;
        enabledFeatures(): Internal.FeatureFlagSet;
        hasPermissions(): boolean;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type CreativeModeTab$ItemDisplayParameters_ = CreativeModeTab$ItemDisplayParameters;
    interface FluidVariant extends Internal.TransferVariant<Internal.Fluid> {
        of(fluid: Internal.Fluid_, nbt: Internal.CompoundTag_): this;
        abstract getNbt(): Internal.CompoundTag;
        hasNbt(): boolean;
        abstract toNbt(): Internal.CompoundTag;
        abstract toPacket(arg0: Internal.FriendlyByteBuf_): void;
        of(fluid: Internal.Fluid_): this;
        copyOrCreateNbt(): Internal.CompoundTag;
        abstract isBlank(): boolean;
        isOf(object: Internal.Fluid_): boolean;
        fromPacket(buf: Internal.FriendlyByteBuf_): this;
        abstract getObject(): Internal.Fluid;
        nbtMatches(other: Internal.CompoundTag_): boolean;
        copyNbt(): Internal.CompoundTag;
        getFluid(): Internal.Fluid;
        fromNbt(nbt: Internal.CompoundTag_): this;
        blank(): this;
        get nbt(): Internal.CompoundTag
        get blank(): boolean
        get object(): Internal.Fluid
        get fluid(): Internal.Fluid
    }
    type FluidVariant_ = FluidVariant;
    class WandJob {
        constructor(arg0: Internal.Player_, arg1: Internal.Level_, arg2: Internal.BlockHitResult_, arg3: Internal.ItemStack_)
        getClass(): typeof any;
        doIt(): boolean;
        toString(): string;
        notifyAll(): void;
        getSnapshots(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getBlockPositions(): Internal.Set<BlockPos>;
        hashCode(): number;
        blockCount(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get snapshots(): void
        get blockPositions(): Internal.Set<BlockPos>
        readonly player: Internal.Player;
        readonly options: Internal.WandOptions;
        readonly rayTraceResult: Internal.BlockHitResult;
        readonly wand: Internal.ItemStack;
        readonly wandItem: Internal.ItemWand;
        readonly world: Internal.Level;
    }
    type WandJob_ = WandJob;
    class IdFunctionObject extends Internal.BaseFunction {
        constructor(idcall: Internal.IdFunctionCall_, tag: any, id: number, name: string, arity: number, scope: Internal.Scriptable_)
        constructor(idcall: Internal.IdFunctionCall_, tag: any, id: number, arity: number)
        preventExtensions(): void;
        static getFunctionPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        getTag(): any;
        static "hasProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        setImmunePrototypeProperty(value: any): void;
        static getArrayPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        static putProperty(obj: Internal.Scriptable_, key: Internal.Symbol_, value: any, cx: Internal.Context_): void;
        "get(dev.latvian.mods.rhino.Context,java.lang.String,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, name: string, start: Internal.Scriptable_): any;
        static putProperty(obj: Internal.Scriptable_, name: string, value: any, cx: Internal.Context_): void;
        static "putProperty(dev.latvian.mods.rhino.Scriptable,int,java.lang.Object,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, value: any, cx: Internal.Context_): void;
        abstract get(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_): any;
        abstract setParentScope(arg0: Internal.Scriptable_): void;
        "setAttributes(dev.latvian.mods.rhino.Context,int,int)"(cx: Internal.Context_, index: number, attributes: number): void;
        "put(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Scriptable,java.lang.Object)"(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_, value: any): void;
        getTypeOf(): Internal.MemberType;
        abstract getIds(arg0: Internal.Context_): any[];
        static deleteProperty(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        defineOwnProperties(cx: Internal.Context_, props: Internal.ScriptableObject_): void;
        static getTopScopeValue(scope: Internal.Scriptable_, key: any, cx: Internal.Context_): any;
        "delete(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol)"(cx: Internal.Context_, key: Internal.Symbol_): void;
        setAttributes(cx: Internal.Context_, name: string, attributes: number): void;
        unknown(): Internal.RuntimeException;
        associateValue(key: any, value: any): any;
        abstract getParentScope(): Internal.Scriptable;
        setAttributes(cx: Internal.Context_, key: Internal.Symbol_, attributes: number): void;
        static defineClass<T extends Internal.Scriptable>(scope: Internal.Scriptable_, clazz: T, cx: Internal.Context_): void;
        "delete(dev.latvian.mods.rhino.Context,java.lang.String)"(cx: Internal.Context_, name: string): void;
        getLength(): number;
        hasTag(tag: any): boolean;
        avoidObjectDetection(): boolean;
        static getClassPrototype(scope: Internal.Scriptable_, className: string, cx: Internal.Context_): Internal.Scriptable;
        put(cx: Internal.Context_, name: string, start: Internal.Scriptable_, value: any): void;
        static getProperty(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): any;
        getClass(): typeof any;
        static hasProperty(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        abstract "delete(dev.latvian.mods.rhino.Context,int)"(arg0: Internal.Context_, arg1: number): void;
        call(cx: Internal.Context_, scope: Internal.Scriptable_, thisObj: Internal.Scriptable_, args: any[]): any;
        hasInstance(cx: Internal.Context_, instance: Internal.Scriptable_): boolean;
        getExternalArrayData(): Internal.ExternalArrayData;
        abstract put(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_, arg3: any): void;
        static "getProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): any;
        "defineProperty(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,java.lang.Object,int)"(cx: Internal.Context_, key: Internal.Symbol_, value: any, attributes: number): void;
        "initPrototypeMethod(java.lang.Object,int,java.lang.String,java.lang.String,int,dev.latvian.mods.rhino.Context)"(tag: any, id: number, propertyName: string, functionName: string, arity: number, cx: Internal.Context_): this;
        static defineConstProperty(destination: Internal.Scriptable_, propertyName: string, cx: Internal.Context_): void;
        sealObject(cx: Internal.Context_): void;
        initPrototypeMethod(tag: any, id: number, name: string, arity: number, cx: Internal.Context_): this;
        abstract has(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_): boolean;
        createObject(cx: Internal.Context_, scope: Internal.Scriptable_): Internal.Scriptable;
        static deleteProperty(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        "initPrototypeValue(int,dev.latvian.mods.rhino.Symbol,java.lang.Object,int)"(id: number, key: Internal.Symbol_, value: any, attributes: number): void;
        "get(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): any;
        static defineProperty(destination: Internal.Scriptable_, propertyName: string, value: any, attributes: number, cx: Internal.Context_): void;
        getAttributes(cx: Internal.Context_, index: number): number;
        static "deleteProperty(dev.latvian.mods.rhino.Scriptable,int,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        getArity(): number;
        toString(): string;
        notifyAll(): void;
        "initPrototypeValue(int,java.lang.String,java.lang.Object,int)"(id: number, name: string, value: any, attributes: number): void;
        setGetterOrSetter(cx: Internal.Context_, name: string, index: number, getterOrSetter: dev.latvian.mods.rhino.Callable_, isSetter: boolean): void;
        initFunction(name: string, scope: Internal.Scriptable_): void;
        enumerationIteratorNext(cx: Internal.Context_, currentId: Internal.Consumer_<any>): boolean;
        static defineClass<T extends Internal.Scriptable>(scope: Internal.Scriptable_, clazz: T, sealed: boolean, mapInheritance: boolean, cx: Internal.Context_): string;
        has(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): boolean;
        static getProperty(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): any;
        size(): number;
        static "putProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,java.lang.Object,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, value: any, cx: Internal.Context_): void;
        execIdCall(f: Internal.IdFunctionObject_, cx: Internal.Context_, scope: Internal.Scriptable_, thisObj: Internal.Scriptable_, args: any[]): any;
        static getObjectPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        wait(arg0: number): void;
        construct(cx: Internal.Context_, scope: Internal.Scriptable_, args: any[]): Internal.Scriptable;
        initPrototypeValue(id: number, key: Internal.Symbol_, value: any, attributes: number): void;
        defineProperty(cx: Internal.Context_, propertyName: string, value: any, attributes: number): void;
        addAsProperty(target: Internal.Scriptable_, cx: Internal.Context_): void;
        initPrototypeValue(id: number, name: string, value: any, attributes: number): void;
        setAttributes(cx: Internal.Context_, index: number, attributes: number): void;
        putConst(cx: Internal.Context_, name: string, start: Internal.Scriptable_, value: any): void;
        static "getProperty(dev.latvian.mods.rhino.Scriptable,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): any;
        defineProperty(cx: Internal.Context_, propertyName: string, delegateTo: any, getter: Internal.WrappedExecutable_, setter: Internal.WrappedExecutable_, attributes: number): void;
        getClassName(): string;
        defineFunctionProperties(cx: Internal.Context_, names: string[], clazz: typeof any, attributes: number): void;
        "delete"(cx: Internal.Context_, name: string): void;
        static putProperty(obj: Internal.Scriptable_, index: number, value: any, cx: Internal.Context_): void;
        abstract "delete"(arg0: Internal.Context_, arg1: number): void;
        "initPrototypeMethod(java.lang.Object,int,dev.latvian.mods.rhino.Symbol,java.lang.String,int,dev.latvian.mods.rhino.Context)"(tag: any, id: number, key: Internal.Symbol_, functionName: string, arity: number, cx: Internal.Context_): this;
        static getGeneratorFunctionPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        "put(dev.latvian.mods.rhino.Context,java.lang.String,dev.latvian.mods.rhino.Scriptable,java.lang.Object)"(cx: Internal.Context_, name: string, start: Internal.Scriptable_, value: any): void;
        static defineClass<T extends Internal.Scriptable>(scope: Internal.Scriptable_, clazz: T, sealed: boolean, cx: Internal.Context_): void;
        notify(): void;
        methodId(): number;
        initPrototypeMethod(tag: any, id: number, propertyName: string, functionName: string, arity: number, cx: Internal.Context_): this;
        static putConstProperty(obj: Internal.Scriptable_, name: string, value: any, cx: Internal.Context_): void;
        hasPrototypeMap(): boolean;
        static redefineProperty(obj: Internal.Scriptable_, name: string, isConst: boolean, cx: Internal.Context_): void;
        exportAsScopeProperty(cx: Internal.Context_): void;
        static "putProperty(dev.latvian.mods.rhino.Scriptable,dev.latvian.mods.rhino.Symbol,java.lang.Object,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, key: Internal.Symbol_, value: any, cx: Internal.Context_): void;
        get(cx: Internal.Context_, key: any): any;
        getPrototype(cx: Internal.Context_): Internal.Scriptable;
        get(cx: Internal.Context_, name: string, start: Internal.Scriptable_): any;
        static getDefaultValue(object: Internal.Scriptable_, typeHint: typeof any, cx: Internal.Context_): any;
        abstract "put(dev.latvian.mods.rhino.Context,int,dev.latvian.mods.rhino.Scriptable,java.lang.Object)"(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_, arg3: any): void;
        enumerationIteratorHasNext(cx: Internal.Context_, currentId: Internal.Consumer_<any>): boolean;
        static "getProperty(dev.latvian.mods.rhino.Scriptable,int,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): any;
        abstract "has(dev.latvian.mods.rhino.Context,int,dev.latvian.mods.rhino.Scriptable)"(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_): boolean;
        isConst(name: string): boolean;
        getAttributes(cx: Internal.Context_, key: Internal.Symbol_): number;
        initPrototypeConstructor(f: Internal.IdFunctionObject_, cx: Internal.Context_): void;
        "getAttributes(dev.latvian.mods.rhino.Context,int)"(cx: Internal.Context_, index: number): number;
        static "deleteProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        isExtensible(): boolean;
        wait(): void;
        abstract setPrototype(arg0: Internal.Scriptable_): void;
        markAsConstructor(prototypeProperty: Internal.Scriptable_): void;
        getGetterOrSetter(name: string, index: number, isSetter: boolean): any;
        getAttributes(cx: Internal.Context_, name: string): number;
        activatePrototypeMap(maxPrototypeId: number): void;
        defineProperty(cx: Internal.Context_, key: Internal.Symbol_, value: any, attributes: number): void;
        static getPropertyIds(cx: Internal.Context_, obj: Internal.Scriptable_): any[];
        getAssociatedValue(key: any): any;
        "defineProperty(dev.latvian.mods.rhino.Context,java.lang.String,java.lang.Object,int)"(cx: Internal.Context_, propertyName: string, value: any, attributes: number): void;
        "delete"(cx: Internal.Context_, key: Internal.Symbol_): void;
        initPrototypeMethod(tag: any, id: number, key: Internal.Symbol_, functionName: string, arity: number, cx: Internal.Context_): this;
        static "hasProperty(dev.latvian.mods.rhino.Scriptable,int,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        static getProperty(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): any;
        "has(dev.latvian.mods.rhino.Context,java.lang.String,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, name: string, start: Internal.Scriptable_): boolean;
        isEmpty(): boolean;
        wait(arg0: number, arg1: number): void;
        has(cx: Internal.Context_, name: string, start: Internal.Scriptable_): boolean;
        defineConst(cx: Internal.Context_, name: string, start: Internal.Scriptable_): void;
        "defineProperty(dev.latvian.mods.rhino.Context,java.lang.String,java.lang.Class,int)"(cx: Internal.Context_, propertyName: string, clazz: typeof any, attributes: number): void;
        defineOwnProperty(cx: Internal.Context_, key: any, desc: Internal.ScriptableObject_): void;
        getFunctionName(): string;
        abstract getDefaultValue(arg0: Internal.Context_, arg1: typeof any): any;
        setExternalArrayData(cx: Internal.Context_, array: Internal.ExternalArrayData_): void;
        "getAttributes(dev.latvian.mods.rhino.Context,java.lang.String)"(cx: Internal.Context_, name: string): number;
        get(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): any;
        static hasProperty(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): boolean;
        "setAttributes(dev.latvian.mods.rhino.Context,java.lang.String,int)"(cx: Internal.Context_, name: string, attributes: number): void;
        isSealed(cx: Internal.Context_): boolean;
        getAllIds(cx: Internal.Context_): any[];
        "has(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): boolean;
        defineProperty(cx: Internal.Context_, propertyName: string, clazz: typeof any, attributes: number): void;
        static hasProperty(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        exportAsJSClass(maxPrototypeId: number, scope: Internal.Scriptable_, sealed: boolean, cx: Internal.Context_): this;
        abstract "get(dev.latvian.mods.rhino.Context,int,dev.latvian.mods.rhino.Scriptable)"(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_): any;
        "setAttributes(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,int)"(cx: Internal.Context_, key: Internal.Symbol_, attributes: number): void;
        static "hasProperty(dev.latvian.mods.rhino.Scriptable,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): boolean;
        hashCode(): number;
        getExternalArrayLength(): any;
        "getAttributes(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol)"(cx: Internal.Context_, key: Internal.Symbol_): number;
        static getTopLevelScope(obj: Internal.Scriptable_): Internal.Scriptable;
        put(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_, value: any): void;
        equals(arg0: any): boolean;
        get tag(): any
        set immunePrototypeProperty(value: any)
        set parentScope(arg0: Internal.Scriptable_)
        get typeOf(): Internal.MemberType
        get parentScope(): Internal.Scriptable
        get length(): number
        get class(): typeof any
        get externalArrayData(): Internal.ExternalArrayData
        get arity(): number
        get className(): string
        get extensible(): boolean
        set prototype(arg0: Internal.Scriptable_)
        get empty(): boolean
        get functionName(): string
        get externalArrayLength(): any
    }
    type IdFunctionObject_ = IdFunctionObject;
    class RitualBrazierBlock extends Internal.TickableModBlock {
        constructor()
        handler$cag000$betterend$be_getDroppedStacks(state: Internal.BlockState_, builder: Internal.LootParams$Builder_, info: Internal.CallbackInfoReturnable_<any>): void;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static createTickerHelper<E extends Internal.BlockEntity, A extends Internal.BlockEntity>(arg0: Internal.BlockEntityType_<A>, arg1: Internal.BlockEntityType_<E>, arg2: Internal.BlockEntityTicker_<E>): Internal.BlockEntityTicker<A>;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        handler$cjp000$bclib$appendSurvivalBlock(itemStack: Internal.ItemStack_, blockGetter: Internal.BlockGetter_, list: Internal.List_<any>, tooltipFlag: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        static defaultProperties(): Internal.BlockBehaviour$Properties;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        lychee$setTickable(arg0: boolean): void;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static shape: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly LIT: (Internal.BooleanProperty) & (Internal.Property<boolean>);
    }
    type RitualBrazierBlock_ = RitualBrazierBlock;
    class ChunkDataEvent$Save extends Internal.ChunkDataEvent {
        constructor()
        constructor(arg0: Internal.ChunkAccess_, arg1: Internal.LevelAccessor_, arg2: Internal.CompoundTag_)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        getChunk(): Internal.ChunkAccess;
        setPhase(arg0: Internal.EventPriority_): void;
        architectury$getAttachedLevel(): Internal.LevelAccessor;
        notifyAll(): void;
        isCanceled(): boolean;
        getData(): Internal.CompoundTag;
        architectury$attachLevel(level: Internal.LevelAccessor_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        getLevel(): Internal.LevelAccessor;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        get chunk(): Internal.ChunkAccess
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        get data(): Internal.CompoundTag
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get level(): Internal.LevelAccessor
    }
    type ChunkDataEvent$Save_ = ChunkDataEvent$Save;
    class StructureLayoutPiece {
        constructor(arg0: any_, arg1: Internal.List_<Internal.StructurePieceModifier>, arg2: Internal.GuiStructureLayoutPiece_, arg3: string, arg4: Internal.JsonObject_)
        getClass(): typeof any;
        toString(): string;
        getModifiers(): Internal.List<Internal.StructurePieceModifier>;
        notifyAll(): void;
        setup(arg0: ResourceLocation_): void;
        validate(arg0: Internal.StructureModel_): void;
        debugFormed(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.StructureModel_, arg3: Internal.Rotation_): Internal.JsonObject;
        notify(): void;
        formed(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.StructureModel_, arg3: Internal.Rotation_): boolean;
        wait(arg0: number, arg1: number): void;
        static parse(arg0: Internal.JsonObject_, arg1: ResourceLocation_, arg2: string): Internal.StructureLayoutPiece;
        hashCode(): number;
        wait(): void;
        getJson(): Internal.JsonObject;
        wait(arg0: number): void;
        getValueId(): string;
        equals(arg0: any): boolean;
        getGuiPiece(): Internal.GuiStructureLayoutPiece;
        get class(): typeof any
        get modifiers(): Internal.List<Internal.StructurePieceModifier>
        set up(arg0: ResourceLocation_)
        get json(): Internal.JsonObject
        get valueId(): string
        get guiPiece(): Internal.GuiStructureLayoutPiece
    }
    type StructureLayoutPiece_ = StructureLayoutPiece;
    class LogisticsFrameDefaultStorageItem extends Internal.AbstractLogisticsFrameItem {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        createEntity(arg0: Internal.Level_, arg1: Internal.ItemStack_, arg2: Internal.Player_, arg3: BlockPos_): Internal.AbstractSemiblockEntity;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isFireResistant(): boolean;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        static addLogisticsTooltip(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: boolean): Internal.List<net.minecraft.network.chat.Component>;
        modifyReturnValue$ecn000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        modifyReturnValue$ecn000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        handler$daa000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type LogisticsFrameDefaultStorageItem_ = LogisticsFrameDefaultStorageItem;
    class ItemLavaCrystal extends Internal.ItemBindableBase {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        modifyReturnValue$ecn000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getBurnTime(arg0: Internal.ItemStack_): number;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        modifyReturnValue$ecn000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        onBind(arg0: Internal.Player_, arg1: Internal.ItemStack_): boolean;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        getBinding(arg0: Internal.ItemStack_): Internal.Binding;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        handler$daa000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type ItemLavaCrystal_ = ItemLavaCrystal;
    class CreateAdvancement implements Internal.CreateAdvancementConstructor, Internal.CreateAdvancementAccess {
        constructor(arg0: string, arg1: Internal.UnaryOperator_<any>)
        fromAdvancementHolder(arg0: Internal.AdvancementHolder_): void;
        getClass(): typeof any;
        static createInstance$create_dragon_lib_$md$9765b0$0(arg0: string, arg1: Internal.UnaryOperator_<any>): Internal.CreateAdvancement;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        awardTo(arg0: Internal.Player_): void;
        static createInstance(arg0: string, arg1: Internal.UnaryOperator_<any>): Internal.CreateAdvancement;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        isAlreadyAwardedTo(arg0: Internal.Player_): boolean;
        get class(): typeof any
    }
    type CreateAdvancement_ = CreateAdvancement;
    class SatchelItem extends Internal.InventoryContainerItemAugmentable implements Internal.IFilterableItem, Internal.IMultiModeItem, Internal.DyeableLeatherItem, Internal.ISecurableItem, Internal.MenuProvider, Internal.IColorableItem {
        constructor(arg0: Internal.Item$Properties_, arg1: number)
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getDrinkingSound(): Internal.SoundEvent;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        abstract setModId(arg0: string): Internal.ICoFHItem;
        static onItemPickup(arg0: Internal.EntityItemPickupEvent_, arg1: Internal.ItemStack_): boolean;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        asItem(): Internal.Item;
        hasCustomColor(arg0: Internal.ItemStack_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        onContainerInventoryChanged(arg0: Internal.ItemStack_): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        getOrCreateInvTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        getStackInSlot(arg0: Internal.ItemStack_, arg1: number): Internal.ItemStack;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        getScaledItemsStored(arg0: Internal.ItemStack_, arg1: number, arg2: number): number;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        setMode(arg0: Internal.ItemStack_, arg1: number): boolean;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        modifyReturnValue$ecn000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        addModeChangeTooltip(arg0: Internal.IMultiModeItem_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: Internal.List_<net.minecraft.network.chat.Component>, arg4: Internal.TooltipFlag_): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        setAugments(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.ItemStack>): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        createMenu(arg0: number, arg1: Internal.Inventory_, arg2: Internal.Player_): Internal.AbstractContainerMenu;
        getMode(arg0: Internal.ItemStack_): number;
        getFilter(arg0: Internal.ItemStack_): Internal.IFilter;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getColor(arg0: Internal.ItemStack_, arg1: number): number;
        incrMode(arg0: Internal.ItemStack_): boolean;
        getNumModes(arg0: Internal.ItemStack_): number;
        "setBurnTime(int)"(arg0: number): Internal.ItemCoFH;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getItemAmount(arg0: Internal.ItemStack_, arg1: number): number;
        getAugmentSlots(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getSpace(arg0: Internal.ItemStack_, arg1: number): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        insertItem(arg0: Internal.ItemStack_, arg1: number, arg2: Internal.ItemStack_, arg3: boolean): Internal.ItemStack;
        onModeChange(arg0: Internal.Player_, arg1: Internal.ItemStack_): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isActive(arg0: Internal.ItemStack_): boolean;
        openFilterGui(arg0: Internal.ServerPlayer_, arg1: Internal.ItemStack_): boolean;
        getContainerSlots(arg0: Internal.ItemStack_): number;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        setColor(arg0: Internal.ItemStack_, arg1: number): void;
        canPlayerAccess(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        isItemValid(arg0: Internal.ItemStack_, arg1: number, arg2: Internal.ItemStack_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getColor(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        setNameKey(arg0: string): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        static dropExtraItems(arg0: Internal.ItemStack_, arg1: Internal.Player_): void;
        getOrCreateModeTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        addIncrementModeChangeTooltip(arg0: Internal.IMultiModeItem_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: Internal.List_<net.minecraft.network.chat.Component>, arg4: Internal.TooltipFlag_): void;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        openGui(arg0: Internal.ServerPlayer_, arg1: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        "setActive(net.minecraft.world.item.ItemStack,boolean)"(arg0: Internal.ItemStack_, arg1: boolean): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        addEnergyTooltip(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_, arg4: number, arg5: number, arg6: boolean): void;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        clearColor(arg0: Internal.ItemStack_): void;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        validAugment(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.List_<Internal.ItemStack>): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getSlotLimit(arg0: Internal.ItemStack_, arg1: number): number;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        modifyReturnValue$ecn000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        setActive(arg0: Internal.ItemStack_, arg1: boolean): void;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        getDisplayName(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        onFilterChanged(arg0: Internal.ItemStack_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        shouldCloseCurrentScreen(): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        "setActive(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.LivingEntity)"(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        extractItem(arg0: Internal.ItemStack_, arg1: number, arg2: number, arg3: boolean): Internal.ItemStack;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        hasGui(arg0: Internal.ItemStack_): boolean;
        updateAugmentState(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.ItemStack>): void;
        abstract isRepairable(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        getContainerInventory(arg0: Internal.ItemStack_): Internal.SimpleItemInv;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        getAugments(arg0: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        setAugValidator(arg0: Internal.BiPredicate_<Internal.ItemStack, Internal.List<Internal.ItemStack>>): Internal.InventoryContainerItemAugmentable;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        hasActiveTag(arg0: Internal.ItemStack_): boolean;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        static dyeArmor(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.DyeItem>): Internal.ItemStack;
        "setBurnTime(int)"(i: number): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        static setBannedItems(arg0: Internal.Collection_<string>): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        setEnchantability(arg0: number): Internal.ItemCoFH;
        wait(arg0: number, arg1: number): void;
        setNumSlots(arg0: Internal.IntSupplier_): Internal.InventoryContainerItemAugmentable;
        setActive(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        handler$daa000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        decrMode(arg0: Internal.ItemStack_): boolean;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        setBurnTime(arg0: number): Internal.ItemCoFH;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        set modId(arg0: string)
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set "burnTime(int)"(arg0: number)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get displayName(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set augValidator(arg0: Internal.BiPredicate_<Internal.ItemStack, Internal.List<Internal.ItemStack>>)
        set "burnTime(int)"(i: number)
        set bannedItems(arg0: Internal.Collection_<string>)
        get eatingSound(): Internal.SoundEvent
        set enchantability(arg0: number)
        set numSlots(arg0: Internal.IntSupplier_)
        get mod(): string
        set armorProtection(armorProtection: number)
        set burnTime(arg0: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type SatchelItem_ = SatchelItem;
    class FilterItem extends Internal.Item implements Internal.MenuProvider {
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        static regular(arg0: Internal.Item$Properties_): Internal.FilterItem;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        modifyReturnValue$ecn000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        createMenu(arg0: number, arg1: Internal.Inventory_, arg2: Internal.Player_): Internal.AbstractContainerMenu;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        static getFilterItems(arg0: Internal.ItemStack_): Internal.ItemStackHandler;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        modifyReturnValue$ecn000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        getDisplayName(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        shouldCloseCurrentScreen(): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        static testDirect(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$daa000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        static attribute(arg0: Internal.Item$Properties_): Internal.FilterItem;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get displayName(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type FilterItem_ = FilterItem;
    class ChainBuffer {
        constructor()
        applyChainWaveBuffer(...arg0: any_[]): void;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        calculateChainWaveBuffer(arg0: number, arg1: number, arg2: number, arg3: Internal.LivingEntity_): void;
        hashCode(): number;
        calculateChainSwingBuffer(arg0: number, arg1: number, arg2: number, arg3: Internal.LivingEntity_): void;
        wait(): void;
        wait(arg0: number): void;
        resetRotations(): void;
        equals(arg0: any): boolean;
        applyChainSwingBuffer(...arg0: any_[]): void;
        calculateChainWaveBuffer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.LivingEntity_): void;
        calculateChainSwingBuffer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.LivingEntity_): void;
        get class(): typeof any
    }
    type ChainBuffer_ = ChainBuffer;
    class DriveBlock extends Internal.AEBaseEntityBlock<Internal.DriveBlockEntity> {
        constructor()
        handler$cag000$betterend$be_getDroppedStacks(state: Internal.BlockState_, builder: Internal.LootParams$Builder_, info: Internal.CallbackInfoReturnable_<any>): void;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.DriveBlockEntity;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        addToMainCreativeTab(arg0: Internal.CreativeModeTab$Output_): void;
        static fixtureProps(): Internal.BlockBehaviour$Properties;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getOrientation(arg0: Internal.BlockState_): Internal.BlockOrientation;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getOrientationStrategy(): Internal.IOrientationStrategy;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        handler$cjp000$bclib$appendSurvivalBlock(itemStack: Internal.ItemStack_, blockGetter: Internal.BlockGetter_, list: Internal.List_<any>, tooltipFlag: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        getBlockEntityBlockState(arg0: Internal.BlockState_, arg1: Internal.BlockEntity_): Internal.BlockState;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        onActivated(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Player_, arg3: Internal.InteractionHand_, arg4: Internal.ItemStack_, arg5: Internal.BlockHitResult_): InteractionResult;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getBlockEntityType(): Internal.BlockEntityType<Internal.DriveBlockEntity>;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        static metalProps(): Internal.BlockBehaviour$Properties;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: number, arg2: number, arg3: number): Internal.DriveBlockEntity;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        setBlockEntity(arg0: typeof Internal.DriveBlockEntity, arg1: Internal.BlockEntityType_<Internal.DriveBlockEntity>, arg2: Internal.BlockEntityTicker_<Internal.DriveBlockEntity>, arg3: Internal.BlockEntityTicker_<Internal.DriveBlockEntity>): void;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        static defaultProps(arg0: Internal.MapColor_, arg1: SoundType_): Internal.BlockBehaviour$Properties;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        static stoneProps(): Internal.BlockBehaviour$Properties;
        static glassProps(): Internal.BlockBehaviour$Properties;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        lychee$setTickable(arg0: boolean): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        getRegistryName(): ResourceLocation;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get orientationStrategy(): Internal.IOrientationStrategy
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockEntityType(): Internal.BlockEntityType<Internal.DriveBlockEntity>
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        get registryName(): ResourceLocation
        set hasCollision(arg0: boolean)
    }
    type DriveBlock_ = DriveBlock;
    class BonusChestFeature extends Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
        getClass(): typeof any;
        static isStone(arg0: Internal.BlockState_): boolean;
        safeSetBlock(arg0: Internal.WorldGenLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Predicate_<Internal.BlockState>): void;
        toString(): string;
        setBlock(arg0: Internal.LevelWriter_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        place(arg0: Internal.NoneFeatureConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        place(arg0: Internal.FeaturePlaceContext_<Internal.NoneFeatureConfiguration>): boolean;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        markAboveForPostProcessing(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.NoneFeatureConfiguration, Feature<Internal.NoneFeatureConfiguration>>>;
        get class(): typeof any
    }
    type BonusChestFeature_ = BonusChestFeature;
    class LogisticsConfiguratorItem extends Internal.PressurizableItem {
        constructor()
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getDrinkingSound(): Internal.SoundEvent;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        modifyReturnValue$ecn000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getPressure(arg0: Internal.ItemStack_): number;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getAir(arg0: Internal.ItemStack_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getMaxPressure(): number;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        modifyReturnValue$ecn000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getEffectiveVolume(arg0: Internal.ItemStack_): number;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        getBaseVolume(): number;
        static roundedPressure(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        getVolumeUpgrades(arg0: Internal.ItemStack_): number;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$daa000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get maxPressure(): number
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        get baseVolume(): number
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type LogisticsConfiguratorItem_ = LogisticsConfiguratorItem;
    class StructurePlacement$FrequencyReductionMethod extends Internal.Enum<Internal.StructurePlacement$FrequencyReductionMethod> implements Internal.StringRepresentable {
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        getSerializedName(): string;
        getDeclaringClass(): typeof Internal.StructurePlacement$FrequencyReductionMethod;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static values(): Internal.StructurePlacement$FrequencyReductionMethod[];
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.StructurePlacement$FrequencyReductionMethod>>;
        shouldGenerate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        static valueOf(arg0: string): Internal.StructurePlacement$FrequencyReductionMethod;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        toString(): string;
        notifyAll(): void;
        name(): string;
        hashCode(): number;
        compareTo(arg0: Internal.StructurePlacement$FrequencyReductionMethod_): number;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        ordinal(): number;
        wait(): void;
        "compareTo(net.minecraft.world.level.levelgen.structure.placement.StructurePlacement$FrequencyReductionMethod)"(arg0: Internal.StructurePlacement$FrequencyReductionMethod_): number;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.StructurePlacement$FrequencyReductionMethod
        static readonly DEFAULT: (Internal.StructurePlacement$FrequencyReductionMethod) & (Internal.StructurePlacement$FrequencyReductionMethod);
        static readonly LEGACY_TYPE_3: (Internal.StructurePlacement$FrequencyReductionMethod) & (Internal.StructurePlacement$FrequencyReductionMethod);
        static readonly LEGACY_TYPE_2: (Internal.StructurePlacement$FrequencyReductionMethod) & (Internal.StructurePlacement$FrequencyReductionMethod);
        static readonly LEGACY_TYPE_1: (Internal.StructurePlacement$FrequencyReductionMethod) & (Internal.StructurePlacement$FrequencyReductionMethod);
        static readonly CODEC: Internal.Codec<Internal.StructurePlacement$FrequencyReductionMethod>;
    }
    type StructurePlacement$FrequencyReductionMethod_ = StructurePlacement$FrequencyReductionMethod | "legacy_type_2" | "legacy_type_3" | "default" | "legacy_type_1";
    class PonderScene$SceneTransform {
        constructor(arg0: Internal.PonderScene_)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        tick(): void;
        updateSceneRVE(arg0: number): void;
        hashCode(): number;
        wait(): void;
        screenToScene(arg0: number, arg1: number, arg2: number, arg3: number): Vec3d;
        wait(arg0: number): void;
        apply(arg0: Internal.PoseStack_): Internal.PoseStack;
        sceneToScreen(arg0: Vec3d_, arg1: number): Internal.Vec2;
        apply(arg0: Internal.PoseStack_, arg1: number): Internal.PoseStack;
        updateScreenParams(arg0: number, arg1: number, arg2: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        yRotation: Internal.LerpedFloat;
        xRotation: Internal.LerpedFloat;
    }
    type PonderScene$SceneTransform_ = PonderScene$SceneTransform;
    interface Char2IntFunction extends Internal.IntUnaryOperator, it.unimi.dsi.fastutil.Function<string, number> {
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, string>): Internal.Function<T, number>;
        defaultReturnValue(): number;
        andThenChar(arg0: Internal.Int2CharFunction_): Internal.Char2CharFunction;
        remove(arg0: string): number;
        "compose(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        containsKey(arg0: string): boolean;
        andThenObject<T>(arg0: Internal.Int2ObjectFunction_<T>): Internal.Char2ObjectFunction<T>;
        andThenLong(arg0: Internal.Int2LongFunction_): Internal.Char2LongFunction;
        compose(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        composeChar(arg0: Internal.Char2CharFunction_): this;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Integer)"(arg0: any, arg1: number): number;
        andThenFloat(arg0: Internal.Int2FloatFunction_): Internal.Char2FloatFunction;
        "remove(char)"(arg0: string): number;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<string, T>;
        composeLong(arg0: Internal.Long2CharFunction_): Internal.Long2IntFunction;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        "compose(java.util.function.Function)"<T>(arg0: Internal.Function_<T, string>): Internal.Function<T, number>;
        "containsKey(char)"(arg0: string): boolean;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        composeShort(arg0: Internal.Short2CharFunction_): Internal.Short2IntFunction;
        composeByte(arg0: Internal.Byte2CharFunction_): Internal.Byte2IntFunction;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        put(arg0: string, arg1: number): number;
        "andThen(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        put(arg0: string, arg1: number): number;
        /**
         * @deprecated
        */
        "andThen(java.util.function.Function)"<T>(arg0: Internal.Function_<number, T>): Internal.Function<string, T>;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        getOrDefault(arg0: string, arg1: number): number;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        "getOrDefault(char,int)"(arg0: string, arg1: number): number;
        composeReference<T>(arg0: Internal.Reference2CharFunction_<T>): Internal.Reference2IntFunction<T>;
        identity(): Internal.IntUnaryOperator;
        andThenReference<T>(arg0: Internal.Int2ReferenceFunction_<T>): Internal.Char2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        andThenInt(arg0: Internal.Int2IntFunction_): this;
        composeInt(arg0: Internal.Int2CharFunction_): Internal.Int2IntFunction;
        andThenShort(arg0: Internal.Int2ShortFunction_): Internal.Char2ShortFunction;
        apply(arg0: string): number;
        /**
         * @deprecated
        */
        "put(java.lang.Character,java.lang.Integer)"(arg0: string, arg1: number): number;
        composeDouble(arg0: Internal.Double2CharFunction_): Internal.Double2IntFunction;
        andThenDouble(arg0: Internal.Int2DoubleFunction_): Internal.Char2DoubleFunction;
        "put(char,int)"(arg0: string, arg1: number): number;
        abstract get(arg0: string): number;
        size(): number;
        defaultReturnValue(arg0: number): void;
        clear(): void;
        andThenByte(arg0: Internal.Int2ByteFunction_): Internal.Char2ByteFunction;
        composeObject<T>(arg0: Internal.Object2CharFunction_<T>): Internal.Object2IntFunction<T>;
        abstract "get(char)"(arg0: string): number;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): number;
        composeFloat(arg0: Internal.Float2CharFunction_): Internal.Float2IntFunction;
    }
    type Char2IntFunction_ = Char2IntFunction;
    class RedstoneManager <T extends Internal.IEnumValues<T> & Internal.IRedstoneAction> implements Internal.INBTSerializable<Internal.CompoundTag> {
        constructor(arg0: T, arg1: boolean)
        getClass(): typeof any;
        deserializeNBT(arg0: Internal.Tag_): void;
        toString(): string;
        notifyAll(): void;
        setAction(arg0: T): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        shouldWork(): boolean;
        notify(): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        getLastRedstoneState(): boolean;
        wait(arg0: number, arg1: number): void;
        serializeNBT(): Internal.CompoundTag;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        finish(): void;
        wait(): void;
        wait(arg0: number): void;
        setLastRedstoneState(arg0: boolean): void;
        equals(arg0: any): boolean;
        getAction(): T;
        get class(): typeof any
        set action(arg0: T)
        get lastRedstoneState(): boolean
        set lastRedstoneState(arg0: boolean)
        get action(): T
    }
    type RedstoneManager_<T extends Internal.IEnumValues<T> & Internal.IRedstoneAction> = RedstoneManager<T>;
    abstract class CoralFeature extends Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
        getClass(): typeof any;
        static isStone(arg0: Internal.BlockState_): boolean;
        safeSetBlock(arg0: Internal.WorldGenLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Predicate_<Internal.BlockState>): void;
        toString(): string;
        placeCoralBlock(arg0: Internal.LevelAccessor_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        setBlock(arg0: Internal.LevelWriter_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        place(arg0: Internal.NoneFeatureConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        place(arg0: Internal.FeaturePlaceContext_<Internal.NoneFeatureConfiguration>): boolean;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        markAboveForPostProcessing(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        abstract placeFeature(arg0: Internal.LevelAccessor_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.NoneFeatureConfiguration, Feature<Internal.NoneFeatureConfiguration>>>;
        get class(): typeof any
    }
    type CoralFeature_ = CoralFeature;
    interface IMekanismConfig {
        abstract getFileName(): string;
        abstract clearCache(unloading: boolean): void;
        abstract getConfigSpec(): Internal.ForgeConfigSpec;
        abstract addCachedValue(configValue: Internal.CachedValue_<any>): void;
        isLoaded(): boolean;
        abstract getConfigType(): Internal.ModConfig$Type;
        save(): void;
        addToContainer(): boolean;
        get fileName(): string
        get configSpec(): Internal.ForgeConfigSpec
        get loaded(): boolean
        get configType(): Internal.ModConfig$Type
    }
    type IMekanismConfig_ = IMekanismConfig;
    abstract class FlowingFluid extends Internal.Fluid {
        constructor()
        getStateDefinition(): Internal.StateDefinition<Internal.Fluid, Internal.FluidState>;
        getFlow(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): Vec3d;
        abstract isSource(arg0: Internal.FluidState_): boolean;
        getOwnHeight(arg0: Internal.FluidState_): number;
        notify(): void;
        getSlopeDistance(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: number, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_, arg6: Internal.Short2ObjectMap_<Internal.Pair<Internal.BlockState, Internal.FluidState>>, arg7: Internal.Short2BooleanMap_): number;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        getShape(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        defaultFluidState(): Internal.FluidState;
        abstract beforeDestroyingBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getSpread(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.Map<Internal.Direction, Internal.FluidState>;
        arch$holder(): Internal.Holder<Internal.Fluid>;
        /**
         * @deprecated
        */
        abstract canConvertToSource(arg0: Internal.Level_): boolean;
        isRandomlyTicking(): boolean;
        getDripParticle(): Internal.ParticleOptions;
        getSource(arg0: boolean): Internal.FluidState;
        abstract getSlopeFindDistance(arg0: Internal.LevelReader_): number;
        getExplosionResistance(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        abstract getExplosionResistance(): number;
        abstract getBucket(): Internal.Item;
        isSame(arg0: Internal.Fluid_): boolean;
        animateTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_, arg3: Internal.RandomSource_): void;
        getAdjacentBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        wait(): void;
        getFlowing(arg0: number, arg1: boolean): Internal.FluidState;
        isSolidFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        getNewLiquid(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.FluidState;
        spreadTo(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_, arg4: Internal.FluidState_): void;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        /**
         * @deprecated
        */
        is(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        getClass(): typeof any;
        tick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_): void;
        getHeight(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        handler$dkn000$alexscaves$ac_canHoldFluid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_, arg4: Internal.CallbackInfoReturnable_<any>): void;
        abstract canBeReplacedWith(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Fluid_, arg4: Internal.Direction_): boolean;
        fabric_getCachedFluidVariant(): Internal.FluidVariant;
        isEmpty(): boolean;
        getFluidType(): Internal.FluidType;
        wait(arg0: number, arg1: number): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Fluid>;
        abstract getTickDelay(arg0: Internal.LevelReader_): number;
        getSpreadDelay(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_, arg3: Internal.FluidState_): number;
        canConvertToSource(arg0: Internal.FluidState_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
        arch$registryName(): ResourceLocation;
        registerDefaultState(arg0: Internal.FluidState_): void;
        handler$dfg000$fabric_transfer_api_v1$hookGetBucketFillSound(cir: Internal.CallbackInfoReturnable_<any>): void;
        abstract getAmount(arg0: Internal.FluidState_): number;
        toString(): string;
        abstract getFlowing(): Internal.Fluid;
        notifyAll(): void;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        handler$fbf000$create$canPassThroughOnWaterWheel(arg0: Internal.BlockGetter_, arg1: Internal.Fluid_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.Direction_, arg5: BlockPos_, arg6: Internal.BlockState_, arg7: Internal.FluidState_, arg8: Internal.CallbackInfoReturnable_<any>): void;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        shouldUpdateWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_, arg2: Internal.Entity_): boolean;
        hashCode(): number;
        abstract getDropOff(arg0: Internal.LevelReader_): number;
        randomTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_, arg3: Internal.RandomSource_): void;
        createFluidStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Fluid, Internal.FluidState>): void;
        abstract createLegacyBlock(arg0: Internal.FluidState_): Internal.BlockState;
        wait(arg0: number): void;
        handler$dkn000$alexscaves$ac_spreadTo(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_, arg4: Internal.FluidState_, arg5: Internal.CallbackInfo_): void;
        abstract getSource(): Internal.Fluid;
        static getLegacyLevel(arg0: Internal.FluidState_): number;
        equals(arg0: any): boolean;
        spread(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_): void;
        canSpreadTo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_, arg4: BlockPos_, arg5: Internal.BlockState_, arg6: Internal.FluidState_, arg7: Internal.Fluid_): boolean;
        get stateDefinition(): Internal.StateDefinition<Internal.Fluid, Internal.FluidState>
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get randomlyTicking(): boolean
        get dripParticle(): Internal.ParticleOptions
        get explosionResistance(): number
        get bucket(): Internal.Item
        get class(): typeof any
        get empty(): boolean
        get fluidType(): Internal.FluidType
        get flowing(): Internal.Fluid
        get source(): Internal.Fluid
        static readonly FALLING: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly LEVEL: (Internal.IntegerProperty) & (Internal.IntegerProperty);
    }
    type FlowingFluid_ = FlowingFluid;
    interface IRecipeSerializerReversed <T extends Internal.Recipe<any>> {
        abstract write(arg0: T): Internal.JsonObject;
        (arg0: T): Internal.JsonObject_;
    }
    type IRecipeSerializerReversed_<T extends Internal.Recipe<any>> = IRecipeSerializerReversed<T> | ((arg0: T)=> Internal.JsonObject_);
    class IntOpenHashSet extends Internal.AbstractIntSet implements Internal.Cloneable, Internal.Hash, Internal.Serializable {
        constructor()
        constructor(arg0: Internal.IntCollection_)
        constructor(arg0: Internal.Iterator_<any>)
        constructor(arg0: number)
        constructor(arg0: number[])
        constructor(arg0: number[], arg1: number, arg2: number, arg3: number)
        constructor(arg0: Internal.Iterator_<any>, arg1: number)
        constructor(arg0: number, arg1: number)
        constructor(arg0: number[], arg1: number)
        constructor(arg0: Internal.IntCollection_, arg1: number)
        constructor(arg0: Internal.Collection_<number>)
        constructor(arg0: number[], arg1: number, arg2: number)
        constructor(arg0: Internal.Collection_<number>, arg1: number)
        constructor(arg0: Internal.IntIterator_)
        constructor(arg0: Internal.IntIterator_, arg1: number)
        static of(arg0: number, arg1: number, arg2: number): Internal.IntOpenHashSet;
        /**
         * @deprecated
        */
        stream(): Internal.Stream<number>;
        "contains(int)"(arg0: number): boolean;
        trim(arg0: number): boolean;
        static toSetWithExpectedSize(arg0: Internal.IntStream_, arg1: number): Internal.IntOpenHashSet;
        intStream(): Internal.IntStream;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        static of<E>(arg0: E, arg1: E): Internal.Set<E>;
        clone(): this;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        "remove(int)"(arg0: number): boolean;
        removeAll(arg0: Internal.IntCollection_): boolean;
        "removeAll(it.unimi.dsi.fastutil.ints.IntCollection)"(arg0: Internal.IntCollection_): boolean;
        "add(int)"(arg0: number): boolean;
        removeIf(arg0: Internal.IntPredicate_): boolean;
        /**
         * @deprecated
        */
        "contains(java.lang.Object)"(arg0: any): boolean;
        remove(arg0: number): boolean;
        trim(): boolean;
        addAll(arg0: Internal.IntCollection_): boolean;
        retainAll(arg0: Internal.IntCollection_): boolean;
        abstract toArray<T>(arg0: T[]): T[];
        "toArray(int[])"(arg0: number[]): number[];
        /**
         * @deprecated
        */
        toIntArray(arg0: number[]): number[];
        /**
         * @deprecated
        */
        remove(arg0: any): boolean;
        "removeAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        /**
         * @deprecated
        */
        add(arg0: any): boolean;
        /**
         * @deprecated
        */
        "add(java.lang.Integer)"(arg0: number): boolean;
        static of(arg0: number): Internal.IntOpenHashSet;
        static "of(int,int)"(arg0: number, arg1: number): Internal.IntOpenHashSet;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        static of(arg0: number, arg1: number): Internal.IntOpenHashSet;
        getClass(): typeof any;
        "retainAll(it.unimi.dsi.fastutil.ints.IntCollection)"(arg0: Internal.IntCollection_): boolean;
        forEach(arg0: Internal.IntConsumer_): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        static "of(int,int,int)"(arg0: number, arg1: number, arg2: number): Internal.IntOpenHashSet;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        /**
         * @deprecated
        */
        contains(arg0: any): boolean;
        iterator(): Internal.IntIterator;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        toString(): string;
        forEach(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        "removeIf(it.unimi.dsi.fastutil.ints.IntPredicate)"(arg0: it.unimi.dsi.fastutil.ints.IntPredicate_): boolean;
        "forEach(it.unimi.dsi.fastutil.ints.IntConsumer)"(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        notifyAll(): void;
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        parallelStream(): Internal.Stream<number>;
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        /**
         * @deprecated
        */
        removeIf(arg0: Internal.Predicate_<number>): boolean;
        static of(): Internal.IntOpenHashSet;
        size(): number;
        clear(): void;
        /**
         * @deprecated
        */
        rem(arg0: number): boolean;
        wait(arg0: number): void;
        static of(...arg0: number[]): Internal.IntOpenHashSet;
        "forEach(java.util.function.IntConsumer)"(arg0: Internal.IntConsumer_): void;
        addAll(arg0: Internal.Collection_<number>): boolean;
        contains(arg0: number): boolean;
        notify(): void;
        static toSet(arg0: Internal.IntStream_): Internal.IntOpenHashSet;
        retainAll(arg0: Internal.Collection_<any>): boolean;
        "containsAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        intParallelStream(): Internal.IntStream;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        static "of(int[])"(...arg0: number[]): Internal.IntOpenHashSet;
        "retainAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        intIterator(): Internal.IntIterator;
        static "of(java.lang.Object[])"<E>(...arg0: E[]): Internal.Set<E>;
        /**
         * @deprecated
        */
        "removeIf(java.util.function.Predicate)"(arg0: Internal.Predicate_<number>): boolean;
        add(arg0: number): boolean;
        containsAll(arg0: Internal.IntCollection_): boolean;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): boolean;
        static "of(int)"(arg0: number): Internal.IntOpenHashSet;
        static of<E>(arg0: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        spliterator(): Internal.Spliterator<any>;
        removeAll(arg0: Internal.Collection_<any>): boolean;
        wait(): void;
        static "of(java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E): Internal.Set<E>;
        /**
         * @deprecated
        */
        "forEach(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        add(arg0: number): boolean;
        isEmpty(): boolean;
        /**
         * @deprecated
        */
        "add(java.lang.Object)"(arg0: any): boolean;
        toIntArray(): number[];
        wait(arg0: number, arg1: number): void;
        containsAll(arg0: Internal.Collection_<any>): boolean;
        toArray(arg0: number[]): number[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
        "addAll(it.unimi.dsi.fastutil.ints.IntCollection)"(arg0: Internal.IntCollection_): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        static "of(java.lang.Object,java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        "removeIf(java.util.function.IntPredicate)"(arg0: Internal.IntPredicate_): boolean;
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        removeIf(arg0: it.unimi.dsi.fastutil.ints.IntPredicate_): boolean;
        abstract toArray(): any[];
        intSpliterator(): Internal.IntSpliterator;
        hashCode(): number;
        "addAll(java.util.Collection)"(arg0: Internal.Collection_<number>): boolean;
        static of<E>(...arg0: E[]): Internal.Set<E>;
        "containsAll(it.unimi.dsi.fastutil.ints.IntCollection)"(arg0: Internal.IntCollection_): boolean;
        equals(arg0: any): boolean;
        static "of(java.lang.Object)"<E>(arg0: E): Internal.Set<E>;
        get class(): typeof any
        get empty(): boolean
    }
    type IntOpenHashSet_ = IntOpenHashSet;
    interface ProfileKeyPairManager {
        abstract prepareKeyPair(): Internal.CompletableFuture<Internal.Optional<Internal.ProfileKeyPair>>;
        create(arg0: Internal.UserApiService_, arg1: Internal.User_, arg2: Internal.Path_): this;
        abstract shouldRefreshKeyPair(): boolean;
        readonly EMPTY_KEY_MANAGER: Internal.ProfileKeyPairManager;
    }
    type ProfileKeyPairManager_ = ProfileKeyPairManager;
    class FlapDisplaySection {
        constructor(arg0: number, arg1: string, arg2: boolean, arg3: boolean)
        getClass(): typeof any;
        renderCharsIndividually(): boolean;
        write(): Internal.CompoundTag;
        toString(): string;
        rightAligned(): this;
        notifyAll(): void;
        static load(arg0: Internal.CompoundTag_): Internal.FlapDisplaySection;
        refresh(arg0: boolean): void;
        notify(): void;
        wideFlaps(): this;
        wait(arg0: number, arg1: number): void;
        static getFlapCycle(arg0: string): string[];
        hashCode(): number;
        getSize(): number;
        wait(): void;
        update(arg0: Internal.CompoundTag_): void;
        getText(): net.minecraft.network.chat.Component;
        wait(arg0: number): void;
        tick(arg0: boolean): number;
        equals(arg0: any): boolean;
        setText(arg0: net.minecraft.network.chat.Component_): void;
        get class(): typeof any
        get size(): number
        get text(): net.minecraft.network.chat.Component
        set text(arg0: net.minecraft.network.chat.Component_)
        static readonly WIDE_MONOSPACE: (9.0) & (number);
        static readonly MONOSPACE: (7.0) & (number);
    }
    type FlapDisplaySection_ = FlapDisplaySection;
    interface Npc {
    }
    type Npc_ = Npc;
    class BlockTintFunction$Fixed extends Internal.Record implements Internal.BlockTintFunction {
        constructor(color: dev.latvian.mods.rhino.mod.util.color.Color_)
        getClass(): typeof any;
        hashCode(): number;
        static of(cx: Internal.Context_, o: any): Internal.BlockTintFunction;
        toString(): string;
        getColor(state: Internal.BlockState_, level: Internal.BlockAndTintGetter_, pos: BlockPos_, index: number): dev.latvian.mods.rhino.mod.util.color.Color;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(o: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        color(): dev.latvian.mods.rhino.mod.util.color.Color;
        get class(): typeof any
    }
    type BlockTintFunction$Fixed_ = BlockTintFunction$Fixed;
    abstract class FullHeightShiftPushBox extends Internal.PushBox {
        constructor(arg0: number, arg1: number, arg2: number)
        getClass(): typeof any;
        toString(): string;
        getH(arg0: number, arg1: number): number;
        notifyAll(): void;
        isActive(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getVerticalBias(): number;
        hashCode(): number;
        push(arg0: Internal.InterfaceInstance_, arg1: Internal.Interface_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        postUpdate(): void;
        getW(arg0: number, arg1: number): number;
        update(): void;
        getX(arg0: number, arg1: number): number;
        wait(): void;
        getY(arg0: number, arg1: number): number;
        getAnchorY(): number;
        wait(arg0: number): void;
        getAnchorX(): number;
        equals(arg0: any): boolean;
        setActive(arg0: boolean): void;
        get class(): typeof any
        get active(): boolean
        get verticalBias(): number
        get anchorY(): number
        get anchorX(): number
        set active(arg0: boolean)
    }
    type FullHeightShiftPushBox_ = FullHeightShiftPushBox;
    interface IAspectVariable <V extends Internal.IValue> extends Internal.IVariable<V> {
        abstract getValue(): V;
        abstract getType(): Internal.IValueType<V>;
        abstract getAspect(): Internal.IAspectRead<V, any>;
        abstract invalidate(): void;
        abstract getTarget(): Internal.PartTarget;
        abstract addInvalidationListener(arg0: Internal.IVariableInvalidateListener_): void;
        get value(): V
        get type(): Internal.IValueType<V>
        get aspect(): Internal.IAspectRead<V, any>
        get target(): Internal.PartTarget
    }
    type IAspectVariable_<V extends Internal.IValue> = IAspectVariable<V>;
    class BlockPattern$BlockPatternMatch {
        constructor(arg0: BlockPos_, arg1: Internal.Direction_, arg2: Internal.Direction_, arg3: Internal.LoadingCache_<BlockPos, Internal.BlockInWorld>, arg4: number, arg5: number, arg6: number)
        getClass(): typeof any;
        getDepth(): number;
        toString(): string;
        getWidth(): number;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getBlock(arg0: number, arg1: number, arg2: number): Internal.BlockInWorld;
        wait(): void;
        wait(arg0: number): void;
        getUp(): Internal.Direction;
        getHeight(): number;
        equals(arg0: any): boolean;
        getFrontTopLeft(): BlockPos;
        getForwards(): Internal.Direction;
        get class(): typeof any
        get depth(): number
        get width(): number
        get up(): Internal.Direction
        get height(): number
        get frontTopLeft(): BlockPos
        get forwards(): Internal.Direction
    }
    type BlockPattern$BlockPatternMatch_ = BlockPattern$BlockPatternMatch;
    interface HoglinBase {
        abstract getAttackAnimationRemainingTicks(): number;
        hurtAndThrowTarget(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        throwTarget(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): void;
        get attackAnimationRemainingTicks(): number
        (): number;
        readonly ATTACK_ANIMATION_DURATION: (10) & (number);
    }
    type HoglinBase_ = HoglinBase | (()=> number);
    interface ICraftingMachine {
        abstract getCraftingMachineInfo(): Internal.PatternContainerGroup;
        abstract acceptsPlans(): boolean;
        of(arg0: Internal.BlockEntity_, arg1: Internal.Direction_): this;
        of(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.BlockEntity_): this;
        abstract pushPattern(arg0: Internal.IPatternDetails_, arg1: Internal.KeyCounter_[], arg2: Internal.Direction_): boolean;
        get craftingMachineInfo(): Internal.PatternContainerGroup
    }
    type ICraftingMachine_ = ICraftingMachine;
    class BlockSlave extends Internal.Block implements Internal.EntityBlock, Internal.INetworked {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        handler$cag000$betterend$be_getDroppedStacks(state: Internal.BlockState_, builder: Internal.LootParams$Builder_, info: Internal.CallbackInfoReturnable_<any>): void;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        handler$cjp000$bclib$appendSurvivalBlock(itemStack: Internal.ItemStack_, blockGetter: Internal.BlockGetter_, list: Internal.List_<any>, tooltipFlag: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        "newBlockEntity(net.minecraft.core.BlockPos,net.minecraft.world.level.block.state.BlockState)"(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntitySlave;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        toggle(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Player_, arg3: Internal.EnumKeyType_): void;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntitySlave;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        "newBlockEntity(net.minecraft.core.BlockPos,net.minecraft.world.level.block.state.BlockState)"(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        lychee$setTickable(arg0: boolean): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type BlockSlave_ = BlockSlave;
    class EventRenderSplashText$Pre extends Internal.EventRenderSplashText {
        constructor()
        constructor(arg0: string, arg1: Internal.GuiGraphics_, arg2: number, arg3: number)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        getGuiGraphics(): Internal.GuiGraphics;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        getSplashText(): string;
        isCanceled(): boolean;
        setSplashText(arg0: string): void;
        getSplashTextColor(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        setSplashTextColor(arg0: number): void;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        getPartialTicks(): number;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        get guiGraphics(): Internal.GuiGraphics
        set phase(arg0: Internal.EventPriority_)
        get splashText(): string
        get canceled(): boolean
        set splashText(arg0: string)
        get splashTextColor(): number
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        set splashTextColor(arg0: number)
        get listenerList(): Internal.ListenerList
        get partialTicks(): number
        get phase(): Internal.EventPriority
    }
    type EventRenderSplashText$Pre_ = EventRenderSplashText$Pre;
    class ImbuementTile extends Internal.AbstractSourceMachine implements Internal.IPedestalMachine, net.minecraft.world.Container, Internal.GeoBlockEntity, Internal.ITickable, Internal.ITooltipProvider {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        stopOpen(arg0: Internal.Player_): void;
        canAcceptSource(arg0: number): boolean;
        requestModelDataUpdate(): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        getTransferRate(): number;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        getTick(arg0: any): number;
        removeItem(arg0: number, arg1: number): Internal.ItemStack;
        getPedestalItems(): Internal.List<Internal.ItemStack>;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        load(arg0: Internal.CompoundTag_): void;
        abstract setChanged(): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        "setChanged()"(): void;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        "getUpdatePacket()"(): Internal.Packet<any>;
        kjs$self(): net.minecraft.world.Container;
        pedestalList(arg0: BlockPos_, arg1: number, arg2: Internal.Level_): Internal.List<BlockPos>;
        getMaxSource(): number;
        getWidth(): number;
        setRemoved(): void;
        "isEmpty()"(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        canAcceptSource(): boolean;
        getType(): Internal.BlockEntityType<any>;
        getX(): number;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        setColor(arg0: Internal.ParticleColor_): void;
        getItem(arg0: number): Internal.ItemStack;
        "getUpdatePacket()"(): Internal.ClientboundBlockEntityDataPacket;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        setAnimData<D>(arg0: Internal.SerializableDataTicket_<D>, arg1: D): void;
        getRenderBoundingBox(): Internal.AABB;
        getClass(): typeof any;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        countItem(arg0: Internal.Item_): number;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        startOpen(arg0: Internal.Player_): void;
        getAnimatableInstanceCache(): Internal.AnimatableInstanceCache;
        fabric_hasPersistentAttachments(): boolean;
        clearRemoved(): void;
        getUpdatePacket(): Internal.Packet<any>;
        getNearbyPedestals(): Internal.List<BlockPos>;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        getRecipeNow(): Internal.ImbuementRecipe;
        fabric_getAttachments(): Internal.Map<any, any>;
        shouldPlayAnimsWhileGamePaused(): boolean;
        getHeight(): number;
        countNonEmpty(): number;
        getPersistentData(): Internal.CompoundTag;
        getTransferRate(arg0: Internal.ISourceTile_, arg1: Internal.ISourceTile_, arg2: number): number;
        updateBlock(): boolean;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        canTakeItem(arg0: net.minecraft.world.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        clear(): void;
        wait(arg0: number): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        clearContent(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        reviveCaps(): void;
        transferSource(arg0: Internal.ISourceTile_, arg1: Internal.ISourceTile_, arg2: number): number;
        static tryClear(arg0: any): void;
        getAttached(type: Internal.AttachmentType_<any>): any;
        getUpdateTag(): Internal.CompoundTag;
        getRenderAttachmentData(): any;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        triggerAnim(arg0: string, arg1: string): void;
        addSource(arg0: number): number;
        setLevel(arg0: Internal.Level_): void;
        notify(): void;
        getSlots(): number;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        onLoad(): void;
        getAnimData<D>(arg0: Internal.SerializableDataTicket_<D>): D;
        getContainerSize(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        setItem(arg0: number, arg1: Internal.ItemStack_): void;
        invalidateCaps(): void;
        setSource(arg0: number): number;
        getBlockState(): Internal.BlockState;
        getSlotLimit(slot: number): number;
        animatableCacheOverride(): Internal.AnimatableInstanceCache;
        getMaxStackSize(): number;
        removeItemNoUpdate(arg0: number): Internal.ItemStack;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        tick(): void;
        getSource(): number;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        lightPedestal(arg0: Internal.Level_): void;
        getZ(): number;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        getTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>): void;
        setMaxSource(arg0: number): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        count(ingredient: Internal.Ingredient_): number;
        getColor(): Internal.ParticleColor;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveAdditional(arg0: Internal.CompoundTag_): void;
        count(): number;
        saveWithId(): Internal.CompoundTag;
        getBoneResetTime(): number;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        isEmpty(): boolean;
        transferSource(arg0: Internal.ISourceTile_, arg1: Internal.ISourceTile_): number;
        wait(arg0: number, arg1: number): void;
        getTransferRate(arg0: Internal.ISourceTile_, arg1: Internal.ISourceTile_): number;
        getLevel(): Internal.Level;
        static setChanged(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        onlyOpCanSetNbt(): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        serializeNBT(): Internal.Tag;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        getStackInSlot(slot: number): Internal.ItemStack;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        removeSource(arg0: number): number;
        asContainer(): net.minecraft.world.Container;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getAllItems(): Internal.List<Internal.ItemStack>;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        stillValid(arg0: Internal.Player_): boolean;
        getY(): number;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        tick(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_): void;
        getRenderData(): any;
        getModelData(): Internal.ModelData;
        isMutable(): boolean;
        find(ingredient: Internal.Ingredient_): number;
        registerControllers(arg0: Internal.AnimatableManager$ControllerRegistrar_): void;
        equals(arg0: any): boolean;
        get transferRate(): number
        get pedestalItems(): Internal.List<Internal.ItemStack>
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get "updatePacket()"(): Internal.Packet<any>
        get maxSource(): number
        get width(): number
        get "empty()"(): boolean
        get type(): Internal.BlockEntityType<any>
        get x(): number
        set color(arg0: Internal.ParticleColor_)
        get "updatePacket()"(): Internal.ClientboundBlockEntityDataPacket
        get renderBoundingBox(): Internal.AABB
        get class(): typeof any
        get animatableInstanceCache(): Internal.AnimatableInstanceCache
        get updatePacket(): Internal.Packet<any>
        get nearbyPedestals(): Internal.List<BlockPos>
        get recipeNow(): Internal.ImbuementRecipe
        get height(): number
        get persistentData(): Internal.CompoundTag
        get updateTag(): Internal.CompoundTag
        get renderAttachmentData(): any
        set level(arg0: Internal.Level_)
        get slots(): number
        get blockPos(): BlockPos
        get removed(): boolean
        get containerSize(): number
        set source(arg0: number)
        get blockState(): Internal.BlockState
        get maxStackSize(): number
        get source(): number
        get z(): number
        set maxSource(arg0: number)
        get color(): Internal.ParticleColor
        get boneResetTime(): number
        get empty(): boolean
        get level(): Internal.Level
        get allItems(): Internal.List<Internal.ItemStack>
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get y(): number
        get renderData(): any
        get modelData(): Internal.ModelData
        get mutable(): boolean
        stack: Internal.ItemStack;
        entity: Internal.ItemEntity;
        frames: number;
        draining: boolean;
    }
    type ImbuementTile_ = ImbuementTile;
    class BlossomLeavesBlock extends Internal.ZetaLeavesBlock {
        constructor(arg0: string, arg1: Internal.ZetaModule_, arg2: Internal.MapColor_)
        isShearable(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
        handler$cag000$betterend$be_getDroppedStacks(state: Internal.BlockState_, builder: Internal.LootParams$Builder_, info: Internal.CallbackInfoReturnable_<any>): void;
        isScaffoldingZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        getModule(): Internal.ZetaModule;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        decaying(arg0: Internal.BlockState_): boolean;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getLightEmissionZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getSettings(): Internal.BlockBehaviour$Properties;
        doesConditionApply(): boolean;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        isLadderZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        embplus$cast(): Internal.LeavesBlock;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        canStickToZeta(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        handler$cjp000$bclib$appendSurvivalBlock(itemStack: Internal.ItemStack_, blockGetter: Internal.BlockGetter_, list: Internal.List_<any>, tooltipFlag: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        getFireSpreadSpeedZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        isStickyBlockZeta(arg0: Internal.BlockState_): boolean;
        getFlammabilityZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        static isEnabled(arg0: Internal.Block_): boolean;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        static "isEnabled(net.minecraft.world.level.block.Block)"(arg0: Internal.Block_): boolean;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        cll$shouldCullSide(state: Internal.BlockState_, view: Internal.BlockGetter_, pos: BlockPos_, facing: Internal.Direction_): boolean;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        getBlock(): Internal.Block;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        static "isEnabled(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setCondition(arg0: Internal.BooleanSupplier_): Internal.ZetaLeavesBlock;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        embplus$activeNeighbors(): number;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        setCreativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>, arg1: Internal.ItemLike_, arg2: boolean): Internal.Block;
        isAir(arg0: Internal.BlockState_): boolean;
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getBeaconColorMultiplierZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getSoundTypeZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        shouldDisplayFluidOverlayZeta(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getJumpFactor(): number;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        onSheared(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: BlockPos_, arg4: number): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        embplus$getResourceLocation(): ResourceLocation;
        getEnchantPowerBonusZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        collisionExtendsVerticallyZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        getFriction(): number;
        getToolModifiedStateZeta(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: string, arg3: boolean): Internal.BlockState;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        canSustainPlantZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: string): boolean;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        static isEnabled(arg0: Internal.Item_): boolean;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        "isEnabled(net.minecraft.world.flag.FeatureFlagSet)"(arg0: Internal.FeatureFlagSet_): boolean;
        setCreativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>): Internal.Block;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        static getOptionalDistanceAt(arg0: Internal.BlockState_): Internal.OptionalInt;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        isConduitFrameZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        isEnabled(): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        makesOpenTrapdoorAboveClimbableZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        lychee$setTickable(arg0: boolean): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        isFlammableZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        get module(): Internal.ZetaModule
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        get block(): Internal.Block
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set condition(arg0: Internal.BooleanSupplier_)
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set creativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>)
        set destroySpeed(v: number)
        get enabled(): boolean
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type BlossomLeavesBlock_ = BlossomLeavesBlock;
    class ClientboundLevelParticlesPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: T, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number)
        constructor(arg0: Internal.FriendlyByteBuf_)
        getClass(): typeof any;
        getCount(): number;
        notify(): void;
        isOverrideLimiter(): boolean;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        getXDist(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        getZDist(): number;
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        getMaxSpeed(): number;
        notifyAll(): void;
        getParticle(): Internal.ParticleOptions;
        getX(): number;
        getY(): number;
        getZ(): number;
        hashCode(): number;
        getYDist(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get count(): number
        get overrideLimiter(): boolean
        get skippable(): boolean
        get XDist(): number
        get ZDist(): number
        get maxSpeed(): number
        get particle(): Internal.ParticleOptions
        get x(): number
        get y(): number
        get z(): number
        get YDist(): number
    }
    type ClientboundLevelParticlesPacket_ = ClientboundLevelParticlesPacket;
    class Locale$FilteringMode extends Internal.Enum<Internal.Locale$FilteringMode> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.Locale$FilteringMode>>;
        toString(): string;
        static values(): Internal.Locale$FilteringMode[];
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        static valueOf(arg0: string): Internal.Locale$FilteringMode;
        hashCode(): number;
        getDeclaringClass(): typeof Internal.Locale$FilteringMode;
        ordinal(): number;
        wait(): void;
        compareTo(arg0: Internal.Locale$FilteringMode_): number;
        wait(arg0: number): void;
        "compareTo(java.util.Locale$FilteringMode)"(arg0: Internal.Locale$FilteringMode_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.Locale$FilteringMode
        static readonly EXTENDED_FILTERING: (Internal.Locale$FilteringMode) & (Internal.Locale$FilteringMode);
        static readonly IGNORE_EXTENDED_RANGES: (Internal.Locale$FilteringMode) & (Internal.Locale$FilteringMode);
        static readonly AUTOSELECT_FILTERING: (Internal.Locale$FilteringMode) & (Internal.Locale$FilteringMode);
        static readonly MAP_EXTENDED_RANGES: (Internal.Locale$FilteringMode) & (Internal.Locale$FilteringMode);
        static readonly REJECT_EXTENDED_RANGES: (Internal.Locale$FilteringMode) & (Internal.Locale$FilteringMode);
    }
    type Locale$FilteringMode_ = "reject_extended_ranges" | Locale$FilteringMode | "extended_filtering" | "ignore_extended_ranges" | "autoselect_filtering" | "map_extended_ranges";
    interface EntityAttributeInstanceAccessor {
        abstract callOnUpdate(): void;
        abstract getUpdateCallback(): Internal.Consumer<Internal.AttributeInstance>;
        abstract setUpdateCallback(updateCallback: Internal.Consumer_<Internal.AttributeInstance>): void;
        get updateCallback(): Internal.Consumer<Internal.AttributeInstance>
        set updateCallback(updateCallback: Internal.Consumer_<Internal.AttributeInstance>)
    }
    type EntityAttributeInstanceAccessor_ = EntityAttributeInstanceAccessor;
    class IsoChronology extends Internal.AbstractChronology implements Internal.Serializable {
        getClass(): typeof any;
        eras(): Internal.List<Internal.Era>;
        resolveDate(arg0: Internal.Map_<Internal.TemporalField, number>, arg1: Internal.ResolverStyle_): Internal.LocalDate;
        eraOf(arg0: number): Internal.IsoEra;
        static from(arg0: Internal.TemporalAccessor_): Internal.Chronology;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        dateNow(arg0: Internal.ZoneId_): Internal.LocalDate;
        dateYearDay(arg0: Internal.Era_, arg1: number, arg2: number): Internal.LocalDate;
        dateNow(arg0: Internal.Clock_): Internal.ChronoLocalDate;
        getCalendarType(): string;
        compareTo(arg0: Internal.Chronology_): number;
        "compareTo(java.time.chrono.Chronology)"(arg0: Internal.Chronology_): number;
        static of(arg0: string): Internal.Chronology;
        range(arg0: Internal.ChronoField_): Internal.ValueRange;
        date(arg0: number, arg1: number, arg2: number): Internal.ChronoLocalDate;
        prolepticYear(arg0: Internal.Era_, arg1: number): number;
        localDateTime(arg0: Internal.TemporalAccessor_): Internal.LocalDateTime;
        date(arg0: Internal.TemporalAccessor_): Internal.LocalDate;
        period(arg0: number, arg1: number, arg2: number): Internal.ChronoPeriod;
        toString(): string;
        epochSecond(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.ZoneOffset_): number;
        notifyAll(): void;
        static getAvailableChronologies(): Internal.Set<Internal.Chronology>;
        zonedDateTime(arg0: Internal.Instant_, arg1: Internal.ZoneId_): Internal.ChronoZonedDateTime<any>;
        date(arg0: Internal.Era_, arg1: number, arg2: number, arg3: number): Internal.LocalDate;
        getId(): string;
        isLeapYear(arg0: number): boolean;
        getDisplayName(arg0: Internal.TextStyle_, arg1: Internal.Locale_): string;
        zonedDateTime(arg0: Internal.TemporalAccessor_): Internal.ChronoZonedDateTime<any>;
        hashCode(): number;
        dateEpochDay(arg0: number): Internal.ChronoLocalDate;
        "dateNow(java.time.Clock)"(arg0: Internal.Clock_): Internal.ChronoLocalDate;
        dateYearDay(arg0: number, arg1: number): Internal.ChronoLocalDate;
        wait(): void;
        wait(arg0: number): void;
        "dateNow(java.time.ZoneId)"(arg0: Internal.ZoneId_): Internal.LocalDate;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        epochSecond(arg0: Internal.Era_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: Internal.ZoneOffset_): number;
        static ofLocale(arg0: Internal.Locale_): Internal.Chronology;
        dateNow(): Internal.ChronoLocalDate;
        get class(): typeof any
        get calendarType(): string
        get availableChronologies(): Internal.Set<Internal.Chronology>
        get id(): string
        static readonly INSTANCE: (Internal.IsoChronology) & (Internal.IsoChronology);
    }
    type IsoChronology_ = IsoChronology;
    interface ExtendedPonderStoryBoard {
        abstract program(arg0: Internal.ExtendedSceneBuilder_, arg1: Internal.SceneBuildingUtilDelegate_): void;
        (arg0: Internal.ExtendedSceneBuilder, arg1: Internal.SceneBuildingUtilDelegate): void;
    }
    type ExtendedPonderStoryBoard_ = ((arg0: Internal.ExtendedSceneBuilder, arg1: Internal.SceneBuildingUtilDelegate)=> void) | ExtendedPonderStoryBoard;
    class CapabilityAlloyInteractable$BlockEntityBuilder extends Internal.CapabilityBuilderForge<Internal.BlockEntity, Internal.IAlloyInteraction> {
        constructor()
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        interaction(interaction: Internal.CapabilityAlloyInteractable$AlloyInteraction_): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        availableOn(isAvailable: Internal.BiPredicate_<Internal.BlockEntity, Internal.Direction>): Internal.CapabilityBuilder<Internal.BlockEntity, Internal.IAlloyInteraction, Internal.Capability<T>>;
        wait(): void;
        wait(arg0: number): void;
        getCapability(instance: Internal.BlockEntity_): Internal.IAlloyInteraction;
        equals(arg0: any): boolean;
        side(direction: Internal.Direction_): Internal.CapabilityBuilder<Internal.BlockEntity, Internal.IAlloyInteraction, Internal.Capability<T>>;
        get class(): typeof any
    }
    type CapabilityAlloyInteractable$BlockEntityBuilder_ = CapabilityAlloyInteractable$BlockEntityBuilder;
    abstract class ModalPanel extends Internal.Panel {
        constructor(panel: Internal.Panel_)
        getScrollStep(): number;
        static getClipboardString(): string;
        mousePressed(button: Internal.MouseButton_): boolean;
        getY(): number;
        closeGui(openPrevScreen: boolean): void;
        scrollPanel(scroll: number): boolean;
        mouseDragged(button: number, dragX: number, dragY: number): boolean;
        add(widget: Internal.Widget_): void;
        isDefaultScrollVertical(): boolean;
        setPos(x: number, y: number): void;
        keyPressed(key: dev.ftb.mods.ftblibrary.ui.input.Key_): boolean;
        isGhostIngredientTarget(ingredient: any): boolean;
        getPartialTicks(): number;
        setScrollX(scroll: number): void;
        getWidth(): number;
        getDrawLayer(): Internal.Widget$DrawLayer;
        isMouseOverAnyWidget(): boolean;
        keyReleased(key: dev.ftb.mods.ftblibrary.ui.input.Key_): void;
        getMouseX(): number;
        "compareTo(dev.ftb.mods.ftblibrary.ui.Widget)"(widget: Internal.Widget_): number;
        static isShiftKeyDown(): boolean;
        "compareTo(java.lang.Object)"(arg0: any): number;
        getExtraZlevel(): number;
        static setClipboardString(string: string): void;
        getClass(): typeof any;
        setScrollStep(s: number): void;
        handleClick(scheme: string, path: string): boolean;
        getX(): number;
        getParent(): Internal.Panel;
        run(): void;
        updateMouseOver(mouseX: number, mouseY: number): void;
        getPosY(): number;
        static isMouseButtonDown(button: Internal.MouseButton_): boolean;
        setOnlyRenderWidgetsInside(value: boolean): void;
        setScrollY(scroll: number): void;
        getWidget(index: number): Internal.Widget;
        setPosAndSize(x: number, y: number, w: number, h: number): Internal.Widget;
        setWidth(v: number): void;
        getHeight(): number;
        charTyped(c: string, modifiers: Internal.KeyModifiers_): boolean;
        getContentHeight(): number;
        toString(): string;
        setSize(w: number, h: number): void;
        getCursor(): Internal.CursorType;
        isOffset(): boolean;
        notifyAll(): void;
        mouseReleased(button: Internal.MouseButton_): void;
        collidesWith(x: number, y: number, w: number, h: number): boolean;
        openGuiLater(): void;
        getScrollX(): number;
        getOnlyInteractWithWidgetsInside(): boolean;
        checkMouseOver(mouseX: number, mouseY: number): boolean;
        getScreen(): com.mojang.blaze3d.platform.Window;
        drawWidget(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, widget: Internal.Widget_, x: number, y: number, w: number, h: number): void;
        handleClick(click: string): boolean;
        wait(arg0: number): void;
        setHeight(v: number): void;
        addMouseOverText(list: Internal.TooltipList_): void;
        shouldDraw(): boolean;
        compareTo(widget: Internal.Widget_): number;
        notify(): void;
        compareTo(arg0: any): number;
        getWidgets(): Internal.List<Internal.Widget>;
        getPosX(): number;
        closeGui(): void;
        openGui(): void;
        getWidgetType(): Internal.WidgetType;
        abstract alignWidgets(): void;
        setX(v: number): void;
        clearWidgets(): void;
        setOnlyInteractWithWidgetsInside(value: boolean): void;
        getScrollY(): number;
        getGui(): Internal.BaseScreen;
        tick(): void;
        wait(): void;
        refreshWidgets(): void;
        getTitle(): net.minecraft.network.chat.Component;
        openAfter(runnable: Internal.Runnable_): Internal.Runnable;
        draw(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, x: number, y: number, w: number, h: number): void;
        getContentWidth(): number;
        drawBackground(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, x: number, y: number, w: number, h: number): void;
        closeContextMenu(): void;
        mouseScrolled(scroll: number): boolean;
        getIngredientUnderMouse(): Internal.Optional<Internal.PositionedIngredient>;
        shouldAddMouseOverText(): boolean;
        wait(arg0: number, arg1: number): void;
        isEnabled(): boolean;
        setOffset(flag: boolean): void;
        movePanelScroll(dx: number, dy: number): boolean;
        setExtraZlevel(extraZlevel: number): void;
        setY(v: number): void;
        static isKeyDown(key: number): boolean;
        static isCtrlKeyDown(): boolean;
        abstract addWidgets(): void;
        isMouseOver(): boolean;
        playClickSound(): void;
        mouseDoubleClicked(button: Internal.MouseButton_): boolean;
        onClosed(): void;
        acceptGhostIngredient(ingredient: any): void;
        drawOffsetBackground(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, x: number, y: number, w: number, h: number): void;
        getMouseY(): number;
        hashCode(): number;
        getOnlyRenderWidgetsInside(): boolean;
        setDrawLayer(drawLayer: Internal.Widget$DrawLayer_): void;
        addAll(list: Internal.Iterable_<Internal.Widget>): void;
        align(layout: Internal.WidgetLayout_): number;
        equals(arg0: any): boolean;
        get scrollStep(): number
        get clipboardString(): string
        get y(): number
        get defaultScrollVertical(): boolean
        get partialTicks(): number
        set scrollX(scroll: number)
        get width(): number
        get drawLayer(): Internal.Widget$DrawLayer
        get mouseOverAnyWidget(): boolean
        get mouseX(): number
        get shiftKeyDown(): boolean
        get extraZlevel(): number
        set clipboardString(string: string)
        get class(): typeof any
        set scrollStep(s: number)
        get x(): number
        get parent(): Internal.Panel
        get posY(): number
        set onlyRenderWidgetsInside(value: boolean)
        set scrollY(scroll: number)
        set width(v: number)
        get height(): number
        get contentHeight(): number
        get cursor(): Internal.CursorType
        get offset(): boolean
        get scrollX(): number
        get onlyInteractWithWidgetsInside(): boolean
        get screen(): com.mojang.blaze3d.platform.Window
        set height(v: number)
        get widgets(): Internal.List<Internal.Widget>
        get posX(): number
        get widgetType(): Internal.WidgetType
        set x(v: number)
        set onlyInteractWithWidgetsInside(value: boolean)
        get scrollY(): number
        get gui(): Internal.BaseScreen
        get title(): net.minecraft.network.chat.Component
        get contentWidth(): number
        get ingredientUnderMouse(): Internal.Optional<Internal.PositionedIngredient>
        get enabled(): boolean
        set offset(flag: boolean)
        set extraZlevel(extraZlevel: number)
        set y(v: number)
        get ctrlKeyDown(): boolean
        get mouseOver(): boolean
        get mouseY(): number
        get onlyRenderWidgetsInside(): boolean
        set drawLayer(drawLayer: Internal.Widget$DrawLayer_)
    }
    type ModalPanel_ = ModalPanel;
    interface ITabExpander {
        abstract getItemsForTab(): Internal.List<Internal.ItemStack>;
        get itemsForTab(): Internal.List<Internal.ItemStack>
        (): Internal.List_<Internal.ItemStack>;
    }
    type ITabExpander_ = (()=> Internal.List_<Internal.ItemStack>) | ITabExpander;
    class RingOfTheMantleItem extends Internal.BaubleItem {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        hasPhantomInk(arg0: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        modifyReturnValue$ecn000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        getEquippedAttributeModifiers(arg0: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        onWornTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setCosmeticItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        onEquipped(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        onUnequipped(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        hasRender(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        modifyReturnValue$ecn000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$daa000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setPhantomInk(arg0: Internal.ItemStack_, arg1: boolean): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        getCosmeticItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        static getBaubleUUID(arg0: Internal.ItemStack_): Internal.UUID;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        static readonly MANA_COST: (5) & (number);
        static readonly HASTE_AMPLIFIER: (1) & (number);
    }
    type RingOfTheMantleItem_ = RingOfTheMantleItem;
    class SimpleWeightedRandomList$Builder <E> {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        build(): Internal.SimpleWeightedRandomList<E>;
        wait(arg0: number): void;
        add(arg0: E, arg1: number): this;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type SimpleWeightedRandomList$Builder_<E> = SimpleWeightedRandomList$Builder<E>;
    interface RenderableResource extends de.keksuccino.fancymenu.util.resource.Resource {
        abstract getAspectRatio(): Internal.AspectRatio;
        abstract open(): Internal.InputStream;
        abstract getWidth(): number;
        abstract isLoadingCompleted(): boolean;
        abstract isClosed(): boolean;
        abstract isReady(): boolean;
        waitForLoadingCompletedOrFailed(arg0: number): void;
        abstract getResourceLocation(): ResourceLocation;
        waitForReady(arg0: number): void;
        abstract close(): void;
        abstract reset(): void;
        abstract getHeight(): number;
        abstract isLoadingFailed(): boolean;
        get aspectRatio(): Internal.AspectRatio
        get width(): number
        get loadingCompleted(): boolean
        get closed(): boolean
        get ready(): boolean
        get resourceLocation(): ResourceLocation
        get height(): number
        get loadingFailed(): boolean
        readonly FULLY_TRANSPARENT_TEXTURE: (ResourceLocation) & (ResourceLocation);
        readonly MISSING_TEXTURE_LOCATION: (ResourceLocation) & (ResourceLocation);
    }
    type RenderableResource_ = RenderableResource;
    abstract class AbstractObject2IntFunction <K> implements Internal.Object2IntFunction<K>, Internal.Serializable {
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2IntFunction<T>;
        defaultReturnValue(): number;
        removeInt(arg0: any): number;
        andThenObject<T>(arg0: Internal.Int2ObjectFunction_<T>): Internal.Object2ObjectFunction<K, T>;
        notify(): void;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2IntFunction;
        apply(arg0: K): number;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2IntFunction;
        abstract getInt(arg0: any): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenInt(arg0: Internal.Int2IntFunction_): Internal.Object2IntFunction<K>;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2IntFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        andThenDouble(arg0: Internal.Int2DoubleFunction_): Internal.Object2DoubleFunction<K>;
        applyAsInt(arg0: K): number;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Integer)"(arg0: any, arg1: number): number;
        wait(): void;
        andThenByte(arg0: Internal.Int2ByteFunction_): Internal.Object2ByteFunction<K>;
        getOrDefault(arg0: any, arg1: number): number;
        static identity<T>(): Internal.Function<T, T>;
        put(arg0: K, arg1: number): number;
        getClass(): typeof any;
        andThenFloat(arg0: Internal.Int2FloatFunction_): Internal.Object2FloatFunction<K>;
        andThenLong(arg0: Internal.Int2LongFunction_): Internal.Object2LongFunction<K>;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2IntFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        "getOrDefault(java.lang.Object,int)"(arg0: any, arg1: number): number;
        wait(arg0: number, arg1: number): void;
        andThenShort(arg0: Internal.Int2ShortFunction_): Internal.Object2ShortFunction<K>;
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        "put(java.lang.Object,int)"(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Integer)"(arg0: K, arg1: number): number;
        toString(): string;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        notifyAll(): void;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2IntFunction;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2IntFunction;
        hashCode(): number;
        size(): number;
        defaultReturnValue(arg0: number): void;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2IntFunction;
        andThenReference<T>(arg0: Internal.Int2ReferenceFunction_<T>): Internal.Object2ReferenceFunction<K, T>;
        clear(): void;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        wait(arg0: number): void;
        andThenChar(arg0: Internal.Int2CharFunction_): Internal.Object2CharFunction<K>;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2IntFunction;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        get class(): typeof any
    }
    type AbstractObject2IntFunction_<K> = AbstractObject2IntFunction<K>;
    class LivingwoodBowItem extends Internal.BowItem implements Internal.CustomDamageItem {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        static getHeldProjectile(arg0: Internal.LivingEntity_, arg1: Internal.Predicate_<Internal.ItemStack>): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        modifyReturnValue$ecn000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getDefaultProjectileRange(): number;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        customArrow(arg0: Internal.AbstractArrow_): Internal.AbstractArrow;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        static getPowerForTime(arg0: number): number;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getAllSupportedProjectiles(): Internal.Predicate<Internal.ItemStack>;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        modifyReturnValue$ecn000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getSupportedHeldProjectiles(): Internal.Predicate<Internal.ItemStack>;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$daa000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        chargeVelocityMultiplier(): number;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        get defaultProjectileRange(): number
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get allSupportedProjectiles(): Internal.Predicate<Internal.ItemStack>
        get creativeTab(): string
        get supportedHeldProjectiles(): Internal.Predicate<Internal.ItemStack>
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        static readonly MANA_PER_DAMAGE: (40) & (number);
    }
    type LivingwoodBowItem_ = LivingwoodBowItem;
    abstract class AbstractContraptionEntity extends Internal.Entity implements Internal.IEntityAdditionalSpawnData, Internal.ICreateContraptionEntity {
        constructor(arg0: Internal.EntityType_<any>, arg1: Internal.Level_)
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getMagneticDeltaX(): number;
        getBlockZ(): number;
        isSuppressingBounce(): boolean;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(arg0: Internal.SoundEvent_): void;
        getPitch(): number;
        newDoubleList(...arg0: number[]): Internal.ListTag;
        isOnFire(): boolean;
        rotate(arg0: Internal.Rotation_): number;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        handler$chh000$ars_nouveau$removed(arg0: Internal.CallbackInfo_): void;
        getPositionCodec(): Internal.VecDeltaCodec;
        setMagneticAttachmentFace(arg0: Internal.Direction_): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setMaxUpStep(arg0: number): void;
        runCommandSilent(command: string): number;
        setPosition(x: number, y: number, z: number): void;
        chunkPosition(): Internal.ChunkPos;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        handler$dkl000$alexscaves$ac_onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>, arg1: Internal.CallbackInfo_): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        alwaysAccepts(): boolean;
        setContraptionMotion(arg0: Vec3d_): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        getPrevMagneticAttachmentFace(): Internal.Direction;
        checkBelowWorld(): void;
        isVisuallyCrawling(): boolean;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setMotionZ(z: number): void;
        handler$dkl000$alexscaves$ac_makeBoundingBox(arg0: Internal.CallbackInfoReturnable_<any>): void;
        handler$dkl000$alexscaves$ac_getEyePosition_lerp(arg0: number, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getAttachmentProgress(arg0: number): number;
        setFluidTypeHeight(arg0: Internal.FluidType_, arg1: number): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        getBlockY(): number;
        handler$cbj000$betterend$be_findDimensionEntryPoint(serverLevel: Internal.ServerLevel_, cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$dkl001$alexscaves$ac_tick(arg0: Internal.CallbackInfo_): void;
        isSpectator(): boolean;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        getRandomZ(arg0: number): number;
        causeFallDamage(arg0: number, arg1: number, arg2: Internal.DamageSource_): boolean;
        supportsTerrainCollision(): boolean;
        handler$cbj000$betterend$be_handleNetherPortal(ci: Internal.CallbackInfo_): void;
        getAnchorVec(): Vec3d;
        getPosition(arg0: number): Vec3d;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        abstract applyRotation(arg0: Vec3d_, arg1: number): Vec3d;
        tickActors(): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        addSittingPassenger(arg0: Internal.Entity_, arg1: number): void;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        isInWaterRainOrBubble(): boolean;
        getRemovalReason(): Internal.Entity$RemovalReason;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        isInRain(): boolean;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        handlePlayerInteraction(arg0: Internal.Player_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.InteractionHand_): boolean;
        toLocalVector(arg0: Vec3d_, arg1: number): Vec3d;
        onFlap(): void;
        canUpdate(arg0: boolean): void;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        resetFallDistance(): void;
        canSprint(): boolean;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        blockPosition(): BlockPos;
        isSteppingCarefully(): boolean;
        setLevel(arg0: Internal.Level_): void;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        abstract addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        getBlockX(): number;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getEncodeId(): string;
        getY(arg0: number): number;
        getContraption(): Internal.Contraption;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        canEnterPose(arg0: Internal.Pose_): boolean;
        onGround(): boolean;
        getDynamicLightY(): number;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        stopControlling(arg0: BlockPos_): void;
        attack(arg0: Internal.DamageSource_, arg1: number): boolean;
        getBlockSpeedFactor(): number;
        onInsideBubbleColumn(arg0: boolean): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        alignPassenger(arg0: Internal.Entity_): void;
        handler$bfj000$sliceanddice$baseTick(arg0: Internal.CallbackInfo_): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getBoardingCooldown(): number;
        tryCheckInsideBlocks(): void;
        hasPermissions(arg0: number): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        onInsideBlock(arg0: Internal.BlockState_): void;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        readSpawnData(arg0: Internal.FriendlyByteBuf_): void;
        getXaero_OPAC_contraption(): Internal.ICreateContraption;
        getControllingPassenger(): Internal.LivingEntity;
        getRemainingFireTicks(): number;
        limitPistonMovement(arg0: Vec3d_): Vec3d;
        getScriptType(): Internal.ScriptType;
        registerColliding(arg0: Internal.Entity_): void;
        onlyOpCanSetNbt(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        serializeNBT(): Internal.Tag;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        fireImmune(): boolean;
        getMaxFallDistance(): number;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getId(): number;
        writeSpawnData(arg0: Internal.FriendlyByteBuf_): void;
        canBeHitByProjectile(): boolean;
        postMagnetJump(): void;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        getDynamicLightZ(): number;
        getEyeY(): number;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        isDescending(): boolean;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        getYHeadRot(): number;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        handler$bia000$dsurround$playStepSound(pos: BlockPos_, state: Internal.BlockState_, ci: Internal.CallbackInfo_): void;
        getSwimSound(): Internal.SoundEvent;
        dismountsUnderwater(): boolean;
        playerTouch(arg0: Internal.Player_): void;
        addTag(arg0: string): boolean;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        getEyeHeight(arg0: Internal.Pose_): number;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        doWaterSplashEffect(): void;
        getTeam(): Internal.Team;
        canAddPassenger(arg0: Internal.Entity_): boolean;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        startControlling(arg0: BlockPos_, arg1: Internal.Player_): boolean;
        handler$dkl000$alexscaves$ac_collide(arg0: Vec3d_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        damageSources(): Internal.DamageSources;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        abstract reverseRotation(arg0: Vec3d_, arg1: number): Vec3d;
        setTicksFrozen(arg0: number): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        getMyRidingOffset(): number;
        canStartSwimming(): boolean;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        hasCustomName(): boolean;
        isLiving(): boolean;
        isGlowing(): boolean;
        getX(): number;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        isVehicle(): boolean;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        stepOnMagnetBlock(arg0: BlockPos_): void;
        getLeashOffset(): Vec3d;
        resetDynamicLight(): void;
        isAttackable(): boolean;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        processPortalCooldown(): void;
        getContraptionName(): net.minecraft.network.chat.Component;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        getXaero_OPAC_deadPlayer(): Internal.UUID;
        setIsInPowderSnow(arg0: boolean): void;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        getPrevPositionVec(): Vec3d;
        handleNetherPortal(): void;
        getSlot(arg0: number): Internal.SlotAccess;
        lambdynlights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        getTeamId(): string;
        setPortalTimeout(timeout: number): void;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        isUnderWater(): boolean;
        getSwimHighSpeedSplashSound(): Internal.SoundEvent;
        stopRiding(): void;
        getBoundingBoxForPose(arg0: Internal.Pose_): Internal.AABB;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        getX(arg0: number): number;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        getLuminance(): number;
        callUnsetRemoved(): void;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        collide(arg0: Vec3d_): Vec3d;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getPassengerPosition(arg0: Internal.Entity_, arg1: number): Vec3d;
        hasPassenger(arg0: Internal.Entity_): boolean;
        be_getTravelerState(): Internal.TravelerState;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        getDynamicLightX(): number;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): net.minecraft.network.chat.Component;
        handleInsidePortal(arg0: BlockPos_): void;
        create$callSetLevel(arg0: Internal.Level_): void;
        calculateViewVector(arg0: number, arg1: number): Vec3d;
        toLocalVector(arg0: Vec3d_, arg1: number, arg2: boolean): Vec3d;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        toGlobalVector(arg0: Vec3d_, arg1: number, arg2: boolean): Vec3d;
        playSound(arg0: Internal.SoundEvent_): void;
        makeBoundingBox(): Internal.AABB;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        onBelowWorld(): void;
        isOnRails(): boolean;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        restoreFrom(arg0: Internal.Entity_): void;
        reapplyPosition(): void;
        getDimensionChangingDelay(): number;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        collisionEnabled(): boolean;
        setYaw(arg0: number): void;
        toGlobalVector(arg0: Vec3d_, arg1: number): Vec3d;
        getPickRadius(): number;
        notify(): void;
        getFirstTick(): boolean;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        setXaero_OPAC_deadPlayer(arg0: Internal.UUID_): void;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        getStringUuid(): string;
        isRemoved(): boolean;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        getRotationVector(): Internal.Vec2;
        refreshDimensions(): void;
        self(): Internal.Entity;
        isSprinting(): boolean;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getMotionY(): number;
        canCollideWith(arg0: Internal.Entity_): boolean;
        setShiftKeyDown(arg0: boolean): void;
        getEyePosition(arg0: number): Vec3d;
        getPassengers(): Internal.EntityArrayList;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        calculateUpVector(arg0: number, arg1: number): Vec3d;
        spawnSprintParticle(): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        canSpawnSprintParticle(): boolean;
        checkSupportingBlock(arg0: boolean, arg1: Vec3d_): void;
        canRide(arg0: Internal.Entity_): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getServer(): Internal.MinecraftServer;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        getOnPos(arg0: number): BlockPos;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        isAddedToWorld(): boolean;
        getFirstPassenger(): Internal.Entity;
        handler$dkl000$alexscaves$ac_turn(arg0: number, arg1: number, arg2: Internal.CallbackInfo_): void;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        getRelativePortalPosition(arg0: Internal.Direction$Axis_, arg1: Internal.BlockUtil$FoundRectangle_): Vec3d;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): InteractionResult;
        removePassenger(arg0: Internal.Entity_): void;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        checkSlowFallDistance(): void;
        updateInWaterStateAndDoWaterCurrentPushing(): void;
        getSoundSource(): Internal.SoundSource;
        setFabricBalmData(arg0: Internal.CompoundTag_): void;
        addPassenger(arg0: Internal.Entity_): void;
        removeAfterChangingDimensions(): void;
        getPose(): Internal.Pose;
        touchingUnloadedChunk(): boolean;
        getSharedFlag(arg0: number): boolean;
        setBlock(arg0: BlockPos_, arg1: Internal.StructureTemplate$StructureBlockInfo_): void;
        getLookAngle(): Vec3d;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        checkFallDamage(arg0: number, arg1: boolean, arg2: Internal.BlockState_, arg3: BlockPos_): void;
        handler$fba000$create$onFireImmune(arg0: Internal.CallbackInfoReturnable_<any>): void;
        static yawFromVector(arg0: Vec3d_): number;
        getPermissionLevel(): number;
        getMotionZ(): number;
        removeVehicle(): void;
        abstract defineSynchedData(): void;
        setXaero_OPAC_lastChunkEntryDimension(arg0: Internal.ResourceKey_<any>): void;
        nextStep(): number;
        isInvisible(): boolean;
        checkInsideBlocks(): void;
        is(arg0: Internal.Entity_): boolean;
        setZ(z: number): void;
        /**
         * @deprecated
        */
        getBlockStateOnLegacy(): Internal.BlockState;
        getY(): number;
        ejectPassengers(): void;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        createHoverEvent(): Internal.HoverEvent;
        getProfile(): Internal.GameProfile;
        static setViewScale(arg0: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        getExitPortal(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: boolean, arg3: Internal.WorldBorder_): Internal.Optional<Internal.BlockUtil$FoundRectangle>;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        playMuffledStepSound(arg0: Internal.BlockState_, arg1: BlockPos_): void;
        handler$chh003$ars_nouveau$onTick(arg0: Internal.CallbackInfo_): void;
        canChangeDirection(): boolean;
        shouldUpdateDynamicLight(): boolean;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        static build(arg0: Internal.EntityType$Builder_<any>): Internal.EntityType$Builder<any>;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        position(): Vec3d;
        displayFireAnimation(): boolean;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        getContactPointMotion(arg0: Vec3d_): Vec3d;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        waterSwimSound(): void;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        abstract readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
        setY(y: number): void;
        getFeetBlockState(): Internal.BlockState;
        lavaHurt(): void;
        handleDamageEvent(arg0: Internal.DamageSource_): void;
        getFabricBalmData(): Internal.CompoundTag;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        canChangeDimensions(): boolean;
        getCommandSenderWorld(): Internal.Level;
        isHorizontalCollisionMinor(arg0: Vec3d_): boolean;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        setXaero_OPAC_lootOwner(arg0: Internal.UUID_): void;
        setSharedFlag(arg0: number, arg1: boolean): void;
        handler$dkl000$alexscaves$ac_getEyePosition(arg0: Internal.CallbackInfoReturnable_<any>): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getCustomName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        processFlappingMovement(): void;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getFireImmuneTicks(): number;
        dynamicLightTick(): void;
        getFacing(): Internal.Direction;
        setMagneticDeltaY(arg0: number): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        isSwimming(): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setRot(arg0: number, arg1: number): void;
        setPortalCooldown(): void;
        setX(x: number): void;
        trackingPosition(): Vec3d;
        setMagneticDeltaX(arg0: number): void;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        getPortalWaitTime(): number;
        isInWater(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: Internal.DamageSource_): void;
        getBlockStateOn(): Internal.BlockState;
        abstract applyLocalTransforms(arg0: Internal.PoseStack_, arg1: number): void;
        getFluidJumpThreshold(): number;
        unsetRemoved(): void;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        /**
         * @deprecated
        */
        fixupDimensions(): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        getRootVehicle(): Internal.Entity;
        save(arg0: Internal.CompoundTag_): boolean;
        handler$chh000$ars_nouveau$onRemove(arg0: Internal.CallbackInfo_): void;
        repositionEntityAfterLoad(): boolean;
        setBoardingCooldown(arg0: number): void;
        getBlockPosBelowThatAffectsMyMovement(): BlockPos;
        moveTowardsClosestSpace(arg0: number, arg1: number, arg2: number): void;
        isNoGravity(): boolean;
        getStepHeight(): number;
        static getCollisionHorizontalEscapeVector(arg0: number, arg1: number, arg2: number): Vec3d;
        acceptsFailure(): boolean;
        setMagneticDeltaZ(arg0: number): void;
        playCombinationStepSounds(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: BlockPos_): void;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        getXaero_OPAC_lastChunkEntryDimension(): Internal.ResourceKey<any>;
        setOldPosAndRot(): void;
        isAliveOrStale(): boolean;
        getXaero_OPAC_lootOwner(): Internal.UUID;
        bookshelf$createHoverEvent(): Internal.HoverEvent;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        updateSwimming(): void;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        findDimensionEntryPoint(arg0: Internal.ServerLevel_): Internal.PortalInfo;
        wait(): void;
        getUuid(): Internal.UUID;
        spawn(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        shouldShowName(): boolean;
        markHurt(): void;
        isReadyForRender(): boolean;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        setSilent(arg0: boolean): void;
        hasExactlyOnePlayerPassenger(): boolean;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        kill(): void;
        getSwimSplashSound(): Internal.SoundEvent;
        isOnPortalCooldown(): boolean;
        playSwimSound(arg0: number): void;
        animateHurt(arg0: number): void;
        static pitchFromVector(arg0: Vec3d_): number;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        handleEntityEvent(arg0: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        getParts(): Internal.PartEntity<any>[];
        isAlwaysTicking(): boolean;
        getPortalTimeout(): number;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): InteractionResult;
        deserializeNBT(arg0: Internal.Tag_): void;
        positionRider(arg0: Internal.Entity_, arg1: Internal.Entity$MoveFunction_): void;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        revive(): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        getBbWidth(): number;
        /**
         * @deprecated
        */
        couldAcceptPassenger(): boolean;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getForgePersistentData(): Internal.CompoundTag;
        addDeltaMovement(arg0: Vec3d_): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        "getName()"(): net.minecraft.network.chat.Component;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        getYawOffset(): number;
        getTypeName(): net.minecraft.network.chat.Component;
        getTicksRequiredToFreeze(): number;
        /**
         * @deprecated
        */
        maxUpStep(): number;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        isAlive(): boolean;
        getBbHeight(): number;
        getUsername(): string;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        getPrimaryStepSoundBlockPos(arg0: BlockPos_): BlockPos;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        handler$ehj000$edenring$eden_checkOutOfWorld(info: Internal.CallbackInfo_): void;
        getPickResult(): Internal.ItemStack;
        getPercentFrozen(): number;
        getRandomY(): number;
        setPortalCooldown(arg0: number): void;
        getDisplayName(): net.minecraft.network.chat.Component;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        shouldBeSaved(): boolean;
        fabric_hasPersistentAttachments(): boolean;
        canRiderInteract(): boolean;
        getViewXRot(arg0: number): number;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        fabric_getAttachments(): Internal.Map<any, any>;
        removeTag(arg0: string): boolean;
        setPose(arg0: Internal.Pose_): void;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        notifyAll(): void;
        getPassengersRidingOffset(): number;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        abstract getRotationState(): Internal.AbstractContraptionEntity$ContraptionRotationState;
        move(arg0: number, arg1: number, arg2: number): void;
        "getServer()"(): Internal.MinecraftServer;
        isFrame(): boolean;
        refreshPSIs(): void;
        setYBodyRot(arg0: number): void;
        isPushable(): boolean;
        discard(): void;
        onClientRemoval(): void;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        setNoGravity(arg0: boolean): void;
        getAttached(type: Internal.AttachmentType_<any>): any;
        setRotation(yaw: number, pitch: number): void;
        isDynamicLightEnabled(): boolean;
        getMagneticDeltaZ(): number;
        createCommandSourceStack(): Internal.CommandSourceStack;
        isControlledByLocalInstance(): boolean;
        handler$ehj000$edenring$eden_entityTick(info: Internal.CallbackInfo_): void;
        isMonster(): boolean;
        getControllingPlayer(): Internal.Optional<Internal.UUID>;
        setId(arg0: number): void;
        getHorizontalFacing(): Internal.Direction;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getType(): string;
        getLightProbePosition(arg0: number): Vec3d;
        control(arg0: BlockPos_, arg1: Internal.Collection_<number>, arg2: Internal.Player_): boolean;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        getPrevAnchorVec(): Vec3d;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        playStepSound(arg0: BlockPos_, arg1: Internal.BlockState_): void;
        checkDespawn(): void;
        getDynamicLightWorld(): Internal.Level;
        isInvulnerableTo(arg0: Internal.DamageSource_): boolean;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        maybeBackOffFromEdge(arg0: Vec3d_, arg1: Internal.MoverType_): Vec3d;
        newFloatList(...arg0: number[]): Internal.ListTag;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        isStalled(): boolean;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        getMagneticAttachmentFace(): Internal.Direction;
        disassemble(): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        isFlapping(): boolean;
        getEyeHeight(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        static getViewScale(): number;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        getMovementEmission(): Internal.Entity$MovementEmission;
        distanceToEntity(arg0: Internal.Entity_): number;
        getVisualRotationYInDegrees(): number;
        getMagneticDeltaY(): number;
        wait(arg0: number, arg1: number): void;
        isDiscrete(): boolean;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        extinguish(): void;
        setDynamicLightEnabled(arg0: boolean): void;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        moveTo(arg0: Vec3d_): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        updateInWaterStateAndDoFluidPushing(): boolean;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getBlockJumpFactor(): number;
        lambdynlights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        tell(message: net.minecraft.network.chat.Component_): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getDistanceSq(pos: BlockPos_): number;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        playEntityOnFireExtinguishedSound(): void;
        getClassification(arg0: boolean): MobCategory;
        setControllingPlayer(arg0: Internal.UUID_): void;
        isFreezing(): boolean;
        isFullyFrozen(): boolean;
        runCommand(command: string): number;
        handler$dkl000$alexscaves$ac_isInWater(arg0: Internal.CallbackInfoReturnable_<any>): void;
        setSharedFlagOnFire(arg0: boolean): void;
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get magneticDeltaX(): number
        get blockZ(): number
        get suppressingBounce(): boolean
        get silent(): boolean
        get pitch(): number
        get onFire(): boolean
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get positionCodec(): Internal.VecDeltaCodec
        set magneticAttachmentFace(arg0: Internal.Direction_)
        set maxUpStep(arg0: number)
        set contraptionMotion(arg0: Vec3d_)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        get prevMagneticAttachmentFace(): Internal.Direction
        get visuallyCrawling(): boolean
        set motionZ(z: number)
        get blockY(): number
        get spectator(): boolean
        get inWaterOrBubble(): boolean
        get persistentData(): Internal.CompoundTag
        get portalCooldown(): number
        get item(): Internal.ItemStack
        get anchorVec(): Vec3d
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get ignoringBlockTriggers(): boolean
        get inRain(): boolean
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        set level(arg0: Internal.Level_)
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        get blockX(): number
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get encodeId(): string
        get contraption(): Internal.Contraption
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        get name(): net.minecraft.network.chat.Component
        get dynamicLightY(): number
        get controlledVehicle(): Internal.Entity
        get blockSpeedFactor(): number
        get eyePosition(): Vec3d
        get eyeHeight(): number
        get yaw(): number
        get boardingCooldown(): number
        set customNameVisible(arg0: boolean)
        get xaero_OPAC_contraption(): Internal.ICreateContraption
        get controllingPassenger(): Internal.LivingEntity
        get remainingFireTicks(): number
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        get maxFallDistance(): number
        get id(): number
        get ticksFrozen(): number
        get dynamicLightZ(): number
        get eyeY(): number
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get descending(): boolean
        get YHeadRot(): number
        get swimSound(): Internal.SoundEvent
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get myRidingOffset(): number
        set deltaMovement(arg0: Vec3d_)
        get living(): boolean
        get glowing(): boolean
        get x(): number
        get vehicle(): boolean
        get leashOffset(): Vec3d
        get attackable(): boolean
        get contraptionName(): net.minecraft.network.chat.Component
        get xaero_OPAC_deadPlayer(): Internal.UUID
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: net.minecraft.network.chat.Component_)
        get prevPositionVec(): Vec3d
        get teamId(): string
        set portalTimeout(timeout: number)
        get underWater(): boolean
        get swimHighSpeedSplashSound(): Internal.SoundEvent
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get luminance(): number
        get deltaMovement(): Vec3d
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        get dynamicLightX(): number
        set secondsOnFire(arg0: number)
        get "displayName()"(): net.minecraft.network.chat.Component
        get onRails(): boolean
        get dimensionChangingDelay(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        set yaw(arg0: number)
        get pickRadius(): number
        get firstTick(): boolean
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        set xaero_OPAC_deadPlayer(arg0: Internal.UUID_)
        get stringUuid(): string
        get removed(): boolean
        set swimming(arg0: boolean)
        get rotationVector(): Internal.Vec2
        get sprinting(): boolean
        get motionY(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get firstPassenger(): Internal.Entity
        get soundSource(): Internal.SoundSource
        set fabricBalmData(arg0: Internal.CompoundTag_)
        get pose(): Internal.Pose
        get lookAngle(): Vec3d
        get permissionLevel(): number
        get motionZ(): number
        set xaero_OPAC_lastChunkEntryDimension(arg0: Internal.ResourceKey_<any>)
        get invisible(): boolean
        set z(z: number)
        /**
         * @deprecated
        */
        get blockStateOnLegacy(): Internal.BlockState
        get y(): number
        get profile(): Internal.GameProfile
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get airSupply(): number
        get crouching(): boolean
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get fabricBalmData(): Internal.CompoundTag
        get commandSenderWorld(): Internal.Level
        set xaero_OPAC_lootOwner(arg0: Internal.UUID_)
        get customName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        get fireImmuneTicks(): number
        get facing(): Internal.Direction
        set magneticDeltaY(arg0: number)
        get swimming(): boolean
        get boundingBoxForCulling(): Internal.AABB
        set sprinting(arg0: boolean)
        set x(x: number)
        set magneticDeltaX(arg0: number)
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get portalWaitTime(): number
        get inWater(): boolean
        get blockStateOn(): Internal.BlockState
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get rootVehicle(): Internal.Entity
        set boardingCooldown(arg0: number)
        get blockPosBelowThatAffectsMyMovement(): BlockPos
        get noGravity(): boolean
        get stepHeight(): number
        set magneticDeltaZ(arg0: number)
        get xaero_OPAC_lastChunkEntryDimension(): Internal.ResourceKey<any>
        get aliveOrStale(): boolean
        get xaero_OPAC_lootOwner(): Internal.UUID
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        get uuid(): Internal.UUID
        get readyForRender(): boolean
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        set silent(arg0: boolean)
        get swimSplashSound(): Internal.SoundEvent
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get alwaysTicking(): boolean
        get portalTimeout(): number
        get bbWidth(): number
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get "name()"(): net.minecraft.network.chat.Component
        get inFluidType(): boolean
        get yawOffset(): number
        get typeName(): net.minecraft.network.chat.Component
        get ticksRequiredToFreeze(): number
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get username(): string
        get tags(): Internal.Set<string>
        get pickable(): boolean
        set YHeadRot(arg0: number)
        get pickResult(): Internal.ItemStack
        get percentFrozen(): number
        get randomY(): number
        set portalCooldown(arg0: number)
        get displayName(): net.minecraft.network.chat.Component
        set position(block: Internal.BlockContainerJS_)
        set pose(arg0: Internal.Pose_)
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        get passengersRidingOffset(): number
        get rotationState(): Internal.AbstractContraptionEntity$ContraptionRotationState
        get "server()"(): Internal.MinecraftServer
        get frame(): boolean
        set YBodyRot(arg0: number)
        get pushable(): boolean
        set motionY(y: number)
        set noGravity(arg0: boolean)
        get dynamicLightEnabled(): boolean
        get magneticDeltaZ(): number
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get controllingPlayer(): Internal.Optional<Internal.UUID>
        set id(arg0: number)
        get horizontalFacing(): Internal.Direction
        get type(): string
        get prevAnchorVec(): Vec3d
        get passenger(): boolean
        get dynamicLightWorld(): Internal.Level
        get stalled(): boolean
        get magneticAttachmentFace(): Internal.Direction
        get flapping(): boolean
        get viewScale(): number
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get movementEmission(): Internal.Entity$MovementEmission
        get visualRotationYInDegrees(): number
        get magneticDeltaY(): number
        get discrete(): boolean
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        set dynamicLightEnabled(arg0: boolean)
        get blockJumpFactor(): number
        set controllingPlayer(arg0: Internal.UUID_)
        get freezing(): boolean
        get fullyFrozen(): boolean
        set sharedFlagOnFire(arg0: boolean)
        staleTicks: number;
        readonly collidingEntities: Internal.Map<Internal.Entity, Internal.MutableInt>;
    }
    type AbstractContraptionEntity_ = AbstractContraptionEntity;
    class BaseCropBlock extends Internal.BasePlantBlock implements Internal.SurvivesOnBlocks {
        constructor(drop: Internal.Item_, ...terrain: Internal.Block_[])
        handler$cag000$betterend$be_getDroppedStacks(state: Internal.BlockState_, builder: Internal.LootParams$Builder_, info: Internal.CallbackInfoReturnable_<any>): void;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        performBonemeal(level: Internal.ServerLevel_, random: Internal.RandomSource_, pos: BlockPos_, state: Internal.BlockState_): void;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        isTerrain(state: Internal.BlockState_): boolean;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        static splitLines(input: string): Internal.List<string>;
        getSpeedFactor(): number;
        registerBlockModel(stateId: ResourceLocation_, modelId: ResourceLocation_, blockState: Internal.BlockState_, modelCache: Internal.Map_<ResourceLocation, Internal.UnbakedModel>): void;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        canSuffocate(state: Internal.BlockState_, view: Internal.BlockGetter_, pos: BlockPos_): boolean;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        getDrops(state: Internal.BlockState_, builder: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        getModelVariant(stateId: ResourceLocation_, blockState: Internal.BlockState_, modelCache: Internal.Map_<ResourceLocation, Internal.UnbakedModel>): Internal.UnbakedModel;
        asBlock(): Internal.Block;
        getSurvivableBlocks(): Internal.List<Internal.Block>;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(state: Internal.BlockState_, world: Internal.ServerLevel_, pos: BlockPos_, random: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        isBonemealSuccess(level: Internal.Level_, random: Internal.RandomSource_, pos: BlockPos_, state: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        handler$cjp000$bclib$appendSurvivalBlock(itemStack: Internal.ItemStack_, blockGetter: Internal.BlockGetter_, list: Internal.List_<any>, tooltipFlag: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        isSimpleFullBlock(state: Internal.BlockState_, view: Internal.BlockGetter_, pos: BlockPos_): boolean;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        getBlockModel(resourceLocation: ResourceLocation_, blockState: Internal.BlockState_): Internal.BlockModel;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(state: Internal.BlockState_, facing: Internal.Direction_, neighborState: Internal.BlockState_, world: Internal.LevelAccessor_, pos: BlockPos_, neighborPos: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        prefixComponent(): string;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        getRenderLayer(): Internal.BCLRenderLayer;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getItemModel(resourceLocation: ResourceLocation_): Internal.BlockModel;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        canSurviveOnTop(world: Internal.LevelReader_, pos: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        allowsSpawning(state: Internal.BlockState_, view: Internal.BlockGetter_, pos: BlockPos_, type: Internal.EntityType_<any>): boolean;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        isValidBonemealTarget(world: Internal.LevelReader_, pos: BlockPos_, state: Internal.BlockState_, isClient: boolean): boolean;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        static appendHoverTextUnderwater(list: Internal.List_<net.minecraft.network.chat.Component>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(state: Internal.BlockState_, level: Internal.LevelReader_, pos: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        static appendHoverText(surv: Internal.SurvivesOnSpecialGround_, list: Internal.List_<net.minecraft.network.chat.Component>): void;
        isSurvivable(state: Internal.BlockState_): boolean;
        static appendHoverTextUnderwaterInDepth(list: Internal.List_<net.minecraft.network.chat.Component>, depth: number): void;
        canSurviveOnBottom(world: Internal.LevelReader_, pos: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        getSurvivableBlocksString(): string;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(state: Internal.BlockState_, view: Internal.BlockGetter_, pos: BlockPos_, ePos: Internal.CollisionContext_): Internal.VoxelShape;
        lychee$setTickable(arg0: boolean): void;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get survivableBlocks(): Internal.List<Internal.Block>
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        get renderLayer(): Internal.BCLRenderLayer
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get survivableBlocksString(): string
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly AGE: (Internal.IntegerProperty) & (Internal.IntegerProperty);
    }
    type BaseCropBlock_ = BaseCropBlock;
    interface BoilerHeaterHandlerEvent$BoilerHeaterCallback {
        abstract updateHeat(arg0: Internal.BlockContainerJS_): number;
        (arg0: Internal.BlockContainerJS): number;
    }
    type BoilerHeaterHandlerEvent$BoilerHeaterCallback_ = BoilerHeaterHandlerEvent$BoilerHeaterCallback | ((arg0: Internal.BlockContainerJS)=> number);
    class QIOItemViewerContainer$SortDirection extends Internal.Enum<Internal.QIOItemViewerContainer$SortDirection> implements Internal.GuiComponents$IToggleEnum<Internal.QIOItemViewerContainer$SortDirection> {
        getTooltip(): net.minecraft.network.chat.Component;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static values(): Internal.QIOItemViewerContainer$SortDirection[];
        isAscending(): boolean;
        getIcon(): ResourceLocation;
        toString(): string;
        "compareTo(mekanism.common.inventory.container.QIOItemViewerContainer$SortDirection)"(arg0: Internal.QIOItemViewerContainer$SortDirection_): number;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        static valueOf(name: string): Internal.QIOItemViewerContainer$SortDirection;
        wait(arg0: number): void;
        getDeclaringClass(): typeof Internal.QIOItemViewerContainer$SortDirection;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.QIOItemViewerContainer$SortDirection>>;
        compareTo(arg0: Internal.QIOItemViewerContainer$SortDirection_): number;
        get tooltip(): net.minecraft.network.chat.Component
        get class(): typeof any
        get ascending(): boolean
        get icon(): ResourceLocation
        get declaringClass(): typeof Internal.QIOItemViewerContainer$SortDirection
        static readonly ASCENDING: (Internal.QIOItemViewerContainer$SortDirection) & (Internal.QIOItemViewerContainer$SortDirection);
        static readonly DESCENDING: (Internal.QIOItemViewerContainer$SortDirection) & (Internal.QIOItemViewerContainer$SortDirection);
    }
    type QIOItemViewerContainer$SortDirection_ = QIOItemViewerContainer$SortDirection | "ascending" | "descending";
    class ShapelessTagRecipe extends Internal.ShapelessRecipe {
        constructor(arg0: ResourceLocation_, arg1: string, arg2: Internal.CraftingBookCategory_, arg3: Internal.NonNullList_<Internal.Ingredient>, arg4: any_)
        constructor(arg0: ResourceLocation_, arg1: string, arg2: Internal.CraftingBookCategory_, arg3: Internal.NonNullList_<Internal.Ingredient>, arg4: string, arg5: number)
        getClass(): typeof any;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        matches(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        getSchema(): Internal.RecipeSchema;
        handler$cmc000$bclib$bcl_getRemainingItems(container: net.minecraft.world.Container_, cir: Internal.CallbackInfoReturnable_<any>): void;
        "matches(net.minecraft.world.inventory.CraftingContainer,net.minecraft.world.level.Level)"(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        "assemble(net.minecraft.world.Container,net.minecraft.core.RegistryAccess)"(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        notify(): void;
        getRemainingItems(arg0: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        wait(arg0: number, arg1: number): void;
        assemble(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        category(): Internal.CraftingBookCategory;
        getSerializer(): Internal.RecipeSerializer<any>;
        assemble(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getId(): ResourceLocation;
        handler$boa000$fabric_recipe_api_v1$customIngredientMatch(craftingInventory: Internal.CraftingContainer_, world: Internal.Level_, cir: Internal.CallbackInfoReturnable_<any>): void;
        matches(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        toString(): string;
        "assemble(net.minecraft.world.inventory.CraftingContainer,net.minecraft.core.RegistryAccess)"(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        notifyAll(): void;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        "matches(net.minecraft.world.Container,net.minecraft.world.level.Level)"(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        hashCode(): number;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        wait(): void;
        isIncomplete(): boolean;
        wait(arg0: number): void;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
    }
    type ShapelessTagRecipe_ = ShapelessTagRecipe;
    class StringSplitter {
        constructor(arg0: Internal.StringSplitter$WidthProvider_)
        plainIndexAtWidth(arg0: string, arg1: number, arg2: Internal.Style_): number;
        getClass(): typeof any;
        stringWidth(arg0: Internal.FormattedText_): number;
        stringWidth(arg0: string): number;
        "stringWidth(net.minecraft.network.chat.FormattedText)"(arg0: Internal.FormattedText_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "componentStyleAtWidth(net.minecraft.util.FormattedCharSequence,int)"(arg0: Internal.FormattedCharSequence_, arg1: number): Internal.Style;
        headByWidth(arg0: Internal.FormattedText_, arg1: number, arg2: Internal.Style_): Internal.FormattedText;
        splitLines(arg0: Internal.FormattedText_, arg1: number, arg2: Internal.Style_, arg3: Internal.FormattedText_): Internal.List<Internal.FormattedText>;
        componentStyleAtWidth(arg0: Internal.FormattedCharSequence_, arg1: number): Internal.Style;
        stringWidth(arg0: Internal.FormattedCharSequence_): number;
        "stringWidth(net.minecraft.util.FormattedCharSequence)"(arg0: Internal.FormattedCharSequence_): number;
        findLineBreak(arg0: string, arg1: number, arg2: Internal.Style_): number;
        "splitLines(net.minecraft.network.chat.FormattedText,int,net.minecraft.network.chat.Style)"(arg0: Internal.FormattedText_, arg1: number, arg2: Internal.Style_): Internal.List<Internal.FormattedText>;
        splitLines(arg0: Internal.FormattedText_, arg1: number, arg2: Internal.Style_): Internal.List<Internal.FormattedText>;
        static getWordPosition(arg0: string, arg1: number, arg2: number, arg3: boolean): number;
        plainTailByWidth(arg0: string, arg1: number, arg2: Internal.Style_): string;
        toString(): string;
        plainHeadByWidth(arg0: string, arg1: number, arg2: Internal.Style_): string;
        notifyAll(): void;
        "stringWidth(java.lang.String)"(arg0: string): number;
        "splitLines(net.minecraft.network.chat.FormattedText,int,net.minecraft.network.chat.Style,net.minecraft.network.chat.FormattedText)"(arg0: Internal.FormattedText_, arg1: number, arg2: Internal.Style_, arg3: Internal.FormattedText_): Internal.List<Internal.FormattedText>;
        splitLines(arg0: string, arg1: number, arg2: Internal.Style_): Internal.List<Internal.FormattedText>;
        "splitLines(net.minecraft.network.chat.FormattedText,int,net.minecraft.network.chat.Style,java.util.function.BiConsumer)"(arg0: Internal.FormattedText_, arg1: number, arg2: Internal.Style_, arg3: Internal.BiConsumer_<Internal.FormattedText, boolean>): void;
        splitLines(arg0: string, arg1: number, arg2: Internal.Style_, arg3: boolean, arg4: Internal.StringSplitter$LinePosConsumer_): void;
        formattedHeadByWidth(arg0: string, arg1: number, arg2: Internal.Style_): string;
        componentStyleAtWidth(arg0: Internal.FormattedText_, arg1: number): Internal.Style;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        formattedIndexByWidth(arg0: string, arg1: number, arg2: Internal.Style_): number;
        "componentStyleAtWidth(net.minecraft.network.chat.FormattedText,int)"(arg0: Internal.FormattedText_, arg1: number): Internal.Style;
        equals(arg0: any): boolean;
        splitLines(arg0: Internal.FormattedText_, arg1: number, arg2: Internal.Style_, arg3: Internal.BiConsumer_<Internal.FormattedText, boolean>): void;
        "splitLines(java.lang.String,int,net.minecraft.network.chat.Style)"(arg0: string, arg1: number, arg2: Internal.Style_): Internal.List<Internal.FormattedText>;
        get class(): typeof any
        readonly widthProvider: Internal.StringSplitter$WidthProvider;
    }
    type StringSplitter_ = StringSplitter;
    class PocketPistonItem extends Internal.WearableArtifactItem {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        static isActivated(stack: Internal.ItemStack_): boolean;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        getFortuneLevel(): number;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        modifyReturnValue$ecn000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        makesPiglinsNeutral(): boolean;
        onUnequip(entity: Internal.LivingEntity_, stack: Internal.ItemStack_): void;
        isEquippedBy(entity: Internal.LivingEntity_): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        toggleItem(player: Internal.ServerPlayer_): void;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        isCosmetic(): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        static setActivated(stack: Internal.ItemStack_, active: boolean): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        modifyReturnValue$ecn000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        addCooldown(entity: Internal.LivingEntity_, ticks: number): void;
        isOnCooldown(entity: Internal.LivingEntity_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        getLootingLevel(): number;
        wornTick(entity: Internal.LivingEntity_, stack: Internal.ItemStack_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        addAttributeModifier(attributeModifier: Internal.ArtifactAttributeModifier_): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEquipSound(): Internal.SoundEvent;
        canWalkOnPowderedSnow(): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        getAttributeModifiers(): Internal.List<Internal.ArtifactAttributeModifier>;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        appendHoverText(stack: Internal.ItemStack_, world: Internal.Level_, tooltipList: Internal.List_<any>, flags: Internal.TooltipFlag_): void;
        handler$daa000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        hasNonCosmeticEffects(): boolean;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        findAllEquippedBy(entity: Internal.LivingEntity_): Internal.Stream<Internal.ItemStack>;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        onEquip(entity: Internal.LivingEntity_, stack: Internal.ItemStack_): void;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        get fortuneLevel(): number
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get cosmetic(): boolean
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get lootingLevel(): number
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        get equipSound(): Internal.SoundEvent
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get attributeModifiers(): Internal.List<Internal.ArtifactAttributeModifier>
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type PocketPistonItem_ = PocketPistonItem;
    class EndRodBlock extends Internal.RodBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        handler$cag000$betterend$be_getDroppedStacks(state: Internal.BlockState_, builder: Internal.LootParams$Builder_, info: Internal.CallbackInfoReturnable_<any>): void;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        handler$cjp000$bclib$appendSurvivalBlock(itemStack: Internal.ItemStack_, blockGetter: Internal.BlockGetter_, list: Internal.List_<any>, tooltipFlag: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        lychee$setTickable(arg0: boolean): void;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type EndRodBlock_ = EndRodBlock;
    class DrawBuffer {
        constructor(arg0: Internal.RenderType_)
        getClass(): typeof any;
        inject(arg0: Internal.BufferBuilderExtension_): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasVertices(): boolean;
        begin(arg0: number): Internal.DirectVertexConsumer;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        reset(): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type DrawBuffer_ = DrawBuffer;
    abstract class BotanicalBlock <T extends Internal.BotanicalTile, C extends Internal.BlockEntityMenu<T>> extends Internal.MenuBlockBE<T, C> {
        constructor(arg0: Internal.ModX_, arg1: T, arg2: Internal.MenuType_<C>, arg3: boolean, arg4: boolean)
        handler$cag000$betterend$be_getDroppedStacks(state: Internal.BlockState_, builder: Internal.LootParams$Builder_, info: Internal.CallbackInfoReturnable_<any>): void;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getListener<X extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: X): Internal.GameEventListener;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        registerCommon(arg0: Internal.SetupContext_): void;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        initializeItemClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        handler$cjp000$bclib$appendSurvivalBlock(itemStack: Internal.ItemStack_, blockGetter: Internal.BlockGetter_, list: Internal.List_<any>, tooltipFlag: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getBlockEntity(arg0: Internal.Level_, arg1: BlockPos_): T;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        getBlockEntityType(): Internal.BlockEntityType<T>;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getTicker<X extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<X>): Internal.BlockEntityTicker<X>;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        makeCreativeTabStacks(): Internal.Stream<Internal.ItemStack>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        registerAdditional(arg0: Internal.RegistrationContext_, arg1: Internal.Registerable$EntryCollector_): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        initTracking(arg0: Internal.RegistrationContext_, arg1: Internal.Registerable$TrackingCollector_): void;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        registerClient(arg0: Internal.SetupContext_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        lychee$setTickable(arg0: boolean): void;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get blockEntityType(): Internal.BlockEntityType<T>
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        readonly specialRender: boolean;
        static readonly FRAME_SHAPE: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        readonly fullCube: boolean;
    }
    type BotanicalBlock_<T extends Internal.BotanicalTile, C extends Internal.BlockEntityMenu<T>> = BotanicalBlock<T, C>;
    class ChargingStationBlock$ItemBlockChargingStation extends Internal.BlockItem {
        constructor(arg0: Internal.Block_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        static setBlockEntityData(arg0: Internal.ItemStack_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        modifyReturnValue$ecn000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        canPlace(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getBlockEntityData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        removeFromBlockToItemMap(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        static updateCustomBlockEntityTag(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getPlaceSound(arg0: Internal.BlockState_): Internal.SoundEvent;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        getBlock(): Internal.Block;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        registerBlocks(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        mustSurvive(): boolean;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getPlaceSound(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): Internal.SoundEvent;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        modifyReturnValue$ecn000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        quark$getPlacementState(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getPlacementState(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        updateCustomBlockEntityTag(arg0: BlockPos_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.ItemStack_, arg4: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        place(arg0: Internal.BlockPlaceContext_): InteractionResult;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        updatePlacementContext(arg0: Internal.BlockPlaceContext_): Internal.BlockPlaceContext;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        placeBlock(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$daa000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        get block(): Internal.Block
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type ChargingStationBlock$ItemBlockChargingStation_ = ChargingStationBlock$ItemBlockChargingStation;
    class TubeModuleItem extends Internal.Item {
        constructor(arg0: Internal.BiFunction_<Internal.Direction, Internal.PressureTubeBlockEntity, Internal.AbstractTubeModule>)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        createModule(arg0: Internal.Direction_, arg1: Internal.PressureTubeBlockEntity_): Internal.AbstractTubeModule;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        modifyReturnValue$ecn000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        modifyReturnValue$ecn000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        handler$daa000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type TubeModuleItem_ = TubeModuleItem;
    interface GeoBlockEntity extends Internal.GeoAnimatable {
        abstract getAnimatableInstanceCache(): Internal.AnimatableInstanceCache;
        animatableCacheOverride(): Internal.AnimatableInstanceCache;
        getAnimData<D>(arg0: Internal.SerializableDataTicket_<D>): D;
        getBoneResetTime(): number;
        triggerAnim(arg0: string, arg1: string): void;
        abstract registerControllers(arg0: Internal.AnimatableManager$ControllerRegistrar_): void;
        shouldPlayAnimsWhileGamePaused(): boolean;
        getTick(arg0: any): number;
        setAnimData<D>(arg0: Internal.SerializableDataTicket_<D>, arg1: D): void;
        get animatableInstanceCache(): Internal.AnimatableInstanceCache
        get boneResetTime(): number
    }
    type GeoBlockEntity_ = GeoBlockEntity;
    class BlockModel$GuiLight extends Internal.Enum<Internal.BlockModel$GuiLight> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.BlockModel$GuiLight>>;
        "compareTo(net.minecraft.client.renderer.block.model.BlockModel$GuiLight)"(arg0: Internal.BlockModel$GuiLight_): number;
        toString(): string;
        lightLikeBlock(): boolean;
        getSerializedName(): string;
        notifyAll(): void;
        getDeclaringClass(): typeof Internal.BlockModel$GuiLight;
        notify(): void;
        static values(): Internal.BlockModel$GuiLight[];
        compareTo(arg0: Internal.BlockModel$GuiLight_): number;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        static getByName(arg0: string): Internal.BlockModel$GuiLight;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        static valueOf(arg0: string): Internal.BlockModel$GuiLight;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.BlockModel$GuiLight
        static readonly SIDE: (Internal.BlockModel$GuiLight) & (Internal.BlockModel$GuiLight);
        static readonly FRONT: (Internal.BlockModel$GuiLight) & (Internal.BlockModel$GuiLight);
    }
    type BlockModel$GuiLight_ = "side" | BlockModel$GuiLight | "front";
    class CableBusRenderState {
        constructor()
        getClass(): typeof any;
        setCableColor(arg0: Internal.AEColor_): void;
        setCoreType(arg0: Internal.CableCoreType_): void;
        getCableBusAdjacent(): Internal.EnumSet<Internal.Direction>;
        setChannelsOnSide(arg0: Internal.EnumMap_<Internal.Direction, number>): void;
        getBoundingBoxes(): Internal.List<Internal.AABB>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getPos(): BlockPos;
        getCableType(): Internal.AECableType;
        getAttachmentConnections(): Internal.EnumMap<Internal.Direction, number>;
        setConnectionTypes(arg0: Internal.EnumMap_<Internal.Direction, Internal.AECableType>): void;
        setCableBusAdjacent(arg0: Internal.EnumSet_<Internal.Direction>): void;
        getFacades(): Internal.EnumMap<Internal.Direction, Internal.FacadeRenderState>;
        getCableColor(): Internal.AEColor;
        toString(): string;
        setPos(arg0: BlockPos_): void;
        notifyAll(): void;
        getCoreType(): Internal.CableCoreType;
        getAttachments(): Internal.EnumMap<Internal.Direction, Internal.IPartModel>;
        hashCode(): number;
        getChannelsOnSide(): Internal.EnumMap<Internal.Direction, number>;
        wait(): void;
        setCableType(arg0: Internal.AECableType_): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getConnectionTypes(): Internal.EnumMap<Internal.Direction, Internal.AECableType>;
        getPartModelData(): Internal.EnumMap<Internal.Direction, Internal.ModelData>;
        get class(): typeof any
        set cableColor(arg0: Internal.AEColor_)
        set coreType(arg0: Internal.CableCoreType_)
        get cableBusAdjacent(): Internal.EnumSet<Internal.Direction>
        set channelsOnSide(arg0: Internal.EnumMap_<Internal.Direction, number>)
        get boundingBoxes(): Internal.List<Internal.AABB>
        get pos(): BlockPos
        get cableType(): Internal.AECableType
        get attachmentConnections(): Internal.EnumMap<Internal.Direction, number>
        set connectionTypes(arg0: Internal.EnumMap_<Internal.Direction, Internal.AECableType>)
        set cableBusAdjacent(arg0: Internal.EnumSet_<Internal.Direction>)
        get facades(): Internal.EnumMap<Internal.Direction, Internal.FacadeRenderState>
        get cableColor(): Internal.AEColor
        set pos(arg0: BlockPos_)
        get coreType(): Internal.CableCoreType
        get attachments(): Internal.EnumMap<Internal.Direction, Internal.IPartModel>
        get channelsOnSide(): Internal.EnumMap<Internal.Direction, number>
        set cableType(arg0: Internal.AECableType_)
        get connectionTypes(): Internal.EnumMap<Internal.Direction, Internal.AECableType>
        get partModelData(): Internal.EnumMap<Internal.Direction, Internal.ModelData>
        static readonly PROPERTY: Internal.ModelProperty<Internal.CableBusRenderState>;
    }
    type CableBusRenderState_ = CableBusRenderState;
    class RotorShaftState extends Internal.Enum<Internal.RotorShaftState> implements Internal.StringRepresentable {
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static getBladesDirections(arg0: Internal.Direction$Axis_): Internal.Direction[];
        getSerializedName(): string;
        "compareTo(it.zerono.mods.extremereactors.gamecontent.multiblock.turbine.rotor.RotorShaftState)"(arg0: Internal.RotorShaftState_): number;
        notify(): void;
        getAxis(): Internal.Direction$Axis;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.RotorShaftState>>;
        compareTo(arg0: Internal.RotorShaftState_): number;
        static values(): Internal.RotorShaftState[];
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        static valueOf(arg0: string): Internal.RotorShaftState;
        toString(): string;
        static getDefault(): Internal.RotorShaftState;
        notifyAll(): void;
        name(): string;
        getDeclaringClass(): typeof Internal.RotorShaftState;
        hashCode(): number;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get serializedName(): string
        get axis(): Internal.Direction$Axis
        get "default"(): Internal.RotorShaftState
        get declaringClass(): typeof Internal.RotorShaftState
        static readonly Z_NOBLADES: (Internal.RotorShaftState) & (Internal.RotorShaftState);
        static readonly Y_XZ: (Internal.RotorShaftState) & (Internal.RotorShaftState);
        static readonly Z_XY: (Internal.RotorShaftState) & (Internal.RotorShaftState);
        static readonly HIDDEN: (Internal.RotorShaftState) & (Internal.RotorShaftState);
        static readonly X_YZ: (Internal.RotorShaftState) & (Internal.RotorShaftState);
        static readonly Y_X: (Internal.RotorShaftState) & (Internal.RotorShaftState);
        static readonly X_Z: (Internal.RotorShaftState) & (Internal.RotorShaftState);
        static VALUES: Internal.RotorShaftState[];
        static readonly Y_NOBLADES: (Internal.RotorShaftState) & (Internal.RotorShaftState);
        static readonly X_Y: (Internal.RotorShaftState) & (Internal.RotorShaftState);
        static readonly Z_X: (Internal.RotorShaftState) & (Internal.RotorShaftState);
        static readonly Y_Z: (Internal.RotorShaftState) & (Internal.RotorShaftState);
        static readonly Z_Y: (Internal.RotorShaftState) & (Internal.RotorShaftState);
        static readonly X_NOBLADES: (Internal.RotorShaftState) & (Internal.RotorShaftState);
    }
    type RotorShaftState_ = "y_xz" | RotorShaftState | "y_x" | "x_y" | "x_z" | "y_z" | "z_y" | "z_x" | "z_noblades" | "y_noblades" | "z_xy" | "x_yz" | "x_noblades" | "hidden";
    class CrystallizationRecipe$Serializer implements Internal.RecipeSerializer<Internal.CrystallizationRecipe> {
        constructor()
        getClass(): typeof any;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        toString(): string;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.item.crafting.Recipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,sirttas.elementalcraft.recipe.instrument.CrystallizationRecipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.CrystallizationRecipe_): void;
        notifyAll(): void;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.CrystallizationRecipe_): void;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.CrystallizationRecipe;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        notify(): void;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        wait(arg0: number, arg1: number): void;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.CrystallizationRecipe;
        static readIngredients(arg0: Internal.JsonObject_): Internal.NonNullList<Internal.Ingredient>;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        hashCode(): number;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.CrystallizationRecipe;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        wait(): void;
        wait(arg0: number): void;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.CrystallizationRecipe;
        equals(arg0: any): boolean;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.CrystallizationRecipe;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        get class(): typeof any
    }
    type CrystallizationRecipe$Serializer_ = CrystallizationRecipe$Serializer;
}
declare namespace it.unimi.dsi.fastutil.ints {
    interface IntConsumer extends Internal.Consumer<number>, Internal.IntConsumer {
        andThen(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): this;
        "andThen(it.unimi.dsi.fastutil.ints.IntConsumer)"(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): this;
        "andThen(java.util.function.IntConsumer)"(arg0: Internal.IntConsumer_): Internal.IntConsumer;
        /**
         * @deprecated
        */
        accept(arg0: any): void;
        /**
         * @deprecated
        */
        "andThen(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): Internal.Consumer<number>;
        /**
         * @deprecated
        */
        andThen(arg0: Internal.Consumer_<number>): Internal.Consumer<number>;
        abstract accept(arg0: number): void;
        /**
         * @deprecated
        */
        "accept(java.lang.Integer)"(arg0: number): void;
        /**
         * @deprecated
        */
        "accept(java.lang.Object)"(arg0: any): void;
        /**
         * @deprecated
        */
        accept(arg0: number): void;
        andThen(arg0: Internal.IntConsumer_): Internal.IntConsumer;
        abstract "accept(int)"(arg0: number): void;
    }
    type IntConsumer_ = IntConsumer;
}
declare namespace wayoftime.bloodmagic.common.registration.impl {
    class RecipeTypeRegistryObject <RECIPE extends Internal.BloodMagicRecipe> extends wayoftime.bloodmagic.common.registration.WrappedRegistryObject<Internal.RecipeType<RECIPE>> {
        constructor(arg0: Internal.RegistryObject_<Internal.RecipeType<RECIPE>>)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        get(): Internal.RecipeType<RECIPE>;
        getInternalRegistryName(): string;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get internalRegistryName(): string
    }
    type RecipeTypeRegistryObject_<RECIPE extends Internal.BloodMagicRecipe> = RecipeTypeRegistryObject<RECIPE>;
}
declare namespace icyllis.modernui.view {
    interface MenuItem {
        abstract setVisible(arg0: boolean): this;
        abstract getMenuInfo(): Internal.ContextMenu$ContextMenuInfo;
        abstract setTitleCondensed(arg0: Internal.CharSequence_): this;
        abstract collapseActionView(): boolean;
        setNumericShortcut(numericChar: string, numericModifiers: number): this;
        abstract getAlphabeticShortcut(): string;
        abstract getIcon(): icyllis.modernui.graphics.drawable.Drawable;
        getTooltipText(): Internal.CharSequence;
        abstract setActionView(arg0: icyllis.modernui.view.View_): this;
        abstract getActionView(): icyllis.modernui.view.View;
        abstract getItemId(): number;
        abstract setActionProvider(arg0: Internal.ActionProvider_): this;
        setContentDescription(contentDescription: Internal.CharSequence_): this;
        abstract getTitleCondensed(): Internal.CharSequence;
        getAlphabeticModifiers(): number;
        abstract isCheckable(): boolean;
        abstract expandActionView(): boolean;
        abstract isVisible(): boolean;
        abstract setShowAsAction(arg0: number): void;
        abstract getActionProvider(): Internal.ActionProvider;
        abstract setShortcut(arg0: string, arg1: string): this;
        abstract isActionViewExpanded(): boolean;
        setShortcut(numericChar: string, alphaChar: string, numericModifiers: number, alphaModifiers: number): this;
        abstract isChecked(): boolean;
        getIconTintList(): Internal.ColorStateList;
        setIconTintList(tint: Internal.ColorStateList_): this;
        abstract setTitle(arg0: Internal.CharSequence_): this;
        getNumericModifiers(): number;
        abstract setNumericShortcut(arg0: string): this;
        abstract isEnabled(): boolean;
        abstract setOnMenuItemClickListener(arg0: Internal.MenuItem$OnMenuItemClickListener_): this;
        getContentDescription(): Internal.CharSequence;
        abstract setEnabled(arg0: boolean): this;
        abstract getGroupId(): number;
        abstract getTitle(): Internal.CharSequence;
        abstract setShowAsActionFlags(arg0: number): this;
        abstract hasSubMenu(): boolean;
        abstract setCheckable(arg0: boolean): this;
        abstract setOnActionExpandListener(arg0: Internal.MenuItem$OnActionExpandListener_): this;
        requiresActionButton(): boolean;
        abstract setAlphabeticShortcut(arg0: string): this;
        abstract getSubMenu(): Internal.SubMenu;
        abstract getNumericShortcut(): string;
        setTooltipText(tooltipText: Internal.CharSequence_): this;
        abstract getOrder(): number;
        setAlphabeticShortcut(alphaChar: string, alphaModifiers: number): this;
        abstract setIcon(arg0: icyllis.modernui.graphics.drawable.Drawable_): this;
        abstract setChecked(arg0: boolean): this;
        requiresOverflow(): boolean;
        set visible(arg0: boolean)
        get menuInfo(): Internal.ContextMenu$ContextMenuInfo
        set titleCondensed(arg0: Internal.CharSequence_)
        get alphabeticShortcut(): string
        get icon(): icyllis.modernui.graphics.drawable.Drawable
        get tooltipText(): Internal.CharSequence
        set actionView(arg0: icyllis.modernui.view.View_)
        get actionView(): icyllis.modernui.view.View
        get itemId(): number
        set actionProvider(arg0: Internal.ActionProvider_)
        set contentDescription(contentDescription: Internal.CharSequence_)
        get titleCondensed(): Internal.CharSequence
        get alphabeticModifiers(): number
        get checkable(): boolean
        get visible(): boolean
        set showAsAction(arg0: number)
        get actionProvider(): Internal.ActionProvider
        get actionViewExpanded(): boolean
        get checked(): boolean
        get iconTintList(): Internal.ColorStateList
        set iconTintList(tint: Internal.ColorStateList_)
        set title(arg0: Internal.CharSequence_)
        get numericModifiers(): number
        set numericShortcut(arg0: string)
        get enabled(): boolean
        set onMenuItemClickListener(arg0: Internal.MenuItem$OnMenuItemClickListener_)
        get contentDescription(): Internal.CharSequence
        set enabled(arg0: boolean)
        get groupId(): number
        get title(): Internal.CharSequence
        set showAsActionFlags(arg0: number)
        set checkable(arg0: boolean)
        set onActionExpandListener(arg0: Internal.MenuItem$OnActionExpandListener_)
        set alphabeticShortcut(arg0: string)
        get subMenu(): Internal.SubMenu
        get numericShortcut(): string
        set tooltipText(tooltipText: Internal.CharSequence_)
        get order(): number
        set icon(arg0: icyllis.modernui.graphics.drawable.Drawable_)
        set checked(arg0: boolean)
        readonly SHOW_AS_ACTION_NEVER: (0) & (number);
        readonly SHOW_AS_ACTION_ALWAYS: (2) & (number);
        readonly SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW: (8) & (number);
        readonly SHOW_AS_ACTION_WITH_TEXT: (4) & (number);
        readonly SHOW_AS_ACTION_IF_ROOM: (1) & (number);
    }
    type MenuItem_ = MenuItem;
}
declare namespace xaero.map.server.radar.tracker {
    class SyncedTrackedPlayer {
        constructor(arg0: Internal.UUID_, arg1: number, arg2: number, arg3: number, arg4: Internal.ResourceKey_<Internal.Level>)
        getClass(): typeof any;
        setPos(arg0: number, arg1: number, arg2: number): this;
        toString(): string;
        matchesEnough(arg0: Internal.Player_, arg1: number): boolean;
        notifyAll(): void;
        notify(): void;
        update(arg0: Internal.Player_): void;
        wait(arg0: number, arg1: number): void;
        getX(): number;
        getY(): number;
        setDimension(arg0: Internal.ResourceKey_<Internal.Level>): this;
        getZ(): number;
        hashCode(): number;
        getDimension(): Internal.ResourceKey<Internal.Level>;
        copyFrom(arg0: xaero.map.server.radar.tracker.SyncedTrackedPlayer_): void;
        wait(): void;
        getId(): Internal.UUID;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get x(): number
        get y(): number
        set dimension(arg0: Internal.ResourceKey_<Internal.Level>)
        get z(): number
        get dimension(): Internal.ResourceKey<Internal.Level>
        get id(): Internal.UUID
    }
    type SyncedTrackedPlayer_ = SyncedTrackedPlayer;
}
