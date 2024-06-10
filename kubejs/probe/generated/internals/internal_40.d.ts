/// <reference path="./internal_*.d.ts" />
declare namespace com.enderio.conduits.common.blockentity {
    class ConduitBlockEntity extends Internal.EnderBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        requestModelDataUpdate(): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        addCapabilityProvider(arg0: Internal.IEnderCapabilityProvider_<any>): void;
        invalidateCaps(arg0: Internal.Direction_): void;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        load(arg0: Internal.CompoundTag_): void;
        setChanged(): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        updateClient(): void;
        setRemoved(): void;
        menuProvider(arg0: Internal.Direction_, arg1: Internal.IConduitType_<any>): Internal.MenuProvider;
        clientUpdateSlot<T>(arg0: Internal.NetworkDataSlot_<T>, arg1: T): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        handleExtendedDataUpdate(arg0: Internal.IConduitType_<any>, arg1: Internal.CompoundTag_): void;
        getType(): Internal.BlockEntityType<any>;
        addType(arg0: Internal.IConduitType_<any>, arg1: Internal.Player_): Internal.RightClickAction;
        serverHandleBufferChange(arg0: Internal.FriendlyByteBuf_): void;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        hasType(arg0: Internal.IConduitType_<any>): boolean;
        everyTick(): void;
        getRenderBoundingBox(): Internal.AABB;
        getClass(): typeof any;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        onChunkUnloaded(): void;
        addAfterSyncRunnable(arg0: Internal.Runnable_): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        getBundle(): Internal.ConduitBundle;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        getUpdatePacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        fabric_hasPersistentAttachments(): boolean;
        clearRemoved(): void;
        getCapabilityProviders(): Internal.Map<Internal.Capability<any>, Internal.IEnderCapabilityProvider<any>>;
        dropConnection(arg0: Internal.DynamicConnectionState_): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        clientHandleBufferSync(arg0: Internal.FriendlyByteBuf_): void;
        fabric_getAttachments(): Internal.Map<any, any>;
        sync(): void;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        static pushIOState(arg0: Internal.Direction_, arg1: Internal.NodeIdentifier_<any>, arg2: Internal.DynamicConnectionState_): void;
        updateConnections(arg0: Internal.Level_, arg1: BlockPos_, arg2: BlockPos_, arg3: boolean): void;
        removeNeighborConnections(arg0: Internal.IConduitType_<any>): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getConduitItemHandler(): Internal.IItemHandler;
        wait(arg0: number): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        reviveCaps(): void;
        getAttached(type: Internal.AttachmentType_<any>): any;
        handleConnectionStateUpdate(arg0: Internal.Direction_, arg1: Internal.IConduitType_<any>, arg2: Internal.DynamicConnectionState_): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        getUpdateTag(): Internal.CompoundTag;
        getRenderAttachmentData(): any;
        tryConnectTo(arg0: Internal.Direction_, arg1: Internal.IConduitType_<any>, arg2: boolean, arg3: boolean): Internal.Optional<Internal.GraphObject<Internal.Mergeable$Dummy>>;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setLevel(arg0: Internal.Level_): void;
        notify(): void;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        onLoad(): void;
        serverTick(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        invalidateCaps(): void;
        getBlockState(): Internal.BlockState;
        addDataSlot(arg0: Internal.NetworkDataSlot_<any>): void;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveAdditional(arg0: Internal.CompoundTag_): void;
        saveWithId(): Internal.CompoundTag;
        updateEmptyDynConnection(): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        removeTypeAndDelete(arg0: Internal.IConduitType_<any>): void;
        static setChanged(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        onlyOpCanSetNbt(): boolean;
        serializeNBT(): Internal.Tag;
        static tick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.EnderBlockEntity_): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        clientTick(): void;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        removeType(arg0: Internal.IConduitType_<any>, arg1: boolean): boolean;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        stillValid(arg0: Internal.Player_): boolean;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        updateShape(): void;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getModelData(): Internal.ModelData;
        getRenderData(): any;
        getShape(): Internal.ConduitShape;
        updateConnectionToData(arg0: Internal.IConduitType_<any>): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get type(): Internal.BlockEntityType<any>
        get renderBoundingBox(): Internal.AABB
        get class(): typeof any
        get bundle(): Internal.ConduitBundle
        get updatePacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get capabilityProviders(): Internal.Map<Internal.Capability<any>, Internal.IEnderCapabilityProvider<any>>
        get persistentData(): Internal.CompoundTag
        get conduitItemHandler(): Internal.IItemHandler
        get updateTag(): Internal.CompoundTag
        get renderAttachmentData(): any
        set level(arg0: Internal.Level_)
        get blockPos(): BlockPos
        get removed(): boolean
        get blockState(): Internal.BlockState
        get level(): Internal.Level
        get modelData(): Internal.ModelData
        get renderData(): any
        get shape(): Internal.ConduitShape
        static readonly BUNDLE_MODEL_PROPERTY: Internal.ModelProperty<Internal.ConduitBundle>;
        static readonly POS: Internal.ModelProperty<BlockPos>;
    }
    type ConduitBlockEntity_ = ConduitBlockEntity;
}
declare namespace Internal {
    class Chapter extends Internal.QuestObject {
        constructor(id: number, file: Internal.BaseQuestFile_, group: Internal.ChapterGroup_)
        constructor(id: number, file: Internal.BaseQuestFile_, group: Internal.ChapterGroup_, filename: string)
        getMutableTitle(): Internal.MutableComponent;
        isAlwaysInvisible(): boolean;
        getRawSubtitle(): Internal.List<string>;
        readData(nbt: Internal.CompoundTag_): void;
        getIndex(): number;
        isAutofocus(id: number): boolean;
        clearCachedData(): void;
        getRawTitle(): string;
        getDefaultQuestShape(): string;
        getProgressColor(data: Internal.TeamData_): Internal.Color4I;
        cacheProgress(): boolean;
        deleteSelf(): void;
        getProgressionMode(): Internal.ProgressionMode;
        isDefaultRepeatable(): boolean;
        hasUnclaimedRewardsRaw(teamData: Internal.TeamData_, player: Internal.UUID_): boolean;
        isValid(): boolean;
        onCompleted(data: Internal.QuestProgressEventData_<any>): void;
        static parseCodeString(id: string): number;
        deleteChildren(): void;
        getTags(): Internal.Set<string>;
        getChildren(): Internal.Collection<Internal.QuestObject>;
        setRawIcon(rawIcon: Internal.ItemStack_): void;
        static shouldSendNotifications(): boolean;
        getAutofocus(): Internal.Optional<Internal.Movable>;
        "compareTo(java.lang.Object)"(arg0: any): number;
        getAltIcon(): Internal.Icon;
        getClass(): typeof any;
        getProgressColor(data: Internal.TeamData_, dim: boolean): Internal.Color4I;
        static copy<T extends Internal.QuestObjectBase>(orig: T, factory: Internal.Supplier_<T>): T;
        hideQuestDetailsUntilStartable(): boolean;
        hasAnyVisibleChildren(): boolean;
        isOptionalForProgression(): boolean;
        fillConfigGroup(config: Internal.ConfigGroup_): void;
        setDefaultQuestShape(defaultQuestShape: string): void;
        addQuest(quest: Internal.Quest_): void;
        "compareTo(dev.ftb.mods.ftbquests.quest.QuestObjectBase)"(other: Internal.QuestObjectBase_): number;
        setRawTitle(rawTitle: string): void;
        toString(): string;
        onStarted(data: Internal.QuestProgressEventData_<any>): void;
        getDefaultQuestSize(): number;
        notifyAll(): void;
        getObjectType(): Internal.QuestObjectType;
        forceProgressRaw(teamData: Internal.TeamData_, progressChange: Internal.ProgressChange_): void;
        addQuestLink(link: Internal.QuestLink_): void;
        getImages(): Internal.List<Internal.ChapterImage>;
        removeQuestLink(link: Internal.QuestLink_): void;
        editedFromGUIOnServer(): void;
        wait(arg0: number): void;
        getGroup(): Internal.ChapterGroup;
        consumeItems(): boolean;
        getRelativeProgressFromChildren(data: Internal.TeamData_): number;
        isCompletedRaw(data: Internal.TeamData_): boolean;
        writeData(nbt: Internal.CompoundTag_): void;
        editedFromGUI(): void;
        notify(): void;
        addImage(image: Internal.ChapterImage_): void;
        compareTo(arg0: any): number;
        getQuests(): Internal.List<Internal.Quest>;
        static isNull(object: Internal.QuestObjectBase_): boolean;
        removeQuest(quest: Internal.Quest_): void;
        isRequireSequentialTasks(): boolean;
        getDefaultMinWidth(): number;
        static getID(object: Internal.QuestObjectBase_): number;
        componentsToRefresh(): Internal.Set<Internal.RecipeModHelper$Components>;
        setAutofocus(id: number): void;
        static getRelativeProgressFromChildren(progressSum: number, count: number): number;
        forceProgress(teamData: Internal.TeamData_, progressChange: Internal.ProgressChange_): void;
        static "getCodeString(dev.ftb.mods.ftbquests.quest.QuestObjectBase)"(object: Internal.QuestObjectBase_): string;
        wait(): void;
        getTitle(): net.minecraft.network.chat.Component;
        static titleToID(s: string): Internal.Optional<string>;
        onEditButtonClicked(gui: Internal.Runnable_): void;
        static getCodeString(object: Internal.QuestObjectBase_): string;
        getCodeString(): string;
        static getCodeString(id: number): string;
        createSubGroup(group: Internal.ConfigGroup_): Internal.ConfigGroup;
        getParentID(): number;
        wait(arg0: number, arg1: number): void;
        getIcon(): Internal.Icon;
        getFilename(): string;
        getAltTitle(): net.minecraft.network.chat.Component;
        static "getCodeString(long)"(id: number): string;
        readNetData(buffer: Internal.FriendlyByteBuf_): void;
        hasTag(tag: string): boolean;
        getQuestLinks(): Internal.List<Internal.QuestLink>;
        compareTo(other: Internal.QuestObjectBase_): number;
        getQuestChapter(): this;
        getQuestFile(): Internal.BaseQuestFile;
        removeImage(image: Internal.ChapterImage_): void;
        static parseHexId(id: string): Internal.Optional<number>;
        hashCode(): number;
        getPath(): Internal.Optional<string>;
        writeNetData(buffer: Internal.FriendlyByteBuf_): void;
        isVisible(data: Internal.TeamData_): boolean;
        onCreated(): void;
        hasGroup(): boolean;
        equals(object: any): boolean;
        hideQuestUntilDepsVisible(): boolean;
        get mutableTitle(): Internal.MutableComponent
        get alwaysInvisible(): boolean
        get rawSubtitle(): Internal.List<string>
        get index(): number
        get rawTitle(): string
        get defaultQuestShape(): string
        get progressionMode(): Internal.ProgressionMode
        get defaultRepeatable(): boolean
        get valid(): boolean
        get tags(): Internal.Set<string>
        get children(): Internal.Collection<Internal.QuestObject>
        set rawIcon(rawIcon: Internal.ItemStack_)
        get autofocus(): Internal.Optional<Internal.Movable>
        get altIcon(): Internal.Icon
        get class(): typeof any
        get optionalForProgression(): boolean
        set defaultQuestShape(defaultQuestShape: string)
        set rawTitle(rawTitle: string)
        get defaultQuestSize(): number
        get objectType(): Internal.QuestObjectType
        get images(): Internal.List<Internal.ChapterImage>
        get group(): Internal.ChapterGroup
        get quests(): Internal.List<Internal.Quest>
        get requireSequentialTasks(): boolean
        get defaultMinWidth(): number
        set autofocus(id: number)
        get title(): net.minecraft.network.chat.Component
        get codeString(): string
        get parentID(): number
        get icon(): Internal.Icon
        get filename(): string
        get altTitle(): net.minecraft.network.chat.Component
        get questLinks(): Internal.List<Internal.QuestLink>
        get questChapter(): Internal.Chapter
        get questFile(): Internal.BaseQuestFile
        get path(): Internal.Optional<string>
        readonly file: Internal.BaseQuestFile;
    }
    type Chapter_ = Chapter;
    class DensityFunctions$Clamp extends Internal.Record implements Internal.DensityFunctions$PureTransformer {
        constructor(arg0: Internal.DensityFunction_, arg1: number, arg2: number)
        getClass(): typeof any;
        abs(): Internal.DensityFunction;
        halfNegative(): Internal.DensityFunction;
        toString(): string;
        maxValue(): number;
        notifyAll(): void;
        codec(): Internal.KeyDispatchDataCodec<Internal.DensityFunction>;
        compute(arg0: Internal.DensityFunction$FunctionContext_): number;
        squeeze(): Internal.DensityFunction;
        transform(arg0: number): number;
        square(): Internal.DensityFunction;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        mapAll(arg0: Internal.DensityFunction$Visitor_): Internal.DensityFunction;
        clamp(arg0: number, arg1: number): Internal.DensityFunction;
        hashCode(): number;
        quarterNegative(): Internal.DensityFunction;
        wait(): void;
        cube(): Internal.DensityFunction;
        wait(arg0: number): void;
        fillArray(arg0: number[], arg1: Internal.DensityFunction$ContextProvider_): void;
        minValue(): number;
        input(): Internal.DensityFunction;
        equals(arg0: any): boolean;
        get class(): typeof any
        static readonly CODEC: Internal.KeyDispatchDataCodec<Internal.DensityFunctions$Clamp>;
    }
    type DensityFunctions$Clamp_ = DensityFunctions$Clamp;
    class MutablePair <L, R> extends org.apache.commons.lang3.tuple.Pair<L, R> {
        constructor()
        constructor(arg0: L, arg1: R)
        getClass(): typeof any;
        getLeft(): L;
        static of<L, R>(arg0: L, arg1: R): Internal.MutablePair<L, R>;
        getRight(): R;
        compareTo(arg0: org.apache.commons.lang3.tuple.Pair_<L, R>): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "compareTo(org.apache.commons.lang3.tuple.Pair)"(arg0: org.apache.commons.lang3.tuple.Pair_<L, R>): number;
        compareTo(arg0: any): number;
        static copyOf<K, V>(arg0: Internal.Map$Entry_<K, V>): Internal.Map$Entry<K, V>;
        static comparingByKey<K extends Internal.Comparable<any>, V>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        setRight(arg0: R): void;
        setLeft(arg0: L): void;
        toString(arg0: string): string;
        getKey(): L;
        static comparingByKey<K, V>(arg0: Internal.Comparator_<K>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        toString(): string;
        notifyAll(): void;
        static emptyArray<L, R>(): Internal.MutablePair<L, R>[];
        getValue(): R;
        static comparingByValue<K, V extends Internal.Comparable<any>>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        hashCode(): number;
        static of<L, R>(arg0: Internal.Map$Entry_<L, R>): Internal.MutablePair<L, R>;
        wait(): void;
        wait(arg0: number): void;
        static comparingByValue<K, V>(arg0: Internal.Comparator_<V>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        setValue(arg0: R): R;
        get class(): typeof any
        get left(): L
        get right(): R
        set right(arg0: R)
        set left(arg0: L)
        get key(): L
        get value(): R
        set value(arg0: R)
        left: L;
        right: R;
        static readonly EMPTY_ARRAY: Internal.MutablePair<any, any>[];
    }
    type MutablePair_<L, R> = MutablePair<L, R>;
    interface SurvivesOnAmberMoss extends Internal.SurvivesOnBlocks {
        prefixComponent(): string;
        getSurvivableBlocksString(): string;
        appendHoverTextUnderwater(list: Internal.List_<net.minecraft.network.chat.Component>): void;
        isTerrain(state: Internal.BlockState_): boolean;
        appendHoverText(surv: Internal.SurvivesOnSpecialGround_, list: Internal.List_<net.minecraft.network.chat.Component>): void;
        isSurvivable(state: Internal.BlockState_): boolean;
        canSurviveOnTop(world: Internal.LevelReader_, pos: BlockPos_): boolean;
        appendHoverTextUnderwaterInDepth(list: Internal.List_<net.minecraft.network.chat.Component>, depth: number): void;
        canSurviveOnBottom(world: Internal.LevelReader_, pos: BlockPos_): boolean;
        getSurvivableBlocks(): Internal.List<Internal.Block>;
        splitLines(input: string): Internal.List<string>;
        get survivableBlocksString(): string
        get survivableBlocks(): Internal.List<Internal.Block>
        readonly BLOCKS: ([Internal.EndTerrainBlock]) & (Internal.List<Internal.Block>);
    }
    type SurvivesOnAmberMoss_ = SurvivesOnAmberMoss;
    class BrainDebugRenderer$PoiInfo {
        constructor(arg0: BlockPos_, arg1: string, arg2: number)
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
        type: string;
        readonly pos: BlockPos;
        freeTicketCount: number;
    }
    type BrainDebugRenderer$PoiInfo_ = BrainDebugRenderer$PoiInfo;
    class BlockExCharger extends Internal.BlockBaseGui<Internal.TileExCharger> {
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
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.TileExCharger;
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
        openGui(arg0: Internal.AEBaseBlockEntity_, arg1: Internal.Player_): void;
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
        setBlockEntity(arg0: typeof Internal.TileExCharger, arg1: Internal.BlockEntityType_<Internal.TileExCharger>, arg2: Internal.BlockEntityTicker_<Internal.TileExCharger>, arg3: Internal.BlockEntityTicker_<Internal.TileExCharger>): void;
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
        openGui(arg0: Internal.TileExCharger_, arg1: Internal.Player_): void;
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
        "openGui(com.glodblock.github.extendedae.common.tileentities.TileExCharger,net.minecraft.world.entity.player.Player)"(arg0: Internal.TileExCharger_, arg1: Internal.Player_): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        static defaultProps(arg0: Internal.MapColor_, arg1: SoundType_): Internal.BlockBehaviour$Properties;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: number, arg2: number, arg3: number): Internal.TileExCharger;
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
        getBlockEntityType(): Internal.BlockEntityType<Internal.TileExCharger>;
        getMod(): string;
        "openGui(appeng.blockentity.AEBaseBlockEntity,net.minecraft.world.entity.player.Player)"(arg0: Internal.AEBaseBlockEntity_, arg1: Internal.Player_): void;
        check(arg0: Internal.TileExCharger_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: BlockPos_, arg4: Internal.BlockHitResult_, arg5: Internal.Player_): InteractionResult;
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
        get blockEntityType(): Internal.BlockEntityType<Internal.TileExCharger>
        get mod(): string
        get registryName(): ResourceLocation
        set hasCollision(arg0: boolean)
    }
    type BlockExCharger_ = BlockExCharger;
    class BlackHoleUnitTile extends Internal.BHTile<Internal.BlackHoleUnitTile> {
        constructor(arg0: Internal.BasicTileBlock_<Internal.BlackHoleUnitTile>, arg1: Internal.BlockEntityType_<any>, arg2: Internal.Rarity_, arg3: BlockPos_, arg4: Internal.BlockState_)
        serverTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockEntity_): void;
        addFilter(arg0: com.hrznstudio.titanium.api.filter.IFilter_<any>): void;
        getFacingDirection(): Internal.Direction;
        requestModelDataUpdate(): void;
        onNeighborChanged(arg0: Internal.Block_, arg1: BlockPos_): void;
        canInteract(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        markComponentForUpdate(arg0: boolean): void;
        handleButtonMessage(arg0: number, arg1: Internal.Player_, arg2: Internal.CompoundTag_): void;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        load(arg0: Internal.CompoundTag_): void;
        setChanged(): void;
        initClient(): void;
        getMultiButtonComponent(): Internal.MultiButtonComponent;
        updateNeigh(): void;
        addBundle(arg0: Internal.IComponentBundle_): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        "getUpdatePacket()"(): Internal.Packet<any>;
        getTitleColor(): number;
        setRemoved(): void;
        onActivated(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.Direction_, arg3: number, arg4: number, arg5: number): InteractionResult;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getType(): Internal.BlockEntityType<any>;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        addGuiAddonFactory(arg0: Internal.IFactory_<Internal.IScreenAddon>): void;
        "serverTick(net.minecraft.world.level.Level,net.minecraft.core.BlockPos,net.minecraft.world.level.block.state.BlockState,com.buuz135.industrial.block.transportstorage.tile.BlackHoleUnitTile)"(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlackHoleUnitTile_): void;
        getFormatedDisplayAmount(): string;
        "getUpdatePacket()"(): Internal.ClientboundBlockEntityDataPacket;
        addContainerAddonFactory(arg0: Internal.IFactory_<Internal.IContainerAddon>): void;
        getRenderBoundingBox(): Internal.AABB;
        getDisplayName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        setAmount(arg0: number): void;
        getCapability<U>(arg0: Internal.Capability_<U>, arg1: Internal.Direction_): Internal.LazyOptional<U>;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        markForUpdate(): void;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        createMenu(arg0: number, arg1: Internal.Inventory_, arg2: Internal.Player_): Internal.AbstractContainerMenu;
        fabric_hasPersistentAttachments(): boolean;
        clearRemoved(): void;
        isServer(): boolean;
        getUpdatePacket(): Internal.Packet<any>;
        shouldCloseCurrentScreen(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        getComponentWorld(): Internal.Level;
        fabric_getAttachments(): Internal.Map<any, any>;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        getFacingHandlerWorkAmount(): number;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        onClicked(arg0: Internal.Player_): void;
        getHandlerFromName(arg0: string): Internal.IFacingComponent;
        shouldDisplay(): boolean;
        getAssetProvider(): Internal.IAssetProvider;
        syncObject(arg0: any): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getBasicTileBlock(): Internal.BasicTileBlock<Internal.BlackHoleUnitTile>;
        wait(arg0: number): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        reviveCaps(): void;
        getMultiInventoryComponent(): Internal.MultiInventoryComponent<Internal.BlackHoleUnitTile>;
        getAttached(type: Internal.AttachmentType_<any>): any;
        getUpdateTag(): Internal.CompoundTag;
        getRenderAttachmentData(): any;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setLevel(arg0: Internal.Level_): void;
        addTank(arg0: Internal.FluidTankComponent_<Internal.BlackHoleUnitTile>): void;
        notify(): void;
        markComponentDirty(): void;
        openGui(arg0: Internal.Player_): void;
        clientTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlackHoleUnitTile_): void;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        handleSyncObject(arg0: Internal.CompoundTag_): void;
        onLoad(): void;
        getContainerAddons(): Internal.List<Internal.IFactory<Internal.IContainerAddon>>;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        "serverTick(net.minecraft.world.level.Level,net.minecraft.core.BlockPos,net.minecraft.world.level.block.state.BlockState,com.hrznstudio.titanium.block.tile.ActiveTile)"(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.ActiveTile_<any>): void;
        invalidateCaps(): void;
        isClient(): boolean;
        serverTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlackHoleUnitTile_): void;
        getBlockState(): Internal.BlockState;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        isVoidItems(): boolean;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        getSelf(): Internal.ActiveTile<any>;
        getTitleXPos(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        getScreenAddons(): Internal.List<Internal.IFactory<Internal.IScreenAddon>>;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        saveAdditional(arg0: Internal.CompoundTag_): void;
        saveWithId(): Internal.CompoundTag;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        addButton(arg0: Internal.ButtonComponent_): void;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        getWorldPosCallable(): Internal.ContainerLevelAccess;
        static setChanged(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        onlyOpCanSetNbt(): boolean;
        addInventory(arg0: Internal.InventoryComponent_<Internal.BlackHoleUnitTile>): void;
        serializeNBT(): Internal.Tag;
        setStack(arg0: Internal.ItemStack_): void;
        serverTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.ActiveTile_<any>): void;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getTitleYPos(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getRenderData(): any;
        getModelData(): Internal.ModelData;
        getFacingHandlerWorkTime(): number;
        equals(arg0: any): boolean;
        getDisplayStack(): Internal.ItemStack;
        addProgressBar(arg0: Internal.ProgressBarComponent_<Internal.BlackHoleUnitTile>): void;
        "serverTick(net.minecraft.world.level.Level,net.minecraft.core.BlockPos,net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.block.entity.BlockEntity)"(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockEntity_): void;
        get facingDirection(): Internal.Direction
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get multiButtonComponent(): Internal.MultiButtonComponent
        get "updatePacket()"(): Internal.Packet<any>
        get titleColor(): number
        get type(): Internal.BlockEntityType<any>
        get formatedDisplayAmount(): string
        get "updatePacket()"(): Internal.ClientboundBlockEntityDataPacket
        get renderBoundingBox(): Internal.AABB
        get displayName(): net.minecraft.network.chat.Component
        get class(): typeof any
        set amount(arg0: number)
        get server(): boolean
        get updatePacket(): Internal.Packet<any>
        get componentWorld(): Internal.Level
        get persistentData(): Internal.CompoundTag
        get facingHandlerWorkAmount(): number
        get assetProvider(): Internal.IAssetProvider
        get basicTileBlock(): Internal.BasicTileBlock<Internal.BlackHoleUnitTile>
        get multiInventoryComponent(): Internal.MultiInventoryComponent<Internal.BlackHoleUnitTile>
        get updateTag(): Internal.CompoundTag
        get renderAttachmentData(): any
        set level(arg0: Internal.Level_)
        get blockPos(): BlockPos
        get removed(): boolean
        get containerAddons(): Internal.List<Internal.IFactory<Internal.IContainerAddon>>
        get client(): boolean
        get blockState(): Internal.BlockState
        get voidItems(): boolean
        get self(): Internal.ActiveTile<any>
        get screenAddons(): Internal.List<Internal.IFactory<Internal.IScreenAddon>>
        get level(): Internal.Level
        get worldPosCallable(): Internal.ContainerLevelAccess
        set stack(arg0: Internal.ItemStack_)
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get renderData(): any
        get modelData(): Internal.ModelData
        get facingHandlerWorkTime(): number
        get displayStack(): Internal.ItemStack
    }
    type BlackHoleUnitTile_ = BlackHoleUnitTile;
    class ImmutableCollections$SetN <E> extends Internal.ImmutableCollections$AbstractImmutableSet<E> implements Internal.Serializable {
        getClass(): typeof any;
        abstract add(arg0: E): boolean;
        parallelStream(): Internal.Stream<E>;
        isEmpty(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        static of<E>(arg0: E, arg1: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
        contains(arg0: any): boolean;
        abstract addAll(arg0: Internal.Collection_<E>): boolean;
        static "of(java.lang.Object[])"<E>(...arg0: E[]): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        toString(): string;
        forEach(arg0: Internal.Consumer_<E>): void;
        notifyAll(): void;
        toArray<T>(arg0: T[]): T[];
        "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        abstract remove(arg0: any): boolean;
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        toArray(): any[];
        iterator(): Internal.Iterator<E>;
        hashCode(): number;
        size(): number;
        static of<E>(arg0: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        static of<E>(...arg0: E[]): Internal.Set<E>;
        static of<E>(): Internal.Set<E>;
        stream(): Internal.Stream<E>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        wait(): void;
        abstract clear(): void;
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        wait(arg0: number): void;
        spliterator(): Internal.Spliterator<E>;
        equals(arg0: any): boolean;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        static "of(java.lang.Object)"<E>(arg0: E): Internal.Set<E>;
        get class(): typeof any
        get empty(): boolean
    }
    type ImmutableCollections$SetN_<E> = ImmutableCollections$SetN<E>;
    class DisplaySide extends Internal.Enum<Internal.DisplaySide> implements Internal.StringRepresentable {
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        getSerializedName(): string;
        static values(): Internal.DisplaySide[];
        getDeclaringClass(): typeof Internal.DisplaySide;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        "compareTo(net.p3pp3rf1y.sophisticatedcore.renderdata.DisplaySide)"(arg0: Internal.DisplaySide_): number;
        static fromName(arg0: string): Internal.DisplaySide;
        previous(): this;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        toString(): string;
        notifyAll(): void;
        compareTo(arg0: Internal.DisplaySide_): number;
        name(): string;
        hashCode(): number;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.DisplaySide>>;
        ordinal(): number;
        wait(): void;
        next(): this;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static valueOf(arg0: string): Internal.DisplaySide;
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.DisplaySide
        static readonly FRONT: (Internal.DisplaySide) & (Internal.DisplaySide);
        static readonly LEFT: (Internal.DisplaySide) & (Internal.DisplaySide);
        static readonly RIGHT: (Internal.DisplaySide) & (Internal.DisplaySide);
    }
    type DisplaySide_ = "front" | "right" | DisplaySide | "left";
    class BiofuelGeneratorBlock extends Internal.IndustrialBlock<Internal.BiofuelGeneratorTile> {
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
        "getLootTable(com.hrznstudio.titanium.datagenerator.loot.block.BasicBlockLootTables)"(arg0: Internal.BasicBlockLootTables_): Internal.LootTable$Builder;
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
        getRotationType(): Internal.RotatableBlock$RotationType;
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
        getTileClass(): typeof Internal.BiofuelGeneratorTile;
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
        getLootTable(arg0: Internal.BasicBlockLootTables_): Internal.LootTable$Builder;
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
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        getDynamicDrops(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): Internal.NonNullList<Internal.ItemStack>;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
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
        "getLootTable(java.lang.Object)"(arg0: any): Internal.LootTable$Builder;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getTicker<R extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<R>): Internal.BlockEntityTicker<R>;
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
        setItemGroup(arg0: Internal.TitaniumTab_): void;
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
        getBoundingBoxes(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.List<Internal.VoxelShape>;
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
        hasIndividualRenderVoxelShape(): boolean;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        getTile(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.BiofuelGeneratorTile>;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        registerRecipe(arg0: Internal.Consumer_<Internal.FinishedRecipe>): void;
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
        hasCustomBoxes(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
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
        getTileEntityFactory(): Internal.BlockEntityType$BlockEntitySupplier<Internal.BiofuelGeneratorTile>;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        getItemGroup(): Internal.TitaniumTab;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getLootTable(arg0: any): Internal.LootTable$Builder;
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
        get rotationType(): Internal.RotatableBlock$RotationType
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get tileClass(): typeof Internal.BiofuelGeneratorTile
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set itemGroup(arg0: Internal.TitaniumTab_)
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get tileEntityFactory(): Internal.BlockEntityType$BlockEntitySupplier<Internal.BiofuelGeneratorTile>
        get itemGroup(): Internal.TitaniumTab
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type BiofuelGeneratorBlock_ = BiofuelGeneratorBlock;
    class Locale$LanguageRange {
        constructor(arg0: string, arg1: number)
        constructor(arg0: string)
        getWeight(): number;
        getClass(): typeof any;
        toString(): string;
        static parse(arg0: string): Internal.List<Internal.Locale$LanguageRange>;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        static parse(arg0: string, arg1: Internal.Map_<string, Internal.List<string>>): Internal.List<Internal.Locale$LanguageRange>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        static mapEquivalents(arg0: Internal.List_<Internal.Locale$LanguageRange>, arg1: Internal.Map_<string, Internal.List<string>>): Internal.List<Internal.Locale$LanguageRange>;
        getRange(): string;
        get weight(): number
        get class(): typeof any
        get range(): string
        static readonly MAX_WEIGHT: (1.0) & (number);
        static readonly MIN_WEIGHT: (0.0) & (number);
    }
    type Locale$LanguageRange_ = Locale$LanguageRange;
    class ItemBasicNodeUpgrade extends Internal.Item implements Internal.IRouterUpgrade {
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
        getMaxTransferIncrease(arg0: Internal.ItemStack_): number;
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
    type ItemBasicNodeUpgrade_ = ItemBasicNodeUpgrade;
    class VolvoxBlockDense extends org.betterx.bclib.blocks.BaseBlock {
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
        registerBlockModel(stateId: ResourceLocation_, modelId: ResourceLocation_, blockState: Internal.BlockState_, modelCache: Internal.Map_<ResourceLocation, Internal.UnbakedModel>): void;
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
        getBlockModel(resourceLocation: ResourceLocation_, blockState: Internal.BlockState_): Internal.BlockModel;
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
        getItemModel(itemID: ResourceLocation_): Internal.BlockModel;
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
    type VolvoxBlockDense_ = VolvoxBlockDense;
    interface IPortItem extends Internal.IPortPart {
        abstract getModel(): Internal.PortModel;
        abstract getTypeName(): net.minecraft.network.chat.Component;
        get model(): Internal.PortModel
        get typeName(): net.minecraft.network.chat.Component
    }
    type IPortItem_ = IPortItem;
    interface ArgumentType <T> {
        abstract parse(arg0: Internal.StringReader_): T;
        getExamples(): Internal.Collection<string>;
        listSuggestions<S>(arg0: Internal.CommandContext_<S>, arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        get examples(): Internal.Collection<string>
        (arg0: Internal.StringReader): T;
    }
    type ArgumentType_<T> = ((arg0: Internal.StringReader)=> T) | ArgumentType<T>;
    class Capability <T> {
        addListener(arg0: Internal.Consumer_<Internal.Capability<T>>): this;
        getClass(): typeof any;
        toString(): string;
        orEmpty<R>(arg0: Internal.Capability_<R>, arg1: Internal.LazyOptional_<T>): Internal.LazyOptional<R>;
        notifyAll(): void;
        isRegistered(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        getName(): string;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get registered(): boolean
        get name(): string
    }
    type Capability_<T> = Capability<T>;
    class ItemCooldowns implements Internal.AccessorItemCooldowns {
        constructor()
        getClass(): typeof any;
        onCooldownEnded(arg0: Internal.Item_): void;
        toString(): string;
        bookshelf$getCooldowns(): Internal.Map<any, any>;
        notifyAll(): void;
        isOnCooldown(arg0: Internal.Item_): boolean;
        notify(): void;
        removeCooldown(arg0: Internal.Item_): void;
        wait(arg0: number, arg1: number): void;
        tick(): void;
        onCooldownStarted(arg0: Internal.Item_, arg1: number): void;
        hashCode(): number;
        addCooldown(arg0: Internal.Item_, arg1: number): void;
        bookshelf$getTickCount(): number;
        wait(): void;
        getCooldownPercent(arg0: Internal.Item_, arg1: number): number;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type ItemCooldowns_ = ItemCooldowns;
    class DripstoneRecipeType extends Internal.BlockKeyRecipeType<Internal.DripstoneContext, Internal.DripstoneRecipe> {
        constructor(arg0: string, arg1: typeof Internal.DripstoneRecipe, arg2: Internal.LootContextParamSet_)
        process(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.Supplier_<Internal.DripstoneContext>): snownee.lychee.util.Pair<Internal.DripstoneContext, Internal.DripstoneRecipe>;
        getClass(): typeof any;
        tryMatch<D extends net.minecraft.world.Container>(arg0: Internal.Recipe_<D>, arg1: Internal.Level_, arg2: D): Internal.Optional<Internal.DripstoneRecipe>;
        isEmpty(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        recipes(): Internal.List<Internal.DripstoneRecipe>;
        hasSource(arg0: Internal.Block_): boolean;
        "has(net.minecraft.world.level.block.Block)"(arg0: Internal.Block_): boolean;
        findFirst(arg0: Internal.DripstoneContext_, arg1: Internal.Level_): Internal.Optional<Internal.DripstoneRecipe>;
        has(arg0: Internal.Block_): boolean;
        "has(net.minecraft.world.level.block.state.BlockState)"(arg0: Internal.BlockState_): boolean;
        updateEmptyState(): void;
        getPreventDefaultDescription(arg0: Internal.LycheeRecipe_<any>): net.minecraft.network.chat.Component;
        toString(): string;
        notifyAll(): void;
        inViewerRecipes(): Internal.List<Internal.DripstoneRecipe>;
        hashCode(): number;
        blockKeysToItems(): Internal.List<Internal.ItemStack>;
        wait(): void;
        buildCache(): void;
        wait(arg0: number): void;
        static simple<T extends Internal.Recipe<any>>(arg0: ResourceLocation_): Internal.RecipeType<T>;
        process(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: BlockPos_, arg3: Vec3d_, arg4: Internal.LycheeContext$Builder_<Internal.DripstoneContext>): Internal.Optional<Internal.DripstoneRecipe>;
        has(arg0: Internal.BlockState_): boolean;
        static register<T extends Internal.Recipe<any>>(arg0: string): Internal.RecipeType<T>;
        equals(arg0: any): boolean;
        get class(): typeof any
        get empty(): boolean
    }
    type DripstoneRecipeType_ = DripstoneRecipeType;
    class BlockLogisticalTransporter extends Internal.BlockLargeTransmitter implements Internal.IHasTileEntity<Internal.TileEntityLogisticalTransporterBase>, Internal.ITypeBlock {
        constructor(tier: Internal.TransporterTier_)
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
        getPistonPushReaction(state: Internal.BlockState_): Internal.PushReaction;
        setState(state: Internal.BlockState_, fluid: Internal.Fluid_): Internal.BlockState;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        triggerEvent(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, id: number, param: number): boolean;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(state: Internal.BlockState_, world: Internal.LevelAccessor_, pos: BlockPos_, rotation: Internal.Rotation_): Internal.BlockState;
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
        getCloneItemStack(state: Internal.BlockState_, target: Internal.HitResult_, world: Internal.BlockGetter_, pos: BlockPos_, player: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(state: Internal.BlockState_, builder: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(consumer: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getFluidLightLevel(state: Internal.BlockState_): number;
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
        getFluidState(state: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getFluidLoggedProperty(): Internal.EnumProperty<Internal.IFluidLogType>;
        createDummyBlockEntity(state: Internal.BlockState_): Internal.TileEntityLogisticalTransporterBase;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        neighborChanged(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, neighborBlock: Internal.Block_, neighborPos: BlockPos_, isMoving: boolean): void;
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
        getTicker<T extends Internal.BlockEntity>(level: Internal.Level_, state: Internal.BlockState_, blockEntityType: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
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
        use(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, hit: Internal.BlockHitResult_): InteractionResult;
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
        getCollisionShape(state: Internal.BlockState_, world: Internal.BlockGetter_, pos: BlockPos_, context: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(context: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(world: Internal.LevelAccessor_, pos: BlockPos_, state: Internal.BlockState_, fluidState: Internal.FluidState_): boolean;
        getTileType(): Internal.TileEntityTypeRegistryObject<Internal.TileEntityLogisticalTransporter>;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(state: Internal.BlockState_, player: Internal.Player_, world: Internal.BlockGetter_, pos: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(state: Internal.BlockState_, facing: Internal.Direction_, facingState: Internal.BlockState_, world: Internal.LevelAccessor_, currentPos: BlockPos_, facingPos: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        getPickupSound(state: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        setIsRandomlyTicking(arg0: boolean): void;
        /**
         * @deprecated
        */
        rotate(state: Internal.BlockState_, rotation: Internal.Rotation_): Internal.BlockState;
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
        newBlockEntity(pos: BlockPos_, state: Internal.BlockState_): Internal.TileEntityLogisticalTransporterBase;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(state: Internal.BlockState_, world: Internal.BlockGetter_, pos: BlockPos_, type: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, newState: Internal.BlockState_, isMoving: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(state: Internal.BlockState_, world: Internal.BlockGetter_, pos: BlockPos_): Internal.VoxelShape;
        updateFluids(state: Internal.BlockState_, world: Internal.LevelAccessor_, currentPos: BlockPos_): void;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getType(): Internal.BlockType;
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
        onBlockExploded(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, explosion: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        isValidFluid(fluid: Internal.Fluid_): boolean;
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
        createDummyBlockEntity(): Internal.TileEntityLogisticalTransporterBase;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(world: Internal.LevelAccessor_, pos: BlockPos_, state: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        triggerBlockEntityEvent(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, id: number, param: number): boolean;
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
        setPlacedBy(world: Internal.Level_, pos: BlockPos_, state: Internal.BlockState_, placer: Internal.LivingEntity_, stack: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, oldState: Internal.BlockState_, isMoving: boolean): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getFluid(state: Internal.BlockState_): Internal.FluidState;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(blockState: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(blockState: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        static getSideForType(type: Internal.ConnectionType_, side: Internal.Direction_): Internal.VoxelShape;
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
        onNeighborChange(state: Internal.BlockState_, world: Internal.LevelReader_, pos: BlockPos_, neighbor: BlockPos_): void;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(world: Internal.BlockGetter_, pos: BlockPos_, state: Internal.BlockState_, fluid: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(state: Internal.BlockState_, mirror: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, random: Internal.RandomSource_): void;
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
        /**
         * @deprecated
        */
        getShape(state: Internal.BlockState_, world: Internal.BlockGetter_, pos: BlockPos_, context: Internal.CollisionContext_): Internal.VoxelShape;
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
        get fluidLoggedProperty(): Internal.EnumProperty<Internal.IFluidLogType>
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get tileType(): Internal.TileEntityTypeRegistryObject<Internal.TileEntityLogisticalTransporter>
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get type(): Internal.BlockType
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
    }
    type BlockLogisticalTransporter_ = BlockLogisticalTransporter;
    class DoorControl extends Internal.Enum<Internal.DoorControl> {
        static createWidget(arg0: number, arg1: number, arg2: Internal.Consumer_<Internal.DoorControl>, arg3: Internal.DoorControl_): com.simibubi.create.foundation.utility.Pair<Internal.ScrollInput, Internal.Label>;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        static valueOf(arg0: string): Internal.DoorControl;
        "compareTo(com.simibubi.create.content.decoration.slidingDoor.DoorControl)"(arg0: Internal.DoorControl_): number;
        notifyAll(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.DoorControl>>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static values(): Internal.DoorControl[];
        name(): string;
        hashCode(): number;
        getDeclaringClass(): typeof Internal.DoorControl;
        matches(arg0: Internal.Direction_): boolean;
        ordinal(): number;
        wait(): void;
        compareTo(arg0: Internal.DoorControl_): number;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.DoorControl
        static readonly SOUTH: (Internal.DoorControl) & (Internal.DoorControl);
        static readonly NONE: (Internal.DoorControl) & (Internal.DoorControl);
        static readonly WEST: (Internal.DoorControl) & (Internal.DoorControl);
        static readonly ALL: (Internal.DoorControl) & (Internal.DoorControl);
        static readonly NORTH: (Internal.DoorControl) & (Internal.DoorControl);
        static readonly EAST: (Internal.DoorControl) & (Internal.DoorControl);
    }
    type DoorControl_ = "west" | "east" | "south" | "north" | DoorControl | "none" | "all";
    class LanternBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock {
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
        static getConnectedDirection(arg0: Internal.BlockState_): Internal.Direction;
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
        static readonly HANGING_AABB: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WATERLOGGED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly HANGING: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly AABB: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
    }
    type LanternBlock_ = LanternBlock;
    interface Tier {
        /**
         * @deprecated
        */
        abstract getLevel(): number;
        abstract getRepairIngredient(): Internal.Ingredient;
        abstract getAttackDamageBonus(): number;
        abstract getEnchantmentValue(): number;
        abstract getUses(): number;
        abstract getSpeed(): number;
        getTag(): Internal.TagKey<Internal.Block>;
        /**
         * @deprecated
        */
        get level(): number
        get repairIngredient(): Internal.Ingredient
        get attackDamageBonus(): number
        get enchantmentValue(): number
        get uses(): number
        get speed(): number
        get tag(): Internal.TagKey<Internal.Block>
    }
    type Tier_ = string | Tier;
    class PostPass implements Internal.AutoCloseable {
        constructor(arg0: Internal.ResourceManager_, arg1: string, arg2: Internal.RenderTarget_, arg3: Internal.RenderTarget_)
        getClass(): typeof any;
        setOrthoMatrix(arg0: Matrix4f_): void;
        process(arg0: number): void;
        toString(): string;
        notifyAll(): void;
        addAuxAsset(arg0: string, arg1: Internal.IntSupplier_, arg2: number, arg3: number): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        close(): void;
        getName(): string;
        getEffect(): Internal.EffectInstance;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        set orthoMatrix(arg0: Matrix4f_)
        get name(): string
        get effect(): Internal.EffectInstance
        readonly outTarget: Internal.RenderTarget;
        readonly inTarget: Internal.RenderTarget;
    }
    type PostPass_ = PostPass;
    interface AnimationController$SoundKeyframeHandler <A extends Internal.GeoAnimatable> {
        abstract handle(arg0: Internal.SoundKeyframeEvent_<A>): void;
        (arg0: Internal.SoundKeyframeEvent<A>): void;
    }
    type AnimationController$SoundKeyframeHandler_<A extends Internal.GeoAnimatable> = AnimationController$SoundKeyframeHandler<A> | ((arg0: Internal.SoundKeyframeEvent<A>)=> void);
    class TimeZoneFormat extends Internal.UFormat implements Internal.Freezable<Internal.TimeZoneFormat>, Internal.Serializable {
        format(arg0: any, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        parseOffsetShortLocalizedGMT(arg0: string, arg1: Internal.ParsePosition_): number;
        setGMTZeroFormat(arg0: string): this;
        parse(arg0: Internal.TimeZoneFormat$Style_, arg1: string, arg2: Internal.ParsePosition_, arg3: Internal.EnumSet_<Internal.TimeZoneFormat$ParseOption>, arg4: Internal.Output_<Internal.TimeZoneFormat$TimeType>): com.ibm.icu.util.TimeZone;
        setTimeZoneNames(arg0: Internal.TimeZoneNames_): this;
        notify(): void;
        isFrozen(): boolean;
        setGMTOffsetPattern(arg0: Internal.TimeZoneFormat$GMTOffsetPatternType_, arg1: string): this;
        "format(java.lang.Object,java.lang.StringBuffer,java.text.FieldPosition)"(arg0: any, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        getGMTOffsetPattern(arg0: Internal.TimeZoneFormat$GMTOffsetPatternType_): string;
        format(arg0: Internal.TimeZoneFormat$Style_, arg1: com.ibm.icu.util.TimeZone_, arg2: number): string;
        formatToCharacterIterator(arg0: any): Internal.AttributedCharacterIterator;
        getGMTPattern(): string;
        static getInstance(arg0: Internal.Locale_): Internal.TimeZoneFormat;
        getGMTOffsetDigits(): string;
        static "getInstance(com.ibm.icu.util.ULocale)"(arg0: Internal.ULocale_): Internal.TimeZoneFormat;
        format(arg0: Internal.TimeZoneFormat$Style_, arg1: com.ibm.icu.util.TimeZone_, arg2: number, arg3: Internal.Output_<Internal.TimeZoneFormat$TimeType>): string;
        cloneAsThawed(): this;
        getDefaultParseOptions(): Internal.EnumSet<Internal.TimeZoneFormat$ParseOption>;
        parse(arg0: string): com.ibm.icu.util.TimeZone;
        parse(arg0: string, arg1: Internal.ParsePosition_): com.ibm.icu.util.TimeZone;
        parseOffsetLocalizedGMT(arg0: string, arg1: Internal.ParsePosition_): number;
        "format(com.ibm.icu.text.TimeZoneFormat$Style,com.ibm.icu.util.TimeZone,long)"(arg0: Internal.TimeZoneFormat$Style_, arg1: com.ibm.icu.util.TimeZone_, arg2: number): string;
        formatOffsetISO8601Extended(arg0: number, arg1: boolean, arg2: boolean, arg3: boolean): string;
        formatOffsetShortLocalizedGMT(arg0: number): string;
        wait(): void;
        parse(arg0: Internal.TimeZoneFormat$Style_, arg1: string, arg2: Internal.ParsePosition_, arg3: Internal.Output_<Internal.TimeZoneFormat$TimeType>): com.ibm.icu.util.TimeZone;
        setDefaultParseOptions(arg0: Internal.EnumSet_<Internal.TimeZoneFormat$ParseOption>): this;
        clone(): any;
        getClass(): typeof any;
        setGMTPattern(arg0: string): this;
        parseObject(arg0: string): any;
        static "getInstance(java.util.Locale)"(arg0: Internal.Locale_): Internal.TimeZoneFormat;
        parseObject(arg0: string, arg1: Internal.ParsePosition_): any;
        wait(arg0: number, arg1: number): void;
        freeze(): any;
        formatOffsetLocalizedGMT(arg0: number): string;
        setGMTOffsetDigits(arg0: string): this;
        toString(): string;
        notifyAll(): void;
        parseOffsetISO8601(arg0: string, arg1: Internal.ParsePosition_): number;
        format(arg0: any): string;
        getTimeZoneNames(): Internal.TimeZoneNames;
        hashCode(): number;
        static getInstance(arg0: Internal.ULocale_): Internal.TimeZoneFormat;
        getLocale(arg0: Internal.ULocale$Type_): Internal.ULocale;
        wait(arg0: number): void;
        formatOffsetISO8601Basic(arg0: number, arg1: boolean, arg2: boolean, arg3: boolean): string;
        equals(arg0: any): boolean;
        getGMTZeroFormat(): string;
        set GMTZeroFormat(arg0: string)
        set timeZoneNames(arg0: Internal.TimeZoneNames_)
        get frozen(): boolean
        get GMTPattern(): string
        get GMTOffsetDigits(): string
        get defaultParseOptions(): Internal.EnumSet<Internal.TimeZoneFormat$ParseOption>
        set defaultParseOptions(arg0: Internal.EnumSet_<Internal.TimeZoneFormat$ParseOption>)
        get class(): typeof any
        set GMTPattern(arg0: string)
        set GMTOffsetDigits(arg0: string)
        get timeZoneNames(): Internal.TimeZoneNames
        get GMTZeroFormat(): string
    }
    type TimeZoneFormat_ = TimeZoneFormat;
    class PipeTileEntity$Connection {
        constructor(arg0: BlockPos_, arg1: Internal.Direction_, arg2: number)
        getCapability<T>(arg0: Internal.Level_, arg1: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getClass(): typeof any;
        toString(): string;
        getEnergyHandler(arg0: Internal.Level_): Internal.LazyOptional<Internal.IEnergyStorage>;
        getFluidHandler(arg0: Internal.Level_): Internal.LazyOptional<Internal.IFluidHandler>;
        notifyAll(): void;
        getInfusionHandler(arg0: Internal.Level_): Internal.LazyOptional<Internal.IInfusionHandler>;
        getPigmentHandler(arg0: Internal.Level_): Internal.LazyOptional<Internal.IPigmentHandler>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getChemicalHandler(arg0: Internal.ChemicalType_, arg1: Internal.Level_): Internal.LazyOptional<Internal.IChemicalHandler<any, any>>;
        getGasHandler(arg0: Internal.Level_): Internal.LazyOptional<Internal.IGasHandler>;
        getItemHandler(arg0: Internal.Level_): Internal.LazyOptional<Internal.IItemHandler>;
        getPos(): BlockPos;
        hashCode(): number;
        getDistance(): number;
        wait(): void;
        wait(arg0: number): void;
        getSlurryHandler(arg0: Internal.Level_): Internal.LazyOptional<Internal.ISlurryHandler>;
        equals(arg0: any): boolean;
        getDirection(): Internal.Direction;
        get class(): typeof any
        get pos(): BlockPos
        get distance(): number
        get direction(): Internal.Direction
    }
    type PipeTileEntity$Connection_ = PipeTileEntity$Connection;
    interface ScreenMouseEvents$AfterMouseScroll {
        abstract afterMouseScroll(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        (arg0: Internal.Screen, arg1: number, arg2: number, arg3: number, arg4: number): void;
    }
    type ScreenMouseEvents$AfterMouseScroll_ = ((arg0: Internal.Screen, arg1: number, arg2: number, arg3: number, arg4: number)=> void) | ScreenMouseEvents$AfterMouseScroll;
    class SynchedEntityData$DataValue <T> extends Internal.Record {
        constructor(id: number, serializer: Internal.EntityDataSerializer_<T>, value: T)
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        notifyAll(): void;
        value(): T;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        id(): number;
        wait(): void;
        serializer(): Internal.EntityDataSerializer<T>;
        wait(arg0: number): void;
        static create<T>(arg0: Internal.EntityDataAccessor_<T>, arg1: T): Internal.SynchedEntityData$DataValue<T>;
        static read(arg0: Internal.FriendlyByteBuf_, arg1: number): Internal.SynchedEntityData$DataValue<any>;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type SynchedEntityData$DataValue_<T> = SynchedEntityData$DataValue<T>;
    class TileEntityDragonforge extends Internal.BaseContainerBlockEntity implements Internal.WorldlyContainer {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: number)
        stopOpen(arg0: Internal.Player_): void;
        requestModelDataUpdate(): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
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
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        abstract "setChanged()"(): void;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getRecipes(): Internal.List<Internal.DragonForgeRecipe>;
        "getUpdatePacket()"(): Internal.Packet<any>;
        kjs$self(): net.minecraft.world.Container;
        getWidth(): number;
        setRemoved(): void;
        "isEmpty()"(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomName(): boolean;
        getType(): Internal.BlockEntityType<any>;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        getItem(arg0: number): Internal.ItemStack;
        "getUpdatePacket()"(): Internal.ClientboundBlockEntityDataPacket;
        abstract getDefaultName(): net.minecraft.network.chat.Component;
        getCustomName(): net.minecraft.network.chat.Component;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        getDisplayName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        countItem(arg0: Internal.Item_): number;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        startOpen(arg0: Internal.Player_): void;
        createMenu(arg0: number, arg1: Internal.Inventory_, arg2: Internal.Player_): Internal.AbstractContainerMenu;
        transferPower(arg0: number): void;
        fabric_hasPersistentAttachments(): boolean;
        clearRemoved(): void;
        canPlaceItemThroughFace(arg0: number, arg1: Internal.ItemStack_, arg2: Internal.Direction_): boolean;
        getUpdatePacket(): Internal.Packet<any>;
        shouldCloseCurrentScreen(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        fabric_getAttachments(): Internal.Map<any, any>;
        getHeight(): number;
        countNonEmpty(): number;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        canTakeItem(arg0: net.minecraft.world.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        assembled(): boolean;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        canSmelt(): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        clear(): void;
        wait(arg0: number): void;
        getFireType(arg0: Internal.Block_): number;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        clearContent(): void;
        reviveCaps(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        getAttached(type: Internal.AttachmentType_<any>): any;
        static tryClear(arg0: any): void;
        grillMatches(arg0: Internal.Block_): boolean;
        getUpdateTag(): Internal.CompoundTag;
        getRenderAttachmentData(): any;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        setLevel(arg0: Internal.Level_): void;
        notify(): void;
        getMaxCookTime(): number;
        getSlots(): number;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        onLoad(): void;
        getContainerSize(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        getSlotsForFace(arg0: Internal.Direction_): number[];
        setItem(arg0: number, arg1: Internal.ItemStack_): void;
        handler$cji000$bookshelf$getCapability(arg0: Internal.Capability_<any>, arg1: Internal.Direction_, arg2: Internal.CallbackInfoReturnable_<any>): void;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        getBlockState(): Internal.BlockState;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        removeItemNoUpdate(arg0: number): Internal.ItemStack;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        canTakeItemThroughFace(arg0: number, arg1: Internal.ItemStack_, arg2: Internal.Direction_): boolean;
        count(ingredient: Internal.Ingredient_): number;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveAdditional(arg0: Internal.CompoundTag_): void;
        count(): number;
        saveWithId(): Internal.CompoundTag;
        isBurning(): boolean;
        createUnSidedHandler(): Internal.IItemHandler;
        abstract createMenu(arg0: number, arg1: Internal.Inventory_): Internal.AbstractContainerMenu;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        isEmpty(): boolean;
        wait(arg0: number, arg1: number): void;
        getTypeID(): string;
        getLevel(): Internal.Level;
        getLockKey(): Internal.LockCode;
        static setChanged(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        onlyOpCanSetNbt(): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        getGrillBlock(): Internal.Block;
        serializeNBT(): Internal.Tag;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        smeltItem(): void;
        getStackInSlot(slot: number): Internal.ItemStack;
        static tick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.TileEntityDragonforge_): void;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        asContainer(): net.minecraft.world.Container;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getAllItems(): Internal.List<Internal.ItemStack>;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        stillValid(arg0: Internal.Player_): boolean;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        static canUnlock(arg0: Internal.Player_, arg1: Internal.LockCode_, arg2: net.minecraft.network.chat.Component_): boolean;
        getRenderData(): any;
        getModelData(): Internal.ModelData;
        isMutable(): boolean;
        find(ingredient: Internal.Ingredient_): number;
        canOpen(arg0: Internal.Player_): boolean;
        equals(arg0: any): boolean;
        getCurrentRecipe(): Internal.Optional<Internal.DragonForgeRecipe>;
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get recipes(): Internal.List<Internal.DragonForgeRecipe>
        get "updatePacket()"(): Internal.Packet<any>
        get width(): number
        get "empty()"(): boolean
        get type(): Internal.BlockEntityType<any>
        get "updatePacket()"(): Internal.ClientboundBlockEntityDataPacket
        get defaultName(): net.minecraft.network.chat.Component
        get customName(): net.minecraft.network.chat.Component
        get renderBoundingBox(): Internal.AABB
        get displayName(): net.minecraft.network.chat.Component
        get class(): typeof any
        set customName(arg0: net.minecraft.network.chat.Component_)
        get updatePacket(): Internal.Packet<any>
        get height(): number
        get persistentData(): Internal.CompoundTag
        get updateTag(): Internal.CompoundTag
        get renderAttachmentData(): any
        set level(arg0: Internal.Level_)
        get maxCookTime(): number
        get slots(): number
        get blockPos(): BlockPos
        get removed(): boolean
        get containerSize(): number
        get name(): net.minecraft.network.chat.Component
        get blockState(): Internal.BlockState
        get maxStackSize(): number
        get burning(): boolean
        get empty(): boolean
        get typeID(): string
        get level(): Internal.Level
        get lockKey(): Internal.LockCode
        get grillBlock(): Internal.Block
        get allItems(): Internal.List<Internal.ItemStack>
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get renderData(): any
        get modelData(): Internal.ModelData
        get mutable(): boolean
        get currentRecipe(): Internal.Optional<Internal.DragonForgeRecipe>
        lastDragonFlameTimer: number;
        fireType: number;
        cookTime: number;
    }
    type TileEntityDragonforge_ = TileEntityDragonforge;
    abstract class ImmutableList <E> extends Internal.ImmutableCollection<E> implements Internal.RandomAccess, Internal.List<E> {
        static builder<E>(): Internal.ImmutableList$Builder<E>;
        static copyOf<E>(arg0: E[]): Internal.ImmutableList<E>;
        reverse(): this;
        static sortedCopyOf<E>(arg0: Internal.Comparator_<E>, arg1: Internal.Iterable_<E>): Internal.ImmutableList<E>;
        static copyOf<E>(arg0: Internal.Iterable_<E>): Internal.ImmutableList<E>;
        /**
         * @deprecated
        */
        sort(arg0: Internal.Comparator_<E>): void;
        notify(): void;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        /**
         * @deprecated
        */
        "remove(int)"(arg0: number): E;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        /**
         * @deprecated
        */
        addAll(arg0: number, arg1: Internal.Collection_<E>): boolean;
        listIterator(): Internal.ListIterator<any>;
        abstract addAll(arg0: Internal.Collection_<E>): boolean;
        subList(arg0: number, arg1: number): this;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.ImmutableList<E>;
        indexOf(arg0: any): number;
        /**
         * @deprecated
        */
        add(arg0: number, arg1: E): void;
        forEach(arg0: Internal.Consumer_<E>): void;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.ImmutableList<E>;
        abstract toArray<T>(arg0: T[]): T[];
        static "of(java.lang.Object)"<E>(arg0: E): Internal.ImmutableList<E>;
        abstract remove(arg0: any): boolean;
        abstract "remove(java.lang.Object)"(arg0: any): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.ImmutableList<E>;
        stream(): Internal.Stream<E>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        wait(): void;
        /**
         * @deprecated
        */
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        static "copyOf(java.lang.Iterable)"<E>(arg0: Internal.Iterable_<E>): Internal.ImmutableList<E>;
        static "of(java.lang.Object[])"<E>(...arg0: E[]): Internal.List<E>;
        iterator(): Internal.UnmodifiableIterator<E>;
        lastIndexOf(arg0: any): number;
        static of<E>(arg0: E, arg1: E): Internal.ImmutableList<E>;
        getClass(): typeof any;
        abstract get(arg0: number): E;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.ImmutableList<E>;
        static "copyOf(java.util.Collection)"<E>(arg0: Internal.Collection_<E>): Internal.ImmutableList<E>;
        abstract add(arg0: E): boolean;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.ImmutableList<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.ImmutableList<E>;
        parallelStream(): Internal.Stream<E>;
        abstract isEmpty(): boolean;
        wait(arg0: number, arg1: number): void;
        /**
         * @deprecated
        */
        set(arg0: number, arg1: E): E;
        static of<E>(...arg0: E[]): Internal.List<E>;
        listIterator(arg0: number): Internal.ListIterator<any>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E, arg10: E, arg11: E, ...arg12: E[]): Internal.ImmutableList<E>;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.ImmutableList<E>;
        static builderWithExpectedSize<E>(arg0: number): Internal.ImmutableList$Builder<E>;
        static of<E>(): Internal.ImmutableList<E>;
        /**
         * @deprecated
        */
        remove(arg0: number): E;
        static of<E>(arg0: E): Internal.ImmutableList<E>;
        contains(arg0: any): boolean;
        static "copyOf(java.util.Iterator)"<E>(arg0: Internal.Iterator_<E>): Internal.ImmutableList<E>;
        /**
         * @deprecated
        */
        replaceAll(arg0: Internal.UnaryOperator_<E>): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.ImmutableList<E>;
        toString(): string;
        notifyAll(): void;
        static sortedCopyOf<E extends Internal.Comparable<any>>(arg0: Internal.Iterable_<E>): Internal.ImmutableList<E>;
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        static "copyOf(java.lang.Object[])"<E>(arg0: E[]): Internal.ImmutableList<E>;
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E, arg10: E): Internal.ImmutableList<E>;
        abstract toArray(): any[];
        /**
         * @deprecated
        */
        asList(): this;
        hashCode(): number;
        abstract size(): number;
        static toImmutableList<E>(): Internal.Collector<E, any, Internal.ImmutableList<E>>;
        abstract clear(): void;
        wait(arg0: number): void;
        spliterator(): Internal.Spliterator<E>;
        equals(arg0: any): boolean;
        static copyOf<E>(arg0: Internal.Iterator_<E>): Internal.ImmutableList<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.ImmutableList<E>;
        get class(): typeof any
        get empty(): boolean
    }
    type ImmutableList_<E> = ImmutableList<E>;
    class SpellResolveEvent extends net.minecraftforge.eventbus.api.Event {
        constructor()
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
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
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        resolver: Internal.SpellResolver;
        world: Internal.Level;
        shooter: Internal.LivingEntity;
        spell: Internal.Spell;
        context: Internal.SpellContext;
        rayTraceResult: Internal.HitResult;
    }
    type SpellResolveEvent_ = SpellResolveEvent;
    interface MushroomCowAccessor {
        abstract setEffect(arg0: Internal.MobEffect_): void;
        abstract getEffect(): Internal.MobEffect;
        abstract getEffectDuration(): number;
        abstract setEffectDuration(arg0: number): void;
        set effect(arg0: Internal.MobEffect_)
        get effect(): Internal.MobEffect
        get effectDuration(): number
        set effectDuration(arg0: number)
    }
    type MushroomCowAccessor_ = MushroomCowAccessor;
    class UraniumRodBlock extends Internal.RotatedPillarBlock implements Internal.SimpleWaterloggedBlock {
        constructor()
        handler$cag000$betterend$be_getDroppedStacks(state: Internal.BlockState_, builder: Internal.LootParams$Builder_, info: Internal.CallbackInfoReturnable_<any>): void;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        static getLiquidType(arg0: Internal.FluidState_): number;
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
        static rotatePillar(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
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
        static readonly LIQUID_LOGGED: (Internal.IntegerProperty) & (Internal.IntegerProperty);
    }
    type UraniumRodBlock_ = UraniumRodBlock;
    class WidgetLayout$Padding extends Internal.Record {
        constructor(vertical: number, horizontal: number)
        vertical(): number;
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        horizontal(): number;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(o: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type WidgetLayout$Padding_ = WidgetLayout$Padding;
    class CreateWorldScreen extends Internal.Screen {
        charTyped(arg0: string, arg1: number): boolean;
        onFilesDrop(arg0: Internal.List_<Internal.Path>): void;
        fabric_getAfterRenderEvent(): net.fabricmc.fabric.api.event.Event<any>;
        "setFocused(net.minecraft.client.gui.components.events.GuiEventListener)"(arg0: Internal.GuiEventListener_): void;
        static m_267821_(arg0: Internal.CreateWorldScreen_, arg1: Internal.GuiEventListener_): void;
        narrationEnabled(): void;
        setFocused(arg0: boolean): void;
        renderDirtBackground(arg0: Internal.GuiGraphics_): void;
        setTooltipForNextRenderPass(arg0: Internal.List_<Internal.FormattedCharSequence>): void;
        fabric_getRemoveEvent(): net.fabricmc.fabric.api.event.Event<any>;
        renderWithTooltip(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number): void;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        static isCut(arg0: number): boolean;
        changeFocus(arg0: Internal.ComponentPath_): void;
        fabric_getAfterTickEvent(): net.fabricmc.fabric.api.event.Event<any>;
        addRenderableWidget<T extends Internal.GuiEventListener & Internal.Renderable & Internal.NarratableEntry>(arg0: T): T;
        static m_267746_(arg0: Internal.CreateWorldScreen_): Internal.Minecraft;
        getChildrenKonkrete(): Internal.List<any>;
        getNarratablesFancyMenu(): Internal.List<any>;
        openExperimentsScreen(arg0: Internal.WorldDataConfiguration_): void;
        getFocused(): Internal.GuiEventListener;
        "setTooltipForNextRenderPass(java.util.List,net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner,boolean)"(arg0: Internal.List_<Internal.FormattedCharSequence>, arg1: Internal.ClientTooltipPositioner_, arg2: boolean): void;
        nextFocusPath(arg0: Internal.FocusNavigationEvent_): Internal.ComponentPath;
        fabric_getBeforeMouseScrollEvent(): net.fabricmc.fabric.api.event.Event<any>;
        static createTempDataPackDirFromExistingWorld(arg0: Internal.Path_, arg1: Internal.Minecraft_): Internal.Path;
        setFontKonkrete(arg0: net.minecraft.client.gui.Font_): void;
        static openFresh(arg0: Internal.Minecraft_, arg1: Internal.Screen_): void;
        fabric_getAllowKeyReleaseEvent(): net.fabricmc.fabric.api.event.Event<any>;
        createArrowEvent(arg0: Internal.ScreenDirection_): Internal.FocusNavigationEvent$ArrowNavigation;
        handleComponentClicked(arg0: Internal.Style_): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        controlling$getRenderables(): Internal.List<any>;
        static findNarratableWidget(arg0: Internal.List_<Internal.NarratableEntry>, arg1: Internal.NarratableEntry_): Internal.Screen$NarratableSearchResult;
        getTextRenderer(): net.minecraft.client.gui.Font;
        fabric_getBeforeMouseClickEvent(): net.fabricmc.fabric.api.event.Event<any>;
        removed(): void;
        children(): Internal.List<Internal.GuiEventListener>;
        render(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number): void;
        addRenderableOnly<T extends Internal.Renderable>(arg0: T): T;
        static isSelectAll(arg0: number): boolean;
        fabric_getAfterMouseClickEvent(): net.fabricmc.fabric.api.event.Event<any>;
        isDragging(): boolean;
        getChildAt(arg0: number, arg1: number): Internal.Optional<Internal.GuiEventListener>;
        shouldCloseOnEsc(): boolean;
        getClass(): typeof any;
        isFocused(): boolean;
        fabric_getAfterKeyPressEvent(): net.fabricmc.fabric.api.event.Event<any>;
        balm_getRenderables(): Internal.List<any>;
        getTabOrderGroup(): number;
        setFocused(arg0: Internal.GuiEventListener_): void;
        getRenderables(): Internal.List<any>;
        init(arg0: Internal.Minecraft_, arg1: number, arg2: number): void;
        getBackgroundMusic(): Internal.Music;
        getNarrationMessage(): net.minecraft.network.chat.Component;
        static access$500(arg0: Internal.CreateWorldScreen_): net.minecraft.client.gui.Font;
        fabric_getBeforeRenderEvent(): net.fabricmc.fabric.api.event.Event<any>;
        shouldNarrateNavigation(): boolean;
        getRenderablesKonkrete(): Internal.List<any>;
        toString(): string;
        fabric_getAfterMouseReleaseEvent(): net.fabricmc.fabric.api.event.Event<any>;
        notifyAll(): void;
        static isPaste(arg0: number): boolean;
        static hideWidgets(...arg0: Internal.AbstractWidget_[]): void;
        static access$400(arg0: Internal.CreateWorldScreen_): Internal.Minecraft;
        popScreen(): void;
        static hasControlDown(): boolean;
        afterKeyboardAction(): void;
        "setTooltipForNextRenderPass(java.util.List)"(arg0: Internal.List_<Internal.FormattedCharSequence>): void;
        setInitialFocus(arg0: Internal.GuiEventListener_): void;
        getCurrentFocusPath(): Internal.ComponentPath;
        fabric_getAllowKeyPressEvent(): net.fabricmc.fabric.api.event.Event<any>;
        balm_getChildren(): Internal.List<any>;
        wait(arg0: number): void;
        static wrapScreenError(arg0: Internal.Runnable_, arg1: string, arg2: string): void;
        afterMouseAction(): void;
        getMinecraft(): Internal.Minecraft;
        updateNarrationState(arg0: Internal.NarrationElementOutput_): void;
        removeWidget(arg0: Internal.GuiEventListener_): void;
        static getTooltipFromItem(arg0: Internal.Minecraft_, arg1: Internal.ItemStack_): Internal.List<net.minecraft.network.chat.Component>;
        getChildrenFancyMenu(): Internal.List<any>;
        notify(): void;
        insertText(arg0: string, arg1: boolean): void;
        afterMouseMove(): void;
        clearWidgets(): void;
        static getExtensions(screen: Internal.Screen_): Internal.ScreenExtensions;
        mouseMoved(arg0: number, arg1: number): void;
        getRectangle(): Internal.ScreenRectangle;
        getRenderablesFancyMenu(): Internal.List<any>;
        "setTooltipForNextRenderPass(net.minecraft.network.chat.Component)"(arg0: net.minecraft.network.chat.Component_): void;
        static isCopy(arg0: number): boolean;
        magicalSpecialHackyFocus(arg0: Internal.GuiEventListener_): void;
        dynamic_fps$setRendersBackground(): void;
        fabric_getButtons(): Internal.List<any>;
        get_initialized_FancyMenu(): boolean;
        tick(): void;
        isPauseScreen(): boolean;
        getClient(): Internal.Minecraft;
        setDragging(arg0: boolean): void;
        wait(): void;
        getTitle(): net.minecraft.network.chat.Component;
        fabric_getBeforeMouseReleaseEvent(): net.fabricmc.fabric.api.event.Event<any>;
        dynamic_fps$rendersBackground(): boolean;
        isMouseOver(arg0: number, arg1: number): boolean;
        removeOnInitChildrenFancyMenu(): Internal.List<any>;
        getNarratables(): Internal.List<any>;
        fabric_getBeforeKeyPressEvent(): net.fabricmc.fabric.api.event.Event<any>;
        static m_267793_(arg0: Internal.CreateWorldScreen_): net.minecraft.client.gui.Font;
        fabric_getAfterKeyReleaseEvent(): net.fabricmc.fabric.api.event.Event<any>;
        static hasAltDown(): boolean;
        static access$600(arg0: Internal.CreateWorldScreen_): net.minecraft.client.gui.Font;
        renderBackground(arg0: Internal.GuiGraphics_): void;
        mouseScrolled(arg0: number, arg1: number, arg2: number): boolean;
        wait(arg0: number, arg1: number): void;
        onClose(): void;
        addWidget<T extends Internal.GuiEventListener & Internal.NarratableEntry>(arg0: T): T;
        invokeRemoveWidgetFancyMenu(arg0: Internal.GuiEventListener_): void;
        fabric_getAllowMouseReleaseEvent(): net.fabricmc.fabric.api.event.Event<any>;
        static hasShiftDown(): boolean;
        repositionElements(): void;
        balm_getNarratables(): Internal.List<any>;
        fabric_getBeforeTickEvent(): net.fabricmc.fabric.api.event.Event<any>;
        fabric_getAfterMouseScrollEvent(): net.fabricmc.fabric.api.event.Event<any>;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        updateNarratedWidget(arg0: Internal.NarrationElementOutput_): void;
        rebuildWidgets(): void;
        handler$cjl000$bclib$wt_createNewWorld(cir: Internal.CallbackInfoReturnable_<any>): void;
        isValidCharacterForName(arg0: string, arg1: string, arg2: number): boolean;
        getUiState(): Internal.WorldCreationUiState;
        "setTooltipForNextRenderPass(net.minecraft.client.gui.components.Tooltip,net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner,boolean)"(arg0: Internal.Tooltip_, arg1: Internal.ClientTooltipPositioner_, arg2: boolean): void;
        init(): void;
        static createFromExisting(arg0: Internal.Minecraft_, arg1: Internal.Screen_, arg2: Internal.LevelSettings_, arg3: Internal.WorldCreationContext_, arg4: Internal.Path_): Internal.CreateWorldScreen;
        resize(arg0: Internal.Minecraft_, arg1: number, arg2: number): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        openDataPackSelectionScreen(arg0: Internal.WorldDataConfiguration_): void;
        setTooltipForNextRenderPass(arg0: net.minecraft.network.chat.Component_): void;
        "setFocused(boolean)"(arg0: boolean): void;
        setTooltipForNextRenderPass(arg0: Internal.List_<Internal.FormattedCharSequence>, arg1: Internal.ClientTooltipPositioner_, arg2: boolean): void;
        fabric_getBeforeKeyReleaseEvent(): net.fabricmc.fabric.api.event.Event<any>;
        hashCode(): number;
        fabric_getAllowMouseScrollEvent(): net.fabricmc.fabric.api.event.Event<any>;
        static m_267796_(arg0: Internal.CreateWorldScreen_): Internal.Minecraft;
        added(): void;
        handleDelayedNarration(): void;
        equals(arg0: any): boolean;
        createTabEvent(): Internal.FocusNavigationEvent$TabNavigation;
        triggerImmediateNarration(arg0: boolean): void;
        static access$300(arg0: Internal.CreateWorldScreen_): Internal.Minecraft;
        setTooltipForNextRenderPass(arg0: Internal.Tooltip_, arg1: Internal.ClientTooltipPositioner_, arg2: boolean): void;
        fabric_getAllowMouseClickEvent(): net.fabricmc.fabric.api.event.Event<any>;
        set "focused(net.minecraft.client.gui.components.events.GuiEventListener)"(arg0: Internal.GuiEventListener_)
        set focused(arg0: boolean)
        set tooltipForNextRenderPass(arg0: Internal.List_<Internal.FormattedCharSequence>)
        get childrenKonkrete(): Internal.List<any>
        get narratablesFancyMenu(): Internal.List<any>
        get focused(): Internal.GuiEventListener
        set fontKonkrete(arg0: net.minecraft.client.gui.Font_)
        get textRenderer(): net.minecraft.client.gui.Font
        get dragging(): boolean
        get class(): typeof any
        get focused(): boolean
        get tabOrderGroup(): number
        set focused(arg0: Internal.GuiEventListener_)
        get renderables(): Internal.List<any>
        get backgroundMusic(): Internal.Music
        get narrationMessage(): net.minecraft.network.chat.Component
        get renderablesKonkrete(): Internal.List<any>
        set "tooltipForNextRenderPass(java.util.List)"(arg0: Internal.List_<Internal.FormattedCharSequence>)
        set initialFocus(arg0: Internal.GuiEventListener_)
        get currentFocusPath(): Internal.ComponentPath
        get minecraft(): Internal.Minecraft
        get childrenFancyMenu(): Internal.List<any>
        get rectangle(): Internal.ScreenRectangle
        get renderablesFancyMenu(): Internal.List<any>
        set "tooltipForNextRenderPass(net.minecraft.network.chat.Component)"(arg0: net.minecraft.network.chat.Component_)
        get _initialized_FancyMenu(): boolean
        get pauseScreen(): boolean
        get client(): Internal.Minecraft
        set dragging(arg0: boolean)
        get title(): net.minecraft.network.chat.Component
        get narratables(): Internal.List<any>
        get uiState(): Internal.WorldCreationUiState
        set tooltipForNextRenderPass(arg0: net.minecraft.network.chat.Component_)
        set "focused(boolean)"(arg0: boolean)
        static readonly ALLOW_CHEATS_INFO: (Internal.MutableComponent) & (net.minecraft.network.chat.Component);
        static readonly LIGHT_DIRT_BACKGROUND: (ResourceLocation) & (ResourceLocation);
        static readonly NAME_LABEL: (Internal.MutableComponent) & (net.minecraft.network.chat.Component);
        static readonly GAME_MODEL_LABEL: (Internal.MutableComponent) & (net.minecraft.network.chat.Component);
        readonly tabManager: Internal.TabManager;
        readonly uiState: Internal.WorldCreationUiState;
        static readonly FOOTER_SEPERATOR: (ResourceLocation) & (ResourceLocation);
        static readonly HEADER_SEPERATOR: (ResourceLocation) & (ResourceLocation);
        static readonly EXPERIMENTS_LABEL: (Internal.MutableComponent) & (net.minecraft.network.chat.Component);
    }
    type CreateWorldScreen_ = CreateWorldScreen;
    interface ISourceContext {
        abstract dsurround_setData(arg0: Internal.SourceContext_): void;
        abstract dsurround_getData(): Internal.Optional<Internal.SourceContext>;
        abstract dsurround_getId(): number;
    }
    type ISourceContext_ = ISourceContext;
    interface ResourceManagerReloadListener extends Internal.PreparableReloadListener {
        getName(): string;
        abstract onResourceManagerReload(arg0: Internal.ResourceManager_): void;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        get name(): string
        (arg0: Internal.ResourceManager): void;
    }
    type ResourceManagerReloadListener_ = ((arg0: Internal.ResourceManager)=> void) | ResourceManagerReloadListener;
    class DecimalFormat extends Internal.NumberFormat {
        constructor()
        constructor(arg0: string, arg1: Internal.DecimalFormatSymbols_)
        constructor(arg0: string)
        format(arg0: any, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        setDecimalSeparatorAlwaysShown(arg0: boolean): void;
        parse(arg0: string, arg1: Internal.ParsePosition_): number;
        static getCompactNumberInstance(): Internal.NumberFormat;
        setMaximumIntegerDigits(arg0: number): void;
        getPositiveSuffix(): string;
        setNegativeSuffix(arg0: string): void;
        parse(arg0: string): number;
        static getAvailableLocales(): Internal.Locale[];
        setParseIntegerOnly(arg0: boolean): void;
        notify(): void;
        "format(java.lang.Object,java.lang.StringBuffer,java.text.FieldPosition)"(arg0: any, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        setGroupingUsed(arg0: boolean): void;
        setNegativePrefix(arg0: string): void;
        formatToCharacterIterator(arg0: any): Internal.AttributedCharacterIterator;
        applyPattern(arg0: string): void;
        setMaximumFractionDigits(arg0: number): void;
        applyLocalizedPattern(arg0: string): void;
        setPositiveSuffix(arg0: string): void;
        static getInstance(arg0: Internal.Locale_): Internal.NumberFormat;
        setRoundingMode(arg0: Internal.RoundingMode_): void;
        static getInstance(): Internal.NumberFormat;
        setCurrency(arg0: Internal.Currency_): void;
        isDecimalSeparatorAlwaysShown(): boolean;
        "format(double)"(arg0: number): string;
        getMaximumIntegerDigits(): number;
        toPattern(): string;
        isGroupingUsed(): boolean;
        "format(long,java.lang.StringBuffer,java.text.FieldPosition)"(arg0: number, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        static getCurrencyInstance(arg0: Internal.Locale_): Internal.NumberFormat;
        isParseIntegerOnly(): boolean;
        toLocalizedPattern(): string;
        setPositivePrefix(arg0: string): void;
        setMinimumIntegerDigits(arg0: number): void;
        format(arg0: number, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        getNegativeSuffix(): string;
        static getCompactNumberInstance(arg0: Internal.Locale_, arg1: Internal.NumberFormat$Style_): Internal.NumberFormat;
        static getNumberInstance(arg0: Internal.Locale_): Internal.NumberFormat;
        setMinimumFractionDigits(arg0: number): void;
        getNegativePrefix(): string;
        wait(): void;
        "format(long)"(arg0: number): string;
        setGroupingSize(arg0: number): void;
        static getIntegerInstance(): Internal.NumberFormat;
        getPositivePrefix(): string;
        getRoundingMode(): Internal.RoundingMode;
        clone(): any;
        getClass(): typeof any;
        format(arg0: number): string;
        isParseBigDecimal(): boolean;
        parseObject(arg0: string): any;
        parseObject(arg0: string, arg1: Internal.ParsePosition_): any;
        wait(arg0: number, arg1: number): void;
        static getPercentInstance(): Internal.NumberFormat;
        getGroupingSize(): number;
        format(arg0: number): string;
        getMinimumIntegerDigits(): number;
        "format(double,java.lang.StringBuffer,java.text.FieldPosition)"(arg0: number, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        getCurrency(): Internal.Currency;
        getMaximumFractionDigits(): number;
        getDecimalFormatSymbols(): Internal.DecimalFormatSymbols;
        static getNumberInstance(): Internal.NumberFormat;
        static getPercentInstance(arg0: Internal.Locale_): Internal.NumberFormat;
        toString(): string;
        "format(java.lang.Object)"(arg0: any): string;
        notifyAll(): void;
        setMultiplier(arg0: number): void;
        format(arg0: any): string;
        setParseBigDecimal(arg0: boolean): void;
        getMultiplier(): number;
        static getCurrencyInstance(): Internal.NumberFormat;
        hashCode(): number;
        getMinimumFractionDigits(): number;
        static getIntegerInstance(arg0: Internal.Locale_): Internal.NumberFormat;
        wait(arg0: number): void;
        format(arg0: number, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        equals(arg0: any): boolean;
        setDecimalFormatSymbols(arg0: Internal.DecimalFormatSymbols_): void;
        set decimalSeparatorAlwaysShown(arg0: boolean)
        get compactNumberInstance(): Internal.NumberFormat
        set maximumIntegerDigits(arg0: number)
        get positiveSuffix(): string
        set negativeSuffix(arg0: string)
        get availableLocales(): Internal.Locale[]
        set parseIntegerOnly(arg0: boolean)
        set groupingUsed(arg0: boolean)
        set negativePrefix(arg0: string)
        set maximumFractionDigits(arg0: number)
        set positiveSuffix(arg0: string)
        set roundingMode(arg0: Internal.RoundingMode_)
        get instance(): Internal.NumberFormat
        set currency(arg0: Internal.Currency_)
        get decimalSeparatorAlwaysShown(): boolean
        get maximumIntegerDigits(): number
        get groupingUsed(): boolean
        get parseIntegerOnly(): boolean
        set positivePrefix(arg0: string)
        set minimumIntegerDigits(arg0: number)
        get negativeSuffix(): string
        set minimumFractionDigits(arg0: number)
        get negativePrefix(): string
        set groupingSize(arg0: number)
        get integerInstance(): Internal.NumberFormat
        get positivePrefix(): string
        get roundingMode(): Internal.RoundingMode
        get class(): typeof any
        get parseBigDecimal(): boolean
        get percentInstance(): Internal.NumberFormat
        get groupingSize(): number
        get minimumIntegerDigits(): number
        get currency(): Internal.Currency
        get maximumFractionDigits(): number
        get decimalFormatSymbols(): Internal.DecimalFormatSymbols
        get numberInstance(): Internal.NumberFormat
        set multiplier(arg0: number)
        set parseBigDecimal(arg0: boolean)
        get multiplier(): number
        get currencyInstance(): Internal.NumberFormat
        get minimumFractionDigits(): number
        set decimalFormatSymbols(arg0: Internal.DecimalFormatSymbols_)
    }
    type DecimalFormat_ = DecimalFormat;
    class FunctionDefinition extends Internal.TopLevelElement {
        getClass(): typeof any;
        getEndOffset(): number;
        toString(): string;
        static convert(context: icyllis.arc3d.compiler.Context_, pos: number, functionDecl: Internal.FunctionDecl_, builtin: boolean, body: Internal.Statement_): Internal.FunctionDefinition;
        static make(pos: number, functionDecl: Internal.FunctionDecl_, builtin: boolean, body: Internal.BlockStatement_): Internal.FunctionDefinition;
        notifyAll(): void;
        getKind(): Internal.Node$ElementKind;
        accept(visitor: Internal.TreeVisitor_): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getFunctionDecl(): Internal.FunctionDecl;
        getStartOffset(): number;
        setBody(body: Internal.BlockStatement_): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        isBuiltin(): boolean;
        equals(arg0: any): boolean;
        getBody(): Internal.BlockStatement;
        get class(): typeof any
        get endOffset(): number
        get kind(): Internal.Node$ElementKind
        get functionDecl(): Internal.FunctionDecl
        get startOffset(): number
        set body(body: Internal.BlockStatement_)
        get builtin(): boolean
        get body(): Internal.BlockStatement
    }
    type FunctionDefinition_ = FunctionDefinition;
    class BlockStatement extends Internal.Statement {
        constructor(position: number, statements: Internal.List_<Internal.Statement>, scoped: boolean)
        getClass(): typeof any;
        static makeCompound(before: Internal.Statement_, after: Internal.Statement_): Internal.Statement;
        getEndOffset(): number;
        toString(): string;
        getKind(): Internal.Node$StatementKind;
        notifyAll(): void;
        static make(pos: number, statements: Internal.List_<Internal.Statement>, scoped: boolean): Internal.Statement;
        isEmpty(): boolean;
        accept(visitor: Internal.TreeVisitor_): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getStartOffset(): number;
        setScoped(scoped: boolean): void;
        hashCode(): number;
        setStatements(statements: Internal.List_<Internal.Statement>): void;
        wait(): void;
        isScoped(): boolean;
        wait(arg0: number): void;
        getStatements(): Internal.List<Internal.Statement>;
        equals(arg0: any): boolean;
        static makeBlock(pos: number, statements: Internal.List_<Internal.Statement>): Internal.BlockStatement;
        get class(): typeof any
        get endOffset(): number
        get kind(): Internal.Node$StatementKind
        get empty(): boolean
        get startOffset(): number
        set scoped(scoped: boolean)
        set statements(statements: Internal.List_<Internal.Statement>)
        get scoped(): boolean
        get statements(): Internal.List<Internal.Statement>
    }
    type BlockStatement_ = BlockStatement;
    interface ScreenEvents$Remove {
        abstract onRemove(arg0: Internal.Screen_): void;
        (arg0: Internal.Screen): void;
    }
    type ScreenEvents$Remove_ = ((arg0: Internal.Screen)=> void) | ScreenEvents$Remove;
    interface IContentsListener {
        abstract onContentsChanged(): void;
        (): void;
    }
    type IContentsListener_ = IContentsListener | (()=> void);
    class TextureUploader {
        constructor(arg0: any_, arg1: any_, arg2: any_, arg3: any_, arg4: any_, arg5: any_, arg6: any_)
        getClass(): typeof any;
        requestSubsequentNormal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): number;
        toString(): string;
        finishNewestRequestImmediately(): void;
        notifyAll(): void;
        requestNormal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): number;
        requestUpload(arg0: Internal.TextureUpload_): number;
        requestBranchDownload(arg0: number, arg1: number, arg2: number, arg3: number): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        uploadTextures(): void;
        wait(): void;
        requestCompressed(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): number;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        requestBranchUpdate(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number, arg16: Internal.BranchTextureRenderer_, arg17: number, arg18: number): number;
        get class(): typeof any
        static readonly BRANCHUPDATE_ALLOCATE: (4) & (number);
        static readonly COMPRESSED: (2) & (number);
        static readonly NORMAL: (0) & (number);
        static readonly BRANCHUPDATE: (3) & (number);
        static readonly NORMALDOWNLOAD: (1) & (number);
        static readonly BRANCHDOWNLOAD: (5) & (number);
        static readonly SUBSEQUENT_NORMAL: (6) & (number);
    }
    type TextureUploader_ = TextureUploader;
    class ConfiguredFeature <FC extends Internal.FeatureConfiguration, F extends Feature<FC>> extends Internal.Record {
        constructor(arg0: F, arg1: FC)
        getClass(): typeof any;
        place(arg0: Internal.WorldGenLevel_, arg1: Internal.ChunkGenerator_, arg2: Internal.RandomSource_, arg3: BlockPos_): boolean;
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        toString(): string;
        notifyAll(): void;
        feature(): F;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        config(): FC;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        static readonly CODEC: Internal.Codec<Internal.Holder<Internal.ConfiguredFeature<any, any>>>;
        static readonly LIST_CODEC: Internal.Codec<Internal.HolderSet<Internal.ConfiguredFeature<any, any>>>;
        static readonly DIRECT_CODEC: Internal.Codec<Internal.ConfiguredFeature<any, any>>;
    }
    type ConfiguredFeature_<FC extends Internal.FeatureConfiguration, F extends Feature<FC>> = Special.ConfiguredFeature | ConfiguredFeature<FC, F>;
    interface IComponentBundle extends Internal.IContainerAddonProvider, Internal.IScreenAddonProvider {
        abstract accept(...arg0: Internal.IComponentHandler_[]): void;
        abstract getContainerAddons(): Internal.List<Internal.IFactory<Internal.IContainerAddon>>;
        canInteract(): boolean;
        abstract getScreenAddons(): Internal.List<Internal.IFactory<Internal.IScreenAddon>>;
        get containerAddons(): Internal.List<Internal.IFactory<Internal.IContainerAddon>>
        get screenAddons(): Internal.List<Internal.IFactory<Internal.IScreenAddon>>
    }
    type IComponentBundle_ = IComponentBundle;
    interface ITintableBlockItem {
        isTintable(arg0: Internal.ItemStack_): boolean;
        abstract removeAccentColor(arg0: Internal.ItemStack_): void;
        abstract getAccentColor(arg0: Internal.ItemStack_): Internal.Optional<number>;
        abstract getMainColor(arg0: Internal.ItemStack_): Internal.Optional<number>;
        abstract setMainColor(arg0: Internal.ItemStack_, arg1: number): void;
        abstract removeMainColor(arg0: Internal.ItemStack_): void;
        abstract setAccentColor(arg0: Internal.ItemStack_, arg1: number): void;
    }
    type ITintableBlockItem_ = ITintableBlockItem;
    interface FabricItemStack extends Internal.IForgeItemStack {
        abstract getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        isBookEnchantable(arg0: Internal.ItemStack_): boolean;
        getEntityLifespan(arg0: Internal.Level_): number;
        onStopUsing(arg0: Internal.LivingEntity_, arg1: number): void;
        onItemUseFirst(arg0: Internal.UseOnContext_): InteractionResult;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.Level_, arg1: Internal.Player_): void;
        elytraFlightTick(arg0: Internal.LivingEntity_, arg1: number): boolean;
        isEnderMask(arg0: Internal.Player_, arg1: Internal.EnderMan_): boolean;
        doesSneakBypassUse(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getEnchantmentLevel(arg0: Internal.Enchantment_): number;
        getCraftingRemainingItem(): Internal.ItemStack;
        isPiglinCurrency(): boolean;
        getFoodProperties(arg0: Internal.LivingEntity_): Internal.FoodProperties;
        getShareTag(): Internal.CompoundTag;
        makesPiglinsNeutral(arg0: Internal.LivingEntity_): boolean;
        getXpRepairRatio(): number;
        areShareTagsEqual(arg0: Internal.ItemStack_): boolean;
        canGrindstoneRepair(): boolean;
        canWalkOnPowderedSnow(arg0: Internal.LivingEntity_): boolean;
        getEquipmentSlot(): Internal.EquipmentSlot;
        getBurnTime(arg0: Internal.RecipeType_<any>): number;
        getHighlightTip(arg0: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        onEntityItemUpdate(arg0: Internal.ItemEntity_): boolean;
        getAllEnchantments(): Internal.Map<Internal.Enchantment, number>;
        getEnchantmentValue(): number;
        canPerformAction(arg0: Internal.ToolAction_): boolean;
        isRepairable(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getSweepHitBox(arg0: Internal.Player_, arg1: Internal.Entity_): Internal.AABB;
        readShareTag(arg0: Internal.CompoundTag_): void;
        serializeNBT(): Internal.CompoundTag;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        abstract deserializeNBT(arg0: Internal.CompoundTag_): void;
        onDroppedByPlayer(arg0: Internal.Player_): boolean;
        equals(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        onInventoryTick(arg0: Internal.Level_, arg1: Internal.Player_, arg2: number, arg3: number): void;
        isNotReplaceableByPickAction(arg0: Internal.Player_, arg1: number): boolean;
        canApplyAtEnchantingTable(arg0: Internal.Enchantment_): boolean;
        canEquip(arg0: Internal.EquipmentSlot_, arg1: Internal.Entity_): boolean;
        onEntitySwing(arg0: Internal.LivingEntity_): boolean;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        onBlockStartBreak(arg0: BlockPos_, arg1: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.Level_, arg1: Internal.Mob_): void;
        canElytraFly(arg0: Internal.LivingEntity_): boolean;
        getRecipeRemainder(): Internal.ItemStack;
        hasCraftingRemainingItem(): boolean;
        get craftingRemainingItem(): Internal.ItemStack
        get piglinCurrency(): boolean
        get shareTag(): Internal.CompoundTag
        get xpRepairRatio(): number
        get equipmentSlot(): Internal.EquipmentSlot
        get allEnchantments(): Internal.Map<Internal.Enchantment, number>
        get enchantmentValue(): number
        get repairable(): boolean
        get recipeRemainder(): Internal.ItemStack
    }
    type FabricItemStack_ = FabricItemStack;
    class AspectUpdateType extends Internal.Enum<Internal.AspectUpdateType> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static valueOf(arg0: string): Internal.AspectUpdateType;
        toString(): string;
        notifyAll(): void;
        compareTo(arg0: Internal.AspectUpdateType_): number;
        static values(): Internal.AspectUpdateType[];
        "compareTo(org.cyclops.integrateddynamics.api.part.aspect.AspectUpdateType)"(arg0: Internal.AspectUpdateType_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        getDeclaringClass(): typeof Internal.AspectUpdateType;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.AspectUpdateType>>;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.AspectUpdateType
        static readonly NETWORK_TICK: (Internal.AspectUpdateType) & (Internal.AspectUpdateType);
        static readonly BLOCK_UPDATE: (Internal.AspectUpdateType) & (Internal.AspectUpdateType);
        static readonly NEVER: (Internal.AspectUpdateType) & (Internal.AspectUpdateType);
    }
    type AspectUpdateType_ = "block_update" | "never" | "network_tick" | AspectUpdateType;
    class ModOreBlock extends it.zerono.mods.zerocore.lib.block.ModBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: number, arg2: number)
        handler$cag000$betterend$be_getDroppedStacks(state: Internal.BlockState_, builder: Internal.LootParams$Builder_, info: Internal.CallbackInfoReturnable_<any>): void;
        "callOnLogicalClient(net.minecraft.world.level.Level,java.util.function.BooleanSupplier)"(arg0: Internal.Level_, arg1: Internal.BooleanSupplier_): boolean;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        static createProperties(arg0: Internal.MapColor_, arg1: SoundType_, arg2: number): Internal.BlockBehaviour$Properties;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        "callOnLogicalClient(net.minecraft.world.level.Level,java.util.function.Supplier,java.util.function.Supplier)"<T>(arg0: Internal.Level_, arg1: Internal.Supplier_<T>, arg2: Internal.Supplier_<T>): T;
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
        "callOnLogicalSide(net.minecraft.world.level.Level,java.util.function.BooleanSupplier,java.util.function.BooleanSupplier)"(arg0: Internal.Level_, arg1: Internal.BooleanSupplier_, arg2: Internal.BooleanSupplier_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        "callOnLogicalServer(net.minecraft.world.level.Level,java.lang.Runnable)"(arg0: Internal.Level_, arg1: Internal.Runnable_): void;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        "callOnLogicalSide(net.minecraft.world.level.Level,java.util.function.IntSupplier,java.util.function.IntSupplier)"(arg0: Internal.Level_, arg1: Internal.IntSupplier_, arg2: Internal.IntSupplier_): number;
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
        callOnLogicalServer(arg0: Internal.Level_, arg1: Internal.DoubleSupplier_, arg2: number): number;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        callOnLogicalSide(arg0: Internal.Level_, arg1: Internal.BooleanSupplier_, arg2: Internal.BooleanSupplier_): boolean;
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
        callOnLogicalServer<T>(arg0: Internal.Level_, arg1: Internal.Supplier_<T>, arg2: Internal.Supplier_<T>): T;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        "callOnLogicalClient(net.minecraft.world.level.Level,java.util.function.LongSupplier,long)"(arg0: Internal.Level_, arg1: Internal.LongSupplier_, arg2: number): number;
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
        callOnLogicalClient(arg0: Internal.Level_, arg1: Internal.Runnable_): void;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        "callOnLogicalClient(net.minecraft.world.level.Level,java.util.function.Consumer)"(arg0: Internal.Level_, arg1: Internal.Consumer_<Internal.Level>): void;
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
        static createProperties(arg0: Internal.MapColor_, arg1: SoundType_, arg2: number, arg3: number, arg4: boolean): Internal.BlockBehaviour$Properties;
        "callOnLogicalServer(net.minecraft.world.level.Level,java.util.function.Consumer)"(arg0: Internal.Level_, arg1: Internal.Consumer_<Internal.Level>): void;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        buildUpdatedState(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.BlockState;
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
        "callOnLogicalSide(net.minecraft.world.level.Level,java.util.function.DoubleSupplier,java.util.function.DoubleSupplier)"(arg0: Internal.Level_, arg1: Internal.DoubleSupplier_, arg2: Internal.DoubleSupplier_): number;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        "callOnLogicalClient(net.minecraft.world.level.Level,java.lang.Runnable)"(arg0: Internal.Level_, arg1: Internal.Runnable_): void;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        callOnLogicalSide(arg0: Internal.Level_, arg1: Internal.IntSupplier_, arg2: Internal.IntSupplier_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        callOnLogicalSide<T>(arg0: Internal.Level_, arg1: Internal.Supplier_<T>, arg2: Internal.Supplier_<T>): T;
        getBlockBuilder(): Internal.BlockBuilder;
        createItemStack(): Internal.ItemStack;
        getIdLocation(): ResourceLocation;
        callOnLogicalClient(arg0: Internal.Level_, arg1: Internal.BooleanSupplier_): boolean;
        "callOnLogicalClient(net.minecraft.world.level.Level,java.util.function.DoubleSupplier,double)"(arg0: Internal.Level_, arg1: Internal.DoubleSupplier_, arg2: number): number;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        "callOnLogicalSide(net.minecraft.world.level.Level,java.util.function.Supplier,java.util.function.Supplier)"<T>(arg0: Internal.Level_, arg1: Internal.Supplier_<T>, arg2: Internal.Supplier_<T>): T;
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
        "callOnLogicalSide(net.minecraft.world.level.Level,java.util.function.LongSupplier,java.util.function.LongSupplier)"(arg0: Internal.Level_, arg1: Internal.LongSupplier_, arg2: Internal.LongSupplier_): number;
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
        "callOnLogicalServer(net.minecraft.world.level.Level,java.util.function.BooleanSupplier)"(arg0: Internal.Level_, arg1: Internal.BooleanSupplier_): boolean;
        "callOnLogicalSide(net.minecraft.world.level.Level,java.lang.Runnable,java.lang.Runnable)"(arg0: Internal.Level_, arg1: Internal.Runnable_, arg2: Internal.Runnable_): void;
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
        updateBlockState(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: number): void;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        callOnLogicalClient(arg0: Internal.Level_, arg1: Internal.Consumer_<Internal.Level>): void;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        callOnLogicalServer(arg0: Internal.Level_, arg1: Internal.BooleanSupplier_): boolean;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        "callOnLogicalServer(net.minecraft.world.level.Level,java.util.function.DoubleSupplier,double)"(arg0: Internal.Level_, arg1: Internal.DoubleSupplier_, arg2: number): number;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        "callOnLogicalServer(net.minecraft.world.level.Level,java.util.function.LongSupplier,long)"(arg0: Internal.Level_, arg1: Internal.LongSupplier_, arg2: number): number;
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
        static lightValueFrom(arg0: number): number;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        callOnLogicalSide(arg0: Internal.Level_, arg1: Internal.DoubleSupplier_, arg2: Internal.DoubleSupplier_): number;
        callOnLogicalClient(arg0: Internal.Level_, arg1: Internal.IntSupplier_, arg2: number): number;
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
        callOnLogicalServer(arg0: Internal.Level_, arg1: Internal.Runnable_): void;
        setSpeedFactor(arg0: number): void;
        callOnLogicalClient<T>(arg0: Internal.Level_, arg1: Internal.Supplier_<T>, arg2: Internal.Supplier_<T>): T;
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
        callOnLogicalSide(arg0: Internal.Level_, arg1: Internal.Runnable_, arg2: Internal.Runnable_): void;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        callOnLogicalSide(arg0: Internal.Level_, arg1: Internal.LongSupplier_, arg2: Internal.LongSupplier_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        "callOnLogicalServer(net.minecraft.world.level.Level,java.util.function.IntSupplier,int)"(arg0: Internal.Level_, arg1: Internal.IntSupplier_, arg2: number): number;
        callOnLogicalServer(arg0: Internal.Level_, arg1: Internal.Consumer_<Internal.Level>): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        "callOnLogicalClient(net.minecraft.world.level.Level,java.util.function.IntSupplier,int)"(arg0: Internal.Level_, arg1: Internal.IntSupplier_, arg2: number): number;
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
        callOnLogicalClient(arg0: Internal.Level_, arg1: Internal.LongSupplier_, arg2: number): number;
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
        callOnLogicalServer(arg0: Internal.Level_, arg1: Internal.LongSupplier_, arg2: number): number;
        createBlockItem(arg0: Internal.Item$Properties_): Internal.BlockItem;
        createItemStack(arg0: number): Internal.ItemStack;
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
        callOnLogicalServer(arg0: Internal.Level_, arg1: Internal.IntSupplier_, arg2: number): number;
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
        callOnLogicalClient(arg0: Internal.Level_, arg1: Internal.DoubleSupplier_, arg2: number): number;
        lychee$setTickable(arg0: boolean): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        "callOnLogicalServer(net.minecraft.world.level.Level,java.util.function.Supplier,java.util.function.Supplier)"<T>(arg0: Internal.Level_, arg1: Internal.Supplier_<T>, arg2: Internal.Supplier_<T>): T;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getNameForTranslation(arg0: Internal.Block_): net.minecraft.network.chat.Component;
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
    type ModOreBlock_ = ModOreBlock;
    interface RepositorySource {
        abstract loadPacks(arg0: Internal.Consumer_<Internal.Pack>): void;
        (arg0: Internal.Consumer<Internal.Pack>): void;
    }
    type RepositorySource_ = RepositorySource | ((arg0: Internal.Consumer<Internal.Pack>)=> void);
    interface GameProfileRepository {
        abstract findProfilesByNames(arg0: string[], arg1: Internal.Agent_, arg2: Internal.ProfileLookupCallback_): void;
        (arg0: string[], arg1: Internal.Agent, arg2: Internal.ProfileLookupCallback): void;
    }
    type GameProfileRepository_ = GameProfileRepository | ((arg0: string[], arg1: Internal.Agent, arg2: Internal.ProfileLookupCallback)=> void);
    interface ICoFHItem extends Internal.IForgeItem {
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        abstract isRepairable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        abstract setModId(arg0: string): this;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isActive(arg0: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        hasActiveTag(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        setActive(arg0: Internal.ItemStack_, arg1: boolean): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        addModeChangeTooltip(arg0: Internal.IMultiModeItem_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: Internal.List_<net.minecraft.network.chat.Component>, arg4: Internal.TooltipFlag_): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        setActive(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        handler$daa000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        addIncrementModeChangeTooltip(arg0: Internal.IMultiModeItem_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: Internal.List_<net.minecraft.network.chat.Component>, arg4: Internal.TooltipFlag_): void;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        "setActive(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.LivingEntity)"(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        "setActive(net.minecraft.world.item.ItemStack,boolean)"(arg0: Internal.ItemStack_, arg1: boolean): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        addEnergyTooltip(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_, arg4: number, arg5: number, arg6: boolean): void;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        set modId(arg0: string)
    }
    type ICoFHItem_ = ICoFHItem;
    interface IGuiInputElement <S extends Internal.ISubGuiBox, G extends Internal.Screen, C extends Internal.AbstractContainerMenu> {
        abstract getColor(): number;
        abstract getRenderPattern(): Internal.IConfigRenderPattern;
        abstract getName(): net.minecraft.network.chat.Component;
        abstract deactivate(): void;
        abstract activate(): void;
        abstract loadTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>): void;
        abstract validate(): net.minecraft.network.chat.Component;
        abstract getSymbol(): string;
        abstract createSubGui(arg0: number, arg1: number, arg2: number, arg3: number, arg4: G, arg5: C): S;
        get color(): number
        get renderPattern(): Internal.IConfigRenderPattern
        get name(): net.minecraft.network.chat.Component
        get symbol(): string
    }
    type IGuiInputElement_<S extends Internal.ISubGuiBox, G extends Internal.Screen, C extends Internal.AbstractContainerMenu> = IGuiInputElement<S, G, C>;
    class ShapelessFluxCrafterRecipe$Serializer implements Internal.RecipeSerializer<Internal.ShapelessFluxCrafterRecipe> {
        constructor()
        getClass(): typeof any;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        toString(): string;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.item.crafting.Recipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.ShapelessFluxCrafterRecipe;
        notifyAll(): void;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,com.blakebr0.extendedcrafting.crafting.recipe.ShapelessFluxCrafterRecipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.ShapelessFluxCrafterRecipe_): void;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.ShapelessFluxCrafterRecipe;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        notify(): void;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        wait(arg0: number, arg1: number): void;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.ShapelessFluxCrafterRecipe;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        hashCode(): number;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.ShapelessFluxCrafterRecipe_): void;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.ShapelessFluxCrafterRecipe;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.ShapelessFluxCrafterRecipe;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        get class(): typeof any
    }
    type ShapelessFluxCrafterRecipe$Serializer_ = ShapelessFluxCrafterRecipe$Serializer;
    interface GameRulesIntRuleAccessor {
        abstract setValue(arg0: number): void;
        abstract getValue(): number;
        set value(arg0: number)
        get value(): number
    }
    type GameRulesIntRuleAccessor_ = GameRulesIntRuleAccessor;
    class LevelEvent extends net.minecraftforge.eventbus.api.Event implements Internal.EventHandlerImplCommon$LevelEventAttachment {
        constructor()
        constructor(arg0: Internal.LevelAccessor_)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        architectury$getAttachedLevel(): Internal.LevelAccessor;
        notifyAll(): void;
        isCanceled(): boolean;
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
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get level(): Internal.LevelAccessor
    }
    type LevelEvent_ = LevelEvent;
    class TerminalStorageScreenSizeEvent extends net.minecraftforge.eventbus.api.Event {
        constructor()
        constructor(arg0: number, arg1: number)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        getWidth(): number;
        static getWidthHeight(): org.apache.commons.lang3.tuple.Pair<number, number>;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
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
        setHeight(arg0: number): void;
        setWidth(arg0: number): void;
        getHeight(): number;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        get width(): number
        get widthHeight(): org.apache.commons.lang3.tuple.Pair<number, number>
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        set height(arg0: number)
        set width(arg0: number)
        get height(): number
    }
    type TerminalStorageScreenSizeEvent_ = TerminalStorageScreenSizeEvent;
    class TransparencyType extends Internal.Enum<Internal.TransparencyType> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static values(): Internal.TransparencyType[];
        "compareTo(net.irisshaders.batchedentityrendering.impl.TransparencyType)"(arg0: Internal.TransparencyType_): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.TransparencyType>>;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        getDeclaringClass(): typeof Internal.TransparencyType;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static valueOf(name: string): Internal.TransparencyType;
        compareTo(arg0: Internal.TransparencyType_): number;
        get class(): typeof any
        get declaringClass(): typeof Internal.TransparencyType
        static readonly OPAQUE_DECAL: (Internal.TransparencyType) & (Internal.TransparencyType);
        static readonly GENERAL_TRANSPARENT: (Internal.TransparencyType) & (Internal.TransparencyType);
        static readonly LINES: (Internal.TransparencyType) & (Internal.TransparencyType);
        static readonly OPAQUE: (Internal.TransparencyType) & (Internal.TransparencyType);
        static readonly DECAL: (Internal.TransparencyType) & (Internal.TransparencyType);
        static readonly WATER_MASK: (Internal.TransparencyType) & (Internal.TransparencyType);
    }
    type TransparencyType_ = "decal" | TransparencyType | "water_mask" | "opaque" | "general_transparent" | "opaque_decal" | "lines";
    class CreativeModeTab$Row extends Internal.Enum<Internal.CreativeModeTab$Row> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static values(): Internal.CreativeModeTab$Row[];
        getDeclaringClass(): typeof Internal.CreativeModeTab$Row;
        toString(): string;
        notifyAll(): void;
        static valueOf(arg0: string): Internal.CreativeModeTab$Row;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.CreativeModeTab$Row>>;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        "compareTo(net.minecraft.world.item.CreativeModeTab$Row)"(arg0: Internal.CreativeModeTab$Row_): number;
        compareTo(arg0: Internal.CreativeModeTab$Row_): number;
        get class(): typeof any
        get declaringClass(): typeof Internal.CreativeModeTab$Row
        static readonly BOTTOM: (Internal.CreativeModeTab$Row) & (Internal.CreativeModeTab$Row);
        static readonly TOP: (Internal.CreativeModeTab$Row) & (Internal.CreativeModeTab$Row);
    }
    type CreativeModeTab$Row_ = "bottom" | CreativeModeTab$Row | "top";
    interface KeybindUsingArmor {
        abstract onKeyPacket(arg0: Internal.Entity_, arg1: Internal.ItemStack_, arg2: number): void;
        (arg0: Internal.Entity, arg1: Internal.ItemStack, arg2: number): void;
    }
    type KeybindUsingArmor_ = ((arg0: Internal.Entity, arg1: Internal.ItemStack, arg2: number)=> void) | KeybindUsingArmor;
    interface IRoutingFilterProvider {
        abstract getContainedStackForItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): Internal.ItemStack;
        (arg0: Internal.ItemStack, arg1: Internal.ItemStack): Internal.ItemStack_;
    }
    type IRoutingFilterProvider_ = IRoutingFilterProvider | ((arg0: Internal.ItemStack, arg1: Internal.ItemStack)=> Internal.ItemStack_);
    abstract class AbstractElementHolderItem extends Internal.ECItem implements Internal.ISourceInteractable {
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        static addAttributeMultiMapToTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.Multimap_<Internal.Attribute, Internal.AttributeModifier>): void;
        abstract getElementStorage(arg0: Internal.ItemStack_): Internal.IElementStorage;
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
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getElementCapacity(): number;
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
        setFoil(arg0: boolean): Internal.ECItem;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getSavedPos(arg0: Internal.ItemStack_): BlockPos;
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
        static addAttributeMultiMapToTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.Multimap_<Internal.Attribute, Internal.AttributeModifier>, arg2: net.minecraft.network.chat.Component_): void;
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
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
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
        removeSavedPos(arg0: Internal.ItemStack_): void;
        canInteractWithSource(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
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
        setSavedPos(arg0: Internal.ItemStack_, arg1: BlockPos_): void;
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
        getTransferAmount(): number;
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
        static getAttributeTooltip(arg0: Internal.Attribute_, arg1: Internal.AttributeModifier_): Internal.MutableComponent;
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
        get elementCapacity(): number
        set digSpeed(speed: number)
        set foil(arg0: boolean)
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
        get transferAmount(): number
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type AbstractElementHolderItem_ = AbstractElementHolderItem;
    interface ISustainedInventory {
        hasSustainedInventory(): boolean;
        abstract setSustainedInventory(nbtTags: Internal.ListTag_): void;
        abstract getSustainedInventory(): Internal.ListTag;
        set sustainedInventory(nbtTags: Internal.ListTag_)
        get sustainedInventory(): Internal.ListTag
    }
    type ISustainedInventory_ = ISustainedInventory;
    class DamageScaling extends Internal.Enum<Internal.DamageScaling> implements Internal.StringRepresentable {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        "compareTo(net.minecraft.world.damagesource.DamageScaling)"(arg0: Internal.DamageScaling_): number;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        toString(): string;
        static valueOf(arg0: string): Internal.DamageScaling;
        getSerializedName(): string;
        notifyAll(): void;
        getDeclaringClass(): typeof Internal.DamageScaling;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        compareTo(arg0: Internal.DamageScaling_): number;
        hashCode(): number;
        static values(): Internal.DamageScaling[];
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.DamageScaling>>;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.DamageScaling
        static readonly NEVER: (Internal.DamageScaling) & (Internal.DamageScaling);
        static readonly WHEN_CAUSED_BY_LIVING_NON_PLAYER: (Internal.DamageScaling) & (Internal.DamageScaling);
        static readonly ALWAYS: (Internal.DamageScaling) & (Internal.DamageScaling);
        static readonly CODEC: Internal.Codec<Internal.DamageScaling>;
    }
    type DamageScaling_ = DamageScaling | "never" | "always" | "when_caused_by_living_non_player";
    interface Freezable <T> extends Internal.Cloneable {
        abstract cloneAsThawed(): T;
        abstract freeze(): T;
        abstract isFrozen(): boolean;
        get frozen(): boolean
    }
    type Freezable_<T> = Freezable<T>;
    class ItemDrainBlock extends Internal.Block implements Internal.IBE<Internal.ItemDrainBlockEntity>, com.simibubi.create.content.equipment.wrench.IWrenchable {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        handler$cag000$betterend$be_getDroppedStacks(state: Internal.BlockState_, builder: Internal.LootParams$Builder_, info: Internal.CallbackInfoReturnable_<any>): void;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getBlockEntityType(): Internal.BlockEntityType<Internal.ItemDrainBlockEntity>;
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
        getBlockEntityClass(): typeof Internal.ItemDrainBlockEntity;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.ItemDrainBlockEntity;
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
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.ItemDrainBlockEntity>;
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
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): InteractionResult;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.ItemDrainBlockEntity>): void;
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
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.ItemDrainBlockEntity, InteractionResult>): InteractionResult;
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
        get blockEntityType(): Internal.BlockEntityType<Internal.ItemDrainBlockEntity>
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
        get blockEntityClass(): typeof Internal.ItemDrainBlockEntity
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
    type ItemDrainBlock_ = ItemDrainBlock;
    class RenderWorldEvent extends net.minecraftforge.eventbus.api.Event {
        constructor(poseStack: Internal.PoseStack_, partialTicks: number)
        constructor()
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        getPoseStack(): Internal.PoseStack;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        getPartialTicks(): number;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get poseStack(): Internal.PoseStack
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get partialTicks(): number
        get phase(): Internal.EventPriority
    }
    type RenderWorldEvent_ = RenderWorldEvent;
    class FlatLayerInfo {
        constructor(arg0: number, arg1: Internal.Block_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        getBlockState(): Internal.BlockState;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        getHeight(): number;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get blockState(): Internal.BlockState
        get height(): number
        static readonly CODEC: Internal.Codec<Internal.FlatLayerInfo>;
    }
    type FlatLayerInfo_ = FlatLayerInfo;
    interface PropertyChangeListener extends Internal.EventListener {
        abstract propertyChange(arg0: Internal.PropertyChangeEvent_): void;
        (arg0: Internal.PropertyChangeEvent): void;
    }
    type PropertyChangeListener_ = PropertyChangeListener | ((arg0: Internal.PropertyChangeEvent)=> void);
    class BiomeMatcher extends Internal.Record implements Internal.Predicate<Internal.Holder<Internal.Biome>> {
        constructor(ifAll: Internal.Optional_<Internal.List<Internal.HolderSet<Internal.Biome>>>, ifAny: Internal.Optional_<Internal.List<Internal.HolderSet<Internal.Biome>>>, excluding: Internal.Optional_<Internal.List<Internal.HolderSet<Internal.Biome>>>)
        getClass(): typeof any;
        static not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        "test(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Biome>): boolean;
        toString(): string;
        ifAll(): Internal.Optional<Internal.List<Internal.HolderSet<Internal.Biome>>>;
        notifyAll(): void;
        and(arg0: Internal.Predicate_<Internal.Holder<Internal.Biome>>): Internal.Predicate<Internal.Holder<Internal.Biome>>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        excluding(): Internal.Optional<Internal.List<Internal.HolderSet<Internal.Biome>>>;
        static isEqual<T>(arg0: any): Internal.Predicate<T>;
        test(arg0: any): boolean;
        hashCode(): number;
        ifAny(): Internal.Optional<Internal.List<Internal.HolderSet<Internal.Biome>>>;
        wait(): void;
        wait(arg0: number): void;
        "test(java.lang.Object)"(arg0: any): boolean;
        test(arg0: Internal.Holder_<Internal.Biome>): boolean;
        equals(arg0: any): boolean;
        or(arg0: Internal.Predicate_<Internal.Holder<Internal.Biome>>): Internal.Predicate<Internal.Holder<Internal.Biome>>;
        negate(): Internal.Predicate<Internal.Holder<Internal.Biome>>;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.BiomeMatcher>;
    }
    type BiomeMatcher_ = BiomeMatcher;
    interface ProgressivePromise <V> extends Internal.Promise<V>, Internal.ProgressiveFuture<V> {
        abstract isSuccess(): boolean;
        abstract setProgress(arg0: number, arg1: number): this;
        abstract addListener(arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<V>>): this;
        abstract tryFailure(arg0: Internal.Throwable_): boolean;
        abstract awaitUninterruptibly(arg0: number, arg1: Internal.TimeUnit_): boolean;
        abstract cause(): Internal.Throwable;
        abstract get(): V;
        abstract await(arg0: number, arg1: Internal.TimeUnit_): boolean;
        abstract await(arg0: number): boolean;
        abstract addListeners(...arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<V>>[]): this;
        abstract setUncancellable(): boolean;
        abstract trySuccess(arg0: V): boolean;
        abstract syncUninterruptibly(): this;
        abstract awaitUninterruptibly(arg0: number): boolean;
        abstract isCancelled(): boolean;
        abstract removeListeners(...arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<V>>[]): this;
        abstract await(): this;
        abstract sync(): this;
        abstract isDone(): boolean;
        abstract cancel(arg0: boolean): boolean;
        abstract getNow(): V;
        abstract setSuccess(arg0: V): this;
        abstract removeListener(arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<V>>): this;
        abstract setFailure(arg0: Internal.Throwable_): this;
        abstract isCancellable(): boolean;
        abstract get(arg0: number, arg1: Internal.TimeUnit_): V;
        abstract awaitUninterruptibly(): this;
        abstract tryProgress(arg0: number, arg1: number): boolean;
        get success(): boolean
        get cancelled(): boolean
        get done(): boolean
        get now(): V
        set success(arg0: V)
        set failure(arg0: Internal.Throwable_)
        get cancellable(): boolean
    }
    type ProgressivePromise_<V> = ProgressivePromise<V>;
    class UpgradeHandler extends Internal.ItemStackHandler {
        constructor(arg0: number, arg1: Internal.IStorageWrapper_, arg2: Internal.CompoundTag_, arg3: Internal.Runnable_, arg4: Internal.Runnable_)
        setStackInSlot(arg0: number, arg1: Internal.ItemStack_): void;
        notify(): void;
        clear(ingredient: Internal.Ingredient_): void;
        "extractItem(int,int,boolean)"(arg0: number, arg1: number, arg2: boolean): Internal.ItemStack;
        registerUpgradeDefaultsHandler<T extends Internal.IUpgradeWrapper>(arg0: T, arg1: Internal.Consumer_<T>): void;
        find(): number;
        getSlots(): number;
        setChanged(): void;
        "getSlots()"(): number;
        kjs$self(): Internal.IItemHandler;
        setRenderUpgradeItems(): void;
        "insertItem(int,net.minecraft.world.item.ItemStack,boolean)"(i: number, itemStack: Internal.ItemStack_, b: boolean): Internal.ItemStack;
        "getStackInSlot(int)"(i: number): Internal.ItemStack;
        copyTo(arg0: Internal.UpgradeHandler_): void;
        getTypeWrappers<T extends Internal.IUpgradeWrapper>(arg0: Internal.UpgradeType_<T>): Internal.List<T>;
        "getSlotLimit(int)"(arg0: number): number;
        getWidth(): number;
        getSlotLimit(arg0: number): number;
        "setStackInSlot(int,net.minecraft.world.item.ItemStack)"(arg0: number, arg1: Internal.ItemStack_): void;
        wait(): void;
        isItemValid(arg0: number, arg1: Internal.ItemStack_): boolean;
        getClass(): typeof any;
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        removeRefreshCallback(): void;
        isEmpty(): boolean;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        getWrappersThatImplement<T>(arg0: T): Internal.List<T>;
        getSlotWrappers(): Internal.Map<number, Internal.IUpgradeWrapper>;
        wait(arg0: number, arg1: number): void;
        extractItem(arg0: number, arg1: number, arg2: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        increaseSize(arg0: number): void;
        serializeNBT(): Internal.Tag;
        getListOfWrappersThatImplement<T>(arg0: T): Internal.List<T>;
        getStackInSlot(arg0: number): Internal.ItemStack;
        getHeight(): number;
        countNonEmpty(): number;
        setPersistent(arg0: boolean): void;
        asContainer(): net.minecraft.world.Container;
        deserializeNBT(arg0: Internal.Tag_): void;
        toString(): string;
        setRefreshCallBack(arg0: Internal.Runnable_): void;
        getWrappersThatImplementFromMainStorage<T>(arg0: T): Internal.List<T>;
        notifyAll(): void;
        getAllItems(): Internal.List<Internal.ItemStack>;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        refreshWrappersThatImplementAndTypeWrappers(): void;
        insertItem(arg0: number, arg1: Internal.ItemStack_, arg2: boolean): Internal.ItemStack;
        "isItemValid(int,net.minecraft.world.item.ItemStack)"(i: number, itemStack: Internal.ItemStack_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        saveInventory(): void;
        hasUpgrade<T extends Internal.IUpgradeWrapper>(arg0: Internal.UpgradeType_<T>): boolean;
        isMutable(): boolean;
        clear(): void;
        wait(arg0: number): void;
        find(ingredient: Internal.Ingredient_): number;
        setSize(arg0: number): void;
        refreshUpgradeWrappers(): void;
        equals(arg0: any): boolean;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        get slots(): number
        get "slots()"(): number
        get width(): number
        get class(): typeof any
        get empty(): boolean
        get slotWrappers(): Internal.Map<number, Internal.IUpgradeWrapper>
        get height(): number
        set persistent(arg0: boolean)
        set refreshCallBack(arg0: Internal.Runnable_)
        get allItems(): Internal.List<Internal.ItemStack>
        get mutable(): boolean
        set size(arg0: number)
        static readonly UPGRADE_INVENTORY_TAG: ("upgradeInventory") & (string);
    }
    type UpgradeHandler_ = UpgradeHandler;
    class CacheStats {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
        getClass(): typeof any;
        plus(arg0: Internal.CacheStats_): this;
        toString(): string;
        evictionCount(): number;
        hitCount(): number;
        notifyAll(): void;
        loadExceptionRate(): number;
        missCount(): number;
        hitRate(): number;
        notify(): void;
        loadExceptionCount(): number;
        wait(arg0: number, arg1: number): void;
        totalLoadTime(): number;
        hashCode(): number;
        missRate(): number;
        loadSuccessCount(): number;
        wait(): void;
        loadCount(): number;
        wait(arg0: number): void;
        averageLoadPenalty(): number;
        minus(arg0: Internal.CacheStats_): this;
        equals(arg0: any): boolean;
        requestCount(): number;
        get class(): typeof any
    }
    type CacheStats_ = CacheStats;
    class BiomeConfigRule extends Internal.Record {
        constructor(biomeSelector: org.orecruncher.dsurround.lib.scripting.Script_, comment: Internal.Optional_<string>, priority: number, traits: Internal.List_<Internal.BiomeTrait>, clearSounds: boolean, fogColor: Internal.Optional_<Internal.TextColor>, additionalSoundChance: Internal.Optional_<org.orecruncher.dsurround.lib.scripting.Script>, moodSoundChance: Internal.Optional_<org.orecruncher.dsurround.lib.scripting.Script>, acoustics: Internal.List_<Internal.AcousticConfig>)
        getClass(): typeof any;
        priority(): number;
        biomeSelector(): org.orecruncher.dsurround.lib.scripting.Script;
        toString(): string;
        traits(): Internal.List<Internal.BiomeTrait>;
        additionalSoundChance(): Internal.Optional<org.orecruncher.dsurround.lib.scripting.Script>;
        notifyAll(): void;
        clearSounds(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        fogColor(): Internal.Optional<Internal.TextColor>;
        hashCode(): number;
        acoustics(): Internal.List<Internal.AcousticConfig>;
        moodSoundChance(): Internal.Optional<org.orecruncher.dsurround.lib.scripting.Script>;
        wait(): void;
        wait(arg0: number): void;
        equals(o: any): boolean;
        comment(): Internal.Optional<string>;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.BiomeConfigRule>;
    }
    type BiomeConfigRule_ = BiomeConfigRule;
    class CoralWallFanBlock extends Internal.BaseCoralWallFanBlock {
        constructor(arg0: Internal.Block_, arg1: Internal.BlockBehaviour$Properties_)
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
        static scanForWater(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
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
        tryScheduleDieTick(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): void;
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
    }
    type CoralWallFanBlock_ = CoralWallFanBlock;
    class ReportChatMessage {
        constructor(arg0: number, arg1: Internal.UUID_, arg2: Internal.UUID_, arg3: Internal.Instant_, arg4: number, arg5: Internal.List_<Internal.ByteBuffer>, arg6: string, arg7: Internal.ByteBuffer_, arg8: boolean)
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
        signature: Internal.ByteBuffer;
        profileId: Internal.UUID;
        lastSeen: Internal.List<Internal.ByteBuffer>;
        salt: number;
        index: number;
        sessionId: Internal.UUID;
        timestamp: Internal.Instant;
        messageReported: boolean;
        message: string;
    }
    type ReportChatMessage_ = ReportChatMessage;
    interface PoseStackAccessor {
        abstract getPoseStack(): Internal.Deque<Internal.PoseStack$Pose>;
        get poseStack(): Internal.Deque<Internal.PoseStack$Pose>
        (): Internal.Deque_<Internal.PoseStack$Pose>;
    }
    type PoseStackAccessor_ = (()=> Internal.Deque_<Internal.PoseStack$Pose>) | PoseStackAccessor;
    interface IPortableTerminal extends Internal.IEnergySource, Internal.ITerminalHost {
        isUpgradedWith(arg0: Internal.ItemLike_): boolean;
        getInstalledUpgrades(arg0: Internal.ItemLike_): number;
        getCloseHotkey(): string;
        abstract getMainMenuIcon(): Internal.ItemStack;
        getUpgrades(): Internal.IUpgradeInventory;
        abstract getConfigManager(): Internal.IConfigManager;
        abstract extractAEPower(arg0: number, arg1: Internal.Actionable_, arg2: Internal.PowerMultiplier_): number;
        abstract getInventory(): Internal.MEStorage;
        abstract returnToMainMenu(arg0: Internal.Player_, arg1: Internal.ISubMenu_): void;
        get closeHotkey(): string
        get mainMenuIcon(): Internal.ItemStack
        get upgrades(): Internal.IUpgradeInventory
        get configManager(): Internal.IConfigManager
        get inventory(): Internal.MEStorage
    }
    type IPortableTerminal_ = IPortableTerminal;
    class BaseFurnaceBlock$Stone extends Internal.BaseFurnaceBlock implements Internal.BehaviourStone {
        constructor(properties: Internal.BlockBehaviour$Properties_)
        constructor(source: Internal.Block_)
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
        registerBlockModel(stateId: ResourceLocation_, modelId: ResourceLocation_, blockState: Internal.BlockState_, modelCache: Internal.Map_<ResourceLocation, Internal.UnbakedModel>): void;
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
        newBlockEntity(blockPos: BlockPos_, blockState: Internal.BlockState_): Internal.BlockEntity;
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
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static createFurnaceTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockEntityType_<T>, arg2: Internal.BlockEntityType_<Internal.AbstractFurnaceBlockEntity>): Internal.BlockEntityTicker<T>;
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
        getTicker<T extends Internal.BlockEntity>(level: Internal.Level_, blockState: Internal.BlockState_, blockEntityType: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
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
        getBlockModel(blockId: ResourceLocation_, blockState: Internal.BlockState_): Internal.BlockModel;
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
        openContainer(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Player_): void;
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
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type BaseFurnaceBlock$Stone_ = BaseFurnaceBlock$Stone;
    interface LookupResult {
        isLookupEvaluationAllowedInValue(): boolean;
        abstract value(): string;
        get lookupEvaluationAllowedInValue(): boolean
        (): string;
    }
    type LookupResult_ = (()=> string) | LookupResult;
    interface IFluidLogType {
        isEmpty(): boolean;
        abstract getFluid(): Internal.Fluid;
        get empty(): boolean
        get fluid(): Internal.Fluid
        (): Internal.Fluid_;
    }
    type IFluidLogType_ = (()=> Internal.Fluid_) | IFluidLogType;
    class CompatibleTransmitterValidator <ACCEPTOR, NETWORK extends Internal.DynamicNetwork<ACCEPTOR, NETWORK, TRANSMITTER>, TRANSMITTER extends Internal.Transmitter<ACCEPTOR, NETWORK, TRANSMITTER>> {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        isNetworkCompatible(net: NETWORK): boolean;
        wait(arg0: number): void;
        isTransmitterCompatible(transmitter: Internal.Transmitter_<any, any, any>): boolean;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type CompatibleTransmitterValidator_<ACCEPTOR, NETWORK extends Internal.DynamicNetwork<ACCEPTOR, NETWORK, TRANSMITTER>, TRANSMITTER extends Internal.Transmitter<ACCEPTOR, NETWORK, TRANSMITTER>> = CompatibleTransmitterValidator<ACCEPTOR, NETWORK, TRANSMITTER>;
    class SparkleParticleData implements Internal.ParticleOptions {
        getClass(): typeof any;
        static noClip(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): Internal.SparkleParticleData;
        toString(): string;
        static corrupt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): Internal.SparkleParticleData;
        notifyAll(): void;
        static fake(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): Internal.SparkleParticleData;
        writeToNetwork(arg0: Internal.FriendlyByteBuf_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static sparkle(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): Internal.SparkleParticleData;
        hashCode(): number;
        wait(): void;
        writeToString(): string;
        wait(arg0: number): void;
        getType(): Internal.ParticleType<Internal.SparkleParticleData>;
        equals(arg0: any): boolean;
        get class(): typeof any
        get type(): Internal.ParticleType<Internal.SparkleParticleData>
        readonly noClip: boolean;
        readonly corrupt: boolean;
        readonly m: number;
        readonly g: number;
        readonly fake: boolean;
        static readonly DESERIALIZER: Internal.ParticleOptions$Deserializer<Internal.SparkleParticleData>;
        readonly r: number;
        readonly b: number;
        readonly size: number;
        static readonly CODEC: Internal.Codec<Internal.SparkleParticleData>;
    }
    type SparkleParticleData_ = SparkleParticleData;
    abstract class GpuTexture extends Internal.GpuResource implements Internal.IGpuSurface {
        abstract getBackendTexture(): Internal.BackendTexture;
        static move<T extends Internal.GpuResource>(sp: T): T;
        getLabel(): string;
        static "move(icyllis.arc3d.core.RefCounted)"<T extends Internal.RefCounted>(sp: T): T;
        removeUniqueKey(): void;
        getUniqueID(): Internal.GpuResource$UniqueID;
        notify(): void;
        static "create(icyllis.arc3d.engine.GpuResource)"<T extends Internal.GpuResource>(that: T): T;
        static "create(icyllis.arc3d.engine.GpuResource,icyllis.arc3d.engine.GpuResource)"<T extends Internal.GpuResource>(sp: T, that: T): T;
        getSampleCount(): number;
        unref(): void;
        unique(): boolean;
        static computeSize(format: Internal.BackendFormat_, width: number, height: number, sampleCount: number, mipmapped: boolean, approx: boolean): number;
        getSurfaceFlags(): number;
        abstract getMemorySize(): number;
        abstract getMaxMipmapLevel(): number;
        asRenderTarget(): Internal.GpuRenderTarget;
        getWidth(): number;
        static "move(icyllis.arc3d.core.RefCounted,icyllis.arc3d.core.RefCounted)"<T extends Internal.RefCounted>(sp: T, that: T): T;
        ref(): void;
        removeCommandBufferUsage(): void;
        setUniqueKey(key: Internal.IUniqueKey_): void;
        getScratchKey(): Internal.IScratchKey;
        wait(): void;
        static "create(icyllis.arc3d.core.RefCounted)"<T extends Internal.RefCounted>(that: T): T;
        isReadOnly(): boolean;
        isDestroyed(): boolean;
        getContext(): Internal.DirectContext;
        static create<T extends Internal.GpuResource>(that: T): T;
        hasRefOrCommandBufferUsage(): boolean;
        getClass(): typeof any;
        asTexture(): this;
        setMipmapsDirty(mipmapsDirty: boolean): void;
        static computeSize(format: Internal.BackendFormat_, width: number, height: number, sampleCount: number, levelCount: number, approx: boolean): number;
        wait(arg0: number, arg1: number): void;
        makeBudgeted(budgeted: boolean): void;
        static move<T extends Internal.GpuResource>(sp: T, that: T): T;
        static "computeSize(icyllis.arc3d.engine.BackendFormat,int,int,int,int,boolean)"(format: Internal.BackendFormat_, width: number, height: number, sampleCount: number, levelCount: number, approx: boolean): number;
        static computeSize(format: Internal.BackendFormat_, width: number, height: number, sampleCount: number, levelCount: number): number;
        static "computeSize(icyllis.arc3d.engine.BackendFormat,int,int,int,boolean,boolean)"(format: Internal.BackendFormat_, width: number, height: number, sampleCount: number, mipmapped: boolean, approx: boolean): number;
        isMipmapped(): boolean;
        addCommandBufferUsage(): void;
        getHeight(): number;
        static getApproxSize(size: number): number;
        setReleaseCallback(callback: Internal.ReleaseCallback_): void;
        static "move(icyllis.arc3d.engine.GpuResource,icyllis.arc3d.engine.GpuResource)"<T extends Internal.GpuResource>(sp: T, that: T): T;
        static "move(icyllis.arc3d.engine.GpuResource)"<T extends Internal.GpuResource>(sp: T): T;
        isWrapped(): boolean;
        toString(): string;
        notifyAll(): void;
        static create<T extends Internal.GpuResource>(sp: T, that: T): T;
        abstract getBackendFormat(): Internal.BackendFormat;
        abstract isExternal(): boolean;
        hashCode(): number;
        getBudgetType(): number;
        static "create(icyllis.arc3d.core.RefCounted,icyllis.arc3d.core.RefCounted)"<T extends Internal.RefCounted>(sp: T, that: T): T;
        getUniqueKey(): Internal.IUniqueKey;
        isProtected(): boolean;
        isFree(): boolean;
        setLabel(label: string): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        removeScratchKey(): void;
        isMipmapsDirty(): boolean;
        get backendTexture(): Internal.BackendTexture
        get label(): string
        get uniqueID(): Internal.GpuResource$UniqueID
        get sampleCount(): number
        get surfaceFlags(): number
        get memorySize(): number
        get maxMipmapLevel(): number
        get width(): number
        set uniqueKey(key: Internal.IUniqueKey_)
        get scratchKey(): Internal.IScratchKey
        get readOnly(): boolean
        get destroyed(): boolean
        get context(): Internal.DirectContext
        get class(): typeof any
        set mipmapsDirty(mipmapsDirty: boolean)
        get mipmapped(): boolean
        get height(): number
        set releaseCallback(callback: Internal.ReleaseCallback_)
        get wrapped(): boolean
        get backendFormat(): Internal.BackendFormat
        get external(): boolean
        get budgetType(): number
        get uniqueKey(): Internal.IUniqueKey
        get "protected"(): boolean
        get free(): boolean
        set label(label: string)
        get mipmapsDirty(): boolean
    }
    type GpuTexture_ = GpuTexture;
    class FractalTree extends Internal.DivineTree {
        constructor()
        getClass(): typeof any;
        place(arg0: Internal.FeaturePlaceContext_<Internal.TreeConfig>): boolean;
        hasSpace(arg0: Internal.BlockState_): boolean;
        safeSetBlock(arg0: Internal.WorldGenLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Predicate_<Internal.BlockState>): void;
        heightCheck(arg0: Internal.WorldGenLevel_, arg1: BlockPos_, arg2: number, arg3: number): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        place(arg0: Internal.FeatureConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        canBeHere(arg0: Internal.WorldGenLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.TreeConfig_): boolean;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        markAboveForPostProcessing(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        "place(divinerpg.world.feature.config.tree.TreeConfig,net.minecraft.world.level.WorldGenLevel,net.minecraft.world.level.chunk.ChunkGenerator,net.minecraft.util.RandomSource,net.minecraft.core.BlockPos)"(arg0: Internal.TreeConfig_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        static isStone(arg0: Internal.BlockState_): boolean;
        toString(): string;
        setBlock(arg0: Internal.LevelWriter_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        "place(net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration,net.minecraft.world.level.WorldGenLevel,net.minecraft.world.level.chunk.ChunkGenerator,net.minecraft.util.RandomSource,net.minecraft.core.BlockPos)"(arg0: Internal.FeatureConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        hasSpace(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): boolean;
        hashCode(): number;
        place(arg0: Internal.TreeConfig_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        wait(): void;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.TreeConfig, Feature<Internal.TreeConfig>>>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type FractalTree_ = FractalTree;
    class SoundBuffer implements Internal.MixinSoundBuffer {
        constructor(arg0: Internal.ByteBuffer_, arg1: Internal.AudioFormat_)
        getClass(): typeof any;
        discardAlBuffer(): void;
        toString(): string;
        releaseAlBuffer(): Internal.OptionalInt;
        notifyAll(): void;
        dsurround_setFormat(arg0: Internal.AudioFormat_): void;
        dsurround_getFormat(): Internal.AudioFormat;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        dsurround_getSample(): Internal.ByteBuffer;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type SoundBuffer_ = SoundBuffer;
    class ShapedEnderCrafterRecipe implements Internal.ISpecialRecipe, Internal.IEnderCrafterRecipe {
        constructor(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: Internal.NonNullList_<Internal.Ingredient>, arg4: Internal.ItemStack_)
        constructor(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: Internal.NonNullList_<Internal.Ingredient>, arg4: Internal.ItemStack_, arg5: number)
        getClass(): typeof any;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        getSchema(): Internal.RecipeSchema;
        getCraftingTime(): number;
        matches(arg0: Internal.IItemHandler_, arg1: number, arg2: number): boolean;
        handler$cmc000$bclib$bcl_getRemainingItems(container: net.minecraft.world.Container_, cir: Internal.CallbackInfoReturnable_<any>): void;
        "assemble(net.minecraft.world.Container,net.minecraft.core.RegistryAccess)"(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        assemble(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getSerializer(): Internal.RecipeSerializer<any>;
        getId(): ResourceLocation;
        matches(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        "assemble(net.minecraftforge.items.IItemHandler,net.minecraft.core.RegistryAccess)"(arg0: Internal.IItemHandler_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getHeight(): number;
        getMod(): string;
        getRemainingItems(arg0: net.minecraft.world.Container_): Internal.NonNullList<Internal.ItemStack>;
        "getRemainingItems(net.minecraftforge.items.IItemHandler)"(arg0: Internal.IItemHandler_): Internal.NonNullList<Internal.ItemStack>;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        assemble(arg0: Internal.IItemHandler_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        toString(): string;
        getWidth(): number;
        notifyAll(): void;
        matches(arg0: Internal.IItemHandler_): boolean;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        hashCode(): number;
        getOrCreateId(): ResourceLocation;
        "getRemainingItems(net.minecraft.world.Container)"(arg0: net.minecraft.world.Container_): Internal.NonNullList<Internal.ItemStack>;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        wait(): void;
        isIncomplete(): boolean;
        wait(arg0: number): void;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        getRemainingItems(arg0: Internal.IItemHandler_): Internal.NonNullList<Internal.ItemStack>;
        equals(arg0: any): boolean;
        get class(): typeof any
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get craftingTime(): number
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get height(): number
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get width(): number
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
    }
    type ShapedEnderCrafterRecipe_ = ShapedEnderCrafterRecipe;
    class ResolvedModule {
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        name(): string;
        hashCode(): number;
        configuration(): Internal.Configuration;
        wait(): void;
        reads(): Internal.Set<Internal.ResolvedModule>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        reference(): Internal.ModuleReference;
        get class(): typeof any
    }
    type ResolvedModule_ = ResolvedModule;
    class Rotations {
        constructor(arg0: Internal.ListTag_)
        constructor(arg0: number, arg1: number, arg2: number)
        getClass(): typeof any;
        getX(): number;
        getZ(): number;
        toString(): string;
        getY(): number;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getWrappedZ(): number;
        getWrappedY(): number;
        getWrappedX(): number;
        wait(): void;
        save(): Internal.ListTag;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get x(): number
        get z(): number
        get y(): number
        get wrappedZ(): number
        get wrappedY(): number
        get wrappedX(): number
        readonly z: number;
        readonly y: number;
        readonly x: number;
    }
    type Rotations_ = Rotations;
    interface IntIterable extends Internal.Iterable<number> {
        /**
         * @deprecated
        */
        "forEach(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): void;
        iterator(): Internal.Iterator<any>;
        spliterator(): Internal.Spliterator<any>;
        forEach(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        "forEach(it.unimi.dsi.fastutil.ints.IntConsumer)"(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<number>): void;
        forEach(arg0: Internal.IntConsumer_): void;
        "forEach(java.util.function.IntConsumer)"(arg0: Internal.IntConsumer_): void;
        intSpliterator(): Internal.IntSpliterator;
        intIterator(): Internal.IntIterator;
    }
    type IntIterable_ = IntIterable;
    class EntityWeight {
        constructor()
        getClass(): typeof any;
        readNetData(data: Internal.FriendlyByteBuf_): void;
        writeData(nbt: Internal.CompoundTag_): void;
        toString(): string;
        notifyAll(): void;
        getWeight(entity: Internal.Entity_): number;
        readData(nbt: Internal.CompoundTag_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        writeNetData(data: Internal.FriendlyByteBuf_): void;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        monster: number;
        boss: number;
        passive: number;
    }
    type EntityWeight_ = EntityWeight;
    class EntangledBinderItem extends com.supermartijn642.core.item.BaseItem {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(stack: Internal.ItemStack_, level: Internal.Level_, information: Internal.List_<net.minecraft.network.chat.Component>, flag: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        interactWithEntity(stack: Internal.ItemStack_, target: Internal.LivingEntity_, player: Internal.Player_, hand: Internal.InteractionHand_): Internal.BaseItem$InteractionFeedback;
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
        interactLivingEntity(stack: Internal.ItemStack_, player: Internal.Player_, target: Internal.LivingEntity_, hand: Internal.InteractionHand_): InteractionResult;
        modifyReturnValue$ecn000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        static getBoundPosition(arg0: Internal.ItemStack_): BlockPos;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(level: Internal.Level_, player: Internal.Player_, hand: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        inventoryUpdate(stack: Internal.ItemStack_, level: Internal.Level_, entity: Internal.Entity_, itemSlot: number, isSelected: boolean): void;
        isInCreativeGroup(tab: Internal.CreativeModeTab_): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        interactWithBlock(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.InteractionHand_, arg3: Internal.Level_, arg4: BlockPos_, arg5: Internal.Direction_, arg6: Vec3d_): Internal.BaseItem$InteractionFeedback;
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
        initializeClient(consumer: Internal.Consumer_<Internal.IClientItemExtensions>): void;
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
        interactWithBlockFirst(stack: Internal.ItemStack_, player: Internal.Player_, hand: Internal.InteractionHand_, level: Internal.Level_, hitPos: BlockPos_, hitSide: Internal.Direction_, hitLocation: Vec3d_): Internal.BaseItem$InteractionFeedback;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(stack: Internal.ItemStack_, level: Internal.Level_, entity: Internal.Entity_, slot: number, isSelected: boolean): void;
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
        onItemUseFirst(stack: Internal.ItemStack_, context: Internal.UseOnContext_): InteractionResult;
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
        static getBoundDimension(arg0: Internal.ItemStack_): ResourceLocation;
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
        useOn(context: Internal.UseOnContext_): InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        interact(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.InteractionHand_, arg3: Internal.Level_): Internal.BaseItem$ItemUseResult;
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
        static isBound(arg0: Internal.ItemStack_): boolean;
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
    type EntangledBinderItem_ = EntangledBinderItem;
    class FluidBlockBuilder extends Internal.BlockBuilder {
        constructor(b: Internal.FluidBuilder_)
        /**
         * Note block instrument.
        */
        instrument(i: Internal.NoteBlockInstrument_): Internal.BlockBuilder;
        /**
         * Bounces entities that land on this block by bounciness * their fall velocity.
         * Do not make bounciness negative, as that is a recipe for a long and laggy trip to the void
        */
        bounciness(bounciness: number): Internal.BlockBuilder;
        "transformObject(net.minecraft.world.level.block.Block)"(obj: Internal.Block_): Internal.Block;
        /**
         * Set what happens when an entity falls on the block. Do not use this for moving them, use bounce instead!
        */
        fallenOn(callbackJS: Internal.Consumer_<Internal.EntityFallenOnBlockCallbackJS>): Internal.BlockBuilder;
        createAdditionalObjects(): void;
        /**
         * Tags the item with the given tag.
        */
        tagItem(tag: ResourceLocation_): Internal.BlockBuilder;
        /**
         * Sets the translation key for this object, e.g. `block.minecraft.stone`.
        */
        translationKey(key: string): Internal.BuilderBase<Internal.Block>;
        /**
         * Set the block's model.
        */
        model(m: string): Internal.BlockBuilder;
        createObject(): any;
        sandSoundType(): Internal.BlockBuilder;
        getTranslationKeyGroup(): string;
        /**
         * Set the shape of the block.
        */
        box(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number): Internal.BlockBuilder;
        notify(): void;
        get(): Internal.Block;
        /**
         * Makes the block a redstone conductor.
        */
        redstoneConductor(b: boolean): Internal.BlockBuilder;
        noSoundType(): Internal.BlockBuilder;
        item(i: Internal.Consumer_<Internal.BlockItemBuilder>): Internal.BlockBuilder;
        getRegistryType(): Internal.RegistryInfo<any>;
        /**
         * Set the default state of the block.
        */
        defaultState(callbackJS: Internal.Consumer_<Internal.BlockStateModifyCallbackJS>): Internal.BlockBuilder;
        /**
         * Set what happens when an entity steps on the block
         * This is called every tick for every entity standing on the block, so be careful what you do here.
        */
        steppedOn(callbackJS: Internal.Consumer_<Internal.EntitySteppedOnBlockCallbackJS>): Internal.BlockBuilder;
        /**
         * Texture the block on all sides with the same texture.
        */
        textureAll(tex: string): Internal.BlockBuilder;
        /**
         * Makes displayName() override language files.
        */
        formattedDisplayName(): Internal.BuilderBase<Internal.Block>;
        /**
         * Helper method for setting the render type of the block to `translucent` correctly.
        */
        defaultTranslucent(): Internal.BlockBuilder;
        /**
         * Sets the block's map color dynamically per block state. If unset, defaults to NONE.
        */
        dynamicMapColor(m: Internal.Function_<Internal.BlockState, any>): Internal.BlockBuilder;
        /**
         * Tags both the block and the item with the given tag.
        */
        tagBoth(tag: ResourceLocation_): Internal.BlockBuilder;
        /**
         * Makes the block view blocking.
        */
        viewBlocking(b: boolean): Internal.BlockBuilder;
        /**
         * Makes the block unbreakable.
        */
        unbreakable(): Internal.BlockBuilder;
        /**
         * Add a blockstate property to the block.
         * 
         * For example, facing, lit, etc.
        */
        property(property: Internal.Property_<any>): Internal.BlockBuilder;
        /**
         * Sets the blast resistance of the block. Defaults to 3.
        */
        resistance(r: number): Internal.BlockBuilder;
        gravelSoundType(): Internal.BlockBuilder;
        getBuilderTranslationKey(): string;
        /**
         * Set the shape of the block.
        */
        box(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number, scale16: boolean): Internal.BlockBuilder;
        /**
         * Set the callback for determining the blocks state when placed.
        */
        placementState(callbackJS: Internal.Consumer_<Internal.BlockStateModifyPlacementCallbackJS>): Internal.BlockBuilder;
        /**
         * Set if the block can be replaced by something else.
        */
        canBeReplaced(callbackJS: Internal.Predicate_<Internal.CanBeReplacedCallbackJS>): Internal.BlockBuilder;
        /**
         * Sets random tick callback for this black.
        */
        randomTick(randomTickCallback: Internal.Consumer_<Internal.RandomTickCallbackJS>): Internal.BlockBuilder;
        wait(): void;
        /**
         * Set how this block reacts after an explosion. Note the block has already been destroyed at this point
        */
        exploded(callbackJS: Internal.Consumer_<Internal.BlockExplodedCallbackJS>): Internal.BlockBuilder;
        /**
         * Sets the light level of the block. Defaults to 0 (no light).
        */
        lightLevel(light: number): Internal.BlockBuilder;
        /**
         * Combined method of formattedDisplayName().displayName(name).
        */
        formattedDisplayName(name: net.minecraft.network.chat.Component_): Internal.BuilderBase<Internal.Block>;
        /**
         * Sets the display name for this object, e.g. `Stone`.
         * 
         * This will be overridden by a lang file if it exists.
        */
        displayName(name: net.minecraft.network.chat.Component_): Internal.BuilderBase<Internal.Block>;
        /**
         * Sets the block's map color. Defaults to NONE.
        */
        mapColor(m: Internal.MapColor_): Internal.BlockBuilder;
        static createShape(boxes: Internal.List_<Internal.AABB>): Internal.VoxelShape;
        /**
         * Makes the block not be solid.
        */
        notSolid(): Internal.BlockBuilder;
        generateLang(lang: Internal.LangEventJS_): void;
        /**
         * Sets the render type of the block. Can be `cutout`, `cutout_mipped`, `translucent`, or `basic`.
        */
        renderType(l: string): Internal.BlockBuilder;
        /**
         * Clears all drops for the block.
        */
        noDrops(): Internal.BlockBuilder;
        getClass(): typeof any;
        stoneSoundType(): Internal.BlockBuilder;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        setWaterlogged(waterlogged: boolean): Internal.BlockBuilder;
        createProperties(): Internal.BlockBehaviour$Properties;
        grassSoundType(): Internal.BlockBuilder;
        /**
         * Sets the block's sound type. Defaults to wood.
        */
        soundType(m: SoundType_): Internal.BlockBuilder;
        /**
         * Makes the block can be waterlogged.
        */
        waterlogged(): Internal.BlockBuilder;
        "transformObject(java.lang.Object)"(arg0: any): any;
        wait(arg0: number, arg1: number): void;
        /**
         * Set the callback used for determining how the block rotates
        */
        rotateState(callbackJS: Internal.Consumer_<Internal.BlockStateRotateCallbackJS>): Internal.BlockBuilder;
        /**
         * Set how high you can jump on the block.
        */
        jumpFactor(f: number): Internal.BlockBuilder;
        /**
         * Set the color of a specific layer of the block.
        */
        color(color: Internal.BlockTintFunction_): Internal.BlockBuilder;
        /**
         * Set the callback used for right-clicking on the block
        */
        rightClick(callbackJS: Internal.Consumer_<Internal.BlockRightClickedEventJS>): Internal.BlockBuilder;
        generateDataJsons(generator: Internal.DataJsonGenerator_): void;
        /**
         * Makes the block require a tool to have drops when broken.
        */
        requiresTool(f: boolean): Internal.BlockBuilder;
        /**
         * Texture a specific side of the block.
        */
        textureSide(direction: Internal.Direction_, tex: string): Internal.BlockBuilder;
        /**
         * Texture a specific texture key of the block.
        */
        texture(id: string, tex: string): Internal.BlockBuilder;
        /**
         * Checks if the block can be waterlogged.
        */
        canBeWaterlogged(): boolean;
        /**
         * Sets the hardness of the block. Defaults to 1.5.
         * 
         * Setting this to -1 will make the block unbreakable like bedrock.
        */
        hardness(h: number): Internal.BlockBuilder;
        glassSoundType(): Internal.BlockBuilder;
        /**
         * Creates a Block Entity for this block
        */
        blockEntity(callback: Internal.Consumer_<Internal.BlockEntityInfo>): Internal.BlockBuilder;
        /**
         * Set the block to have no corresponding item.
        */
        noItem(): Internal.BlockBuilder;
        transformObject(arg0: any): any;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getWaterlogged(): boolean;
        /**
         * Set the callback used for determining how the block is mirrored
        */
        mirrorState(callbackJS: Internal.Consumer_<Internal.BlockStateMirrorCallbackJS>): Internal.BlockBuilder;
        /**
         * Tags the block with the given tag.
        */
        tagBlock(tag: ResourceLocation_): Internal.BlockBuilder;
        /**
         * Set how slippery the block is.
        */
        slipperiness(f: number): Internal.BlockBuilder;
        toString(): string;
        /**
         * Sets the opacity of the block. Opaque blocks do not let light through.
        */
        opaque(o: boolean): Internal.BlockBuilder;
        woodSoundType(): Internal.BlockBuilder;
        notifyAll(): void;
        /**
         * Makes mobs not spawn on the block.
        */
        noValidSpawns(b: boolean): Internal.BlockBuilder;
        material(material: string): Internal.BlockBuilder;
        transformObject(obj: Internal.Block_): Internal.Block;
        /**
         * Makes the block transparent.
        */
        transparent(b: boolean): Internal.BlockBuilder;
        /**
         * Helper method for setting the render type of the block to `cutout` correctly.
        */
        defaultCutout(): Internal.BlockBuilder;
        /**
         * Sets the block should be a full block or not, like cactus or doors.
        */
        fullBlock(f: boolean): Internal.BlockBuilder;
        /**
         * Makes the block not collide with entities.
        */
        noCollision(): Internal.BlockBuilder;
        hashCode(): number;
        /**
         * Tags both the block and the item with the given tag.
        */
        tag(tag: ResourceLocation_): Internal.BlockBuilder;
        /**
         * Set how this block bounces/moves entities that land on top of this. Do not use this to modify the block, use fallOn instead!
         * Use ctx.bounce(height) or ctx.setVelocity(x, y, z) to change the entities velocity.
        */
        afterFallenOn(callbackJS: Internal.Consumer_<Internal.AfterEntityFallenOnBlockCallbackJS>): Internal.BlockBuilder;
        /**
         * Makes the block suffocating.
        */
        suffocating(b: boolean): Internal.BlockBuilder;
        /**
         * Set the color of a specific layer of the block.
        */
        color(index: number, color: Internal.BlockTintFunction_): Internal.BlockBuilder;
        wait(arg0: number): void;
        /**
         * Set how fast you can walk on the block.
         * 
         * Any value above 1 will make you walk insanely fast as your speed is multiplied by this value each tick.
         * 
         * Recommended values are between 0.1 and 1, useful for mimicking soul sand or ice.
        */
        speedFactor(f: number): Internal.BlockBuilder;
        /**
         * Makes the block require a tool to have drops when broken.
        */
        requiresTool(): Internal.BlockBuilder;
        equals(arg0: any): boolean;
        cropSoundType(): Internal.BlockBuilder;
        newID(pre: string, post: string): ResourceLocation;
        generateAssetJsons(generator: Internal.AssetJsonGenerator_): void;
        get translationKeyGroup(): string
        get registryType(): Internal.RegistryInfo<any>
        get builderTranslationKey(): string
        get class(): typeof any
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        set waterlogged(waterlogged: boolean)
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get waterlogged(): boolean
    }
    type FluidBlockBuilder_ = FluidBlockBuilder;
    interface INBTProvider {
        abstract readGeneratedFieldsFromNBT(arg0: Internal.CompoundTag_): void;
        abstract writeGeneratedFieldsToNBT(arg0: Internal.CompoundTag_): void;
    }
    type INBTProvider_ = INBTProvider;
    interface FloatingFlower {
        abstract writeNBT(): Internal.Tag;
        abstract getIslandType(): Internal.FloatingFlower$IslandType;
        abstract setIslandType(arg0: Internal.FloatingFlower$IslandType_): void;
        abstract getDisplayStack(): Internal.ItemStack;
        abstract readNBT(arg0: Internal.CompoundTag_): void;
        get islandType(): Internal.FloatingFlower$IslandType
        set islandType(arg0: Internal.FloatingFlower$IslandType_)
        get displayStack(): Internal.ItemStack
    }
    type FloatingFlower_ = FloatingFlower;
    class CraftingCoreBlock extends Internal.BaseTileEntityBlock {
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
        static readonly CRAFTING_CORE_SHAPE: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
    }
    type CraftingCoreBlock_ = CraftingCoreBlock;
    interface TickContainerAccess <T> extends Internal.TickAccess<T> {
        abstract count(): number;
        abstract schedule(arg0: Internal.ScheduledTick_<T>): void;
        abstract hasScheduledTick(arg0: BlockPos_, arg1: T): boolean;
    }
    type TickContainerAccess_<T> = TickContainerAccess<T>;
    class ClientboundRulesPacket extends Internal.MinimapMessage<Internal.ClientboundRulesPacket> {
        constructor(arg0: boolean, arg1: boolean, arg2: boolean)
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        static read(arg0: Internal.FriendlyByteBuf_): Internal.ClientboundRulesPacket;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        readonly allowRadarOnServer: boolean;
        readonly allowCaveModeOnServer: boolean;
        readonly allowNetherCaveModeOnServer: boolean;
    }
    type ClientboundRulesPacket_ = ClientboundRulesPacket;
    interface ZetaLoadModule extends Internal.Annotation {
        abstract name(): string;
        abstract loadPhase(): number;
        abstract clientReplacement(): boolean;
        abstract hashCode(): number;
        abstract toString(): string;
        abstract category(): string;
        abstract enabledByDefault(): boolean;
        abstract antiOverlap(): string[];
        abstract annotationType(): typeof Internal.Annotation;
        abstract equals(arg0: any): boolean;
        abstract description(): string;
    }
    type ZetaLoadModule_ = ZetaLoadModule;
    interface GeneratedClassLoader {
        abstract linkClass(arg0: typeof any): void;
        abstract defineClass(arg0: string, arg1: number[]): typeof any;
    }
    type GeneratedClassLoader_ = GeneratedClassLoader;
    class IFChainBuffer {
        constructor()
        applyChainWaveBuffer(...arg0: any_[]): void;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        calculateChainFlapBuffer(arg0: number, arg1: number, arg2: number, arg3: Internal.LivingEntity_): void;
        calculateChainFlapBufferHead(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.LivingEntity_): void;
        calculateChainPitchBuffer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.LivingEntity_): void;
        applyChainFlapBuffer(...arg0: any_[]): void;
        notify(): void;
        applyChainSwingBufferReverse(...arg0: any_[]): void;
        wait(arg0: number, arg1: number): void;
        calculateChainFlapBuffer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.LivingEntity_): void;
        calculateChainWaveBuffer(arg0: number, arg1: number, arg2: number, arg3: Internal.LivingEntity_): void;
        hashCode(): number;
        calculateChainSwingBuffer(arg0: number, arg1: number, arg2: number, arg3: Internal.LivingEntity_): void;
        applyChainFlapBufferReverse(...arg0: any_[]): void;
        wait(): void;
        wait(arg0: number): void;
        applyChainWaveBufferReverse(...arg0: any_[]): void;
        resetRotations(): void;
        equals(arg0: any): boolean;
        applyChainSwingBuffer(...arg0: any_[]): void;
        calculateChainWaveBuffer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.LivingEntity_): void;
        calculateChainSwingBuffer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.LivingEntity_): void;
        get class(): typeof any
    }
    type IFChainBuffer_ = IFChainBuffer;
    class ItemModThrowable extends Internal.ItemMod {
        constructor(arg0: Internal.Rarity_, arg1: any_)
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
    type ItemModThrowable_ = ItemModThrowable;
    class BlazeBurnerBlock$HeatLevel extends Internal.Enum<Internal.BlazeBurnerBlock$HeatLevel> implements Internal.StringRepresentable {
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        getSerializedName(): string;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        nextActiveLevel(): this;
        getDeclaringClass(): typeof Internal.BlazeBurnerBlock$HeatLevel;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        toString(): string;
        static valueOf(arg0: string): Internal.BlazeBurnerBlock$HeatLevel;
        notifyAll(): void;
        static byIndex(arg0: number): Internal.BlazeBurnerBlock$HeatLevel;
        name(): string;
        compareTo(arg0: Internal.BlazeBurnerBlock$HeatLevel_): number;
        "compareTo(com.simibubi.create.content.processing.burner.BlazeBurnerBlock$HeatLevel)"(arg0: Internal.BlazeBurnerBlock$HeatLevel_): number;
        hashCode(): number;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        isAtLeast(arg0: Internal.BlazeBurnerBlock$HeatLevel_): boolean;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.BlazeBurnerBlock$HeatLevel>>;
        static values(): Internal.BlazeBurnerBlock$HeatLevel[];
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.BlazeBurnerBlock$HeatLevel
        static readonly KINDLED: (Internal.BlazeBurnerBlock$HeatLevel) & (Internal.BlazeBurnerBlock$HeatLevel);
        static readonly NONE: (Internal.BlazeBurnerBlock$HeatLevel) & (Internal.BlazeBurnerBlock$HeatLevel);
        static readonly SEETHING: (Internal.BlazeBurnerBlock$HeatLevel) & (Internal.BlazeBurnerBlock$HeatLevel);
        static readonly FADING: (Internal.BlazeBurnerBlock$HeatLevel) & (Internal.BlazeBurnerBlock$HeatLevel);
        static readonly SMOULDERING: (Internal.BlazeBurnerBlock$HeatLevel) & (Internal.BlazeBurnerBlock$HeatLevel);
    }
    type BlazeBurnerBlock$HeatLevel_ = "smouldering" | "kindled" | BlazeBurnerBlock$HeatLevel | "fading" | "seething" | "none";
    class ChunkPos {
        constructor(arg0: BlockPos_)
        constructor(arg0: number, arg1: number)
        constructor(arg0: number)
        getClass(): typeof any;
        static getX(arg0: number): number;
        getWorldPosition(): BlockPos;
        static maxFromRegion(arg0: number, arg1: number): Internal.ChunkPos;
        static getZ(arg0: number): number;
        getMinBlockZ(): number;
        static "rangeClosed(net.minecraft.world.level.ChunkPos,net.minecraft.world.level.ChunkPos)"(arg0: Internal.ChunkPos_, arg1: Internal.ChunkPos_): Internal.Stream<Internal.ChunkPos>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static hash(arg0: number, arg1: number): number;
        getMinBlockX(): number;
        getRegionLocalX(): number;
        getMaxBlockX(): number;
        getMaxBlockZ(): number;
        getMiddleBlockX(): number;
        getMiddleBlockZ(): number;
        getRegionLocalZ(): number;
        getBlockAt(arg0: number, arg1: number, arg2: number): BlockPos;
        static rangeClosed(arg0: Internal.ChunkPos_, arg1: number): Internal.Stream<Internal.ChunkPos>;
        getRegionZ(): number;
        toString(): string;
        getChessboardDistance(arg0: Internal.ChunkPos_): number;
        static minFromRegion(arg0: number, arg1: number): Internal.ChunkPos;
        getRegionX(): number;
        static asLong(arg0: number, arg1: number): number;
        notifyAll(): void;
        getMiddleBlockPosition(arg0: number): BlockPos;
        hashCode(): number;
        getBlockX(arg0: number): number;
        static asLong(arg0: BlockPos_): number;
        getBlockZ(arg0: number): number;
        static "rangeClosed(net.minecraft.world.level.ChunkPos,int)"(arg0: Internal.ChunkPos_, arg1: number): Internal.Stream<Internal.ChunkPos>;
        static rangeClosed(arg0: Internal.ChunkPos_, arg1: Internal.ChunkPos_): Internal.Stream<Internal.ChunkPos>;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        toLong(): number;
        get class(): typeof any
        get worldPosition(): BlockPos
        get minBlockZ(): number
        get minBlockX(): number
        get regionLocalX(): number
        get maxBlockX(): number
        get maxBlockZ(): number
        get middleBlockX(): number
        get middleBlockZ(): number
        get regionLocalZ(): number
        get regionZ(): number
        get regionX(): number
        static readonly REGION_SIZE: (32) & (number);
        static readonly ZERO: (Internal.ChunkPos) & (Internal.ChunkPos);
        readonly z: number;
        static readonly INVALID_CHUNK_POS: (8053347149716602) & (number);
        readonly x: number;
        static readonly REGION_MAX_INDEX: (31) & (number);
    }
    type ChunkPos_ = ChunkPos;
    interface SkullBlock$Type {
    }
    type SkullBlock$Type_ = SkullBlock$Type;
    class ElementBuffer {
        constructor(arg0: number, arg1: number, arg2: Internal.VertexFormat$IndexType_)
        getClass(): typeof any;
        hashCode(): number;
        bind(): void;
        getElementCount(): number;
        toString(): string;
        wait(): void;
        getEboIndexType(): Internal.VertexFormat$IndexType;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get elementCount(): number
        get eboIndexType(): Internal.VertexFormat$IndexType
    }
    type ElementBuffer_ = ElementBuffer;
    interface IGuiProperties {
        abstract getGuiTop(): number;
        abstract getScreenHeight(): number;
        abstract getScreenWidth(): number;
        abstract getGuiLeft(): number;
        abstract getScreenClass(): typeof Internal.Screen;
        abstract getGuiXSize(): number;
        abstract getGuiYSize(): number;
        get guiTop(): number
        get screenHeight(): number
        get screenWidth(): number
        get guiLeft(): number
        get screenClass(): typeof Internal.Screen
        get guiXSize(): number
        get guiYSize(): number
    }
    type IGuiProperties_ = IGuiProperties;
    interface Object2IntMap <K> extends Internal.Map<K, number>, Internal.Object2IntFunction<K> {
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2IntFunction<T>;
        /**
         * @deprecated
        */
        mergeInt(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        containsValue(arg0: any): boolean;
        /**
         * @deprecated
        */
        "remove(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): boolean;
        /**
         * @deprecated
        */
        "merge(java.lang.Object,java.lang.Object,java.util.function.BiFunction)"(arg0: any, arg1: any, arg2: Internal.BiFunction_<any, any, any>): any;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2IntFunction;
        apply(arg0: K): number;
        abstract values(): Internal.IntCollection;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        "mergeInt(java.lang.Object,int,java.util.function.BiFunction)"(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        "replace(java.lang.Object,java.lang.Object,java.lang.Object)"(arg0: any, arg1: any, arg2: any): boolean;
        /**
         * @deprecated
        */
        putIfAbsent(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        computeIntIfAbsentPartial(arg0: K, arg1: Internal.Object2IntFunction_<K>): number;
        replace(arg0: K, arg1: number, arg2: number): boolean;
        andThenInt(arg0: Internal.Int2IntFunction_): Internal.Object2IntFunction<K>;
        computeIfAbsent(arg0: K, arg1: Internal.Object2IntFunction_<K>): number;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2IntFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        replaceAll(arg0: Internal.BiFunction_<K, number, number>): void;
        replace(arg0: K, arg1: number): number;
        applyAsInt(arg0: K): number;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Integer)"(arg0: any, arg1: number): number;
        ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        andThenByte(arg0: Internal.Int2ByteFunction_): Internal.Object2ByteFunction<K>;
        compute(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        getOrDefault(arg0: any, arg1: number): number;
        "remove(java.lang.Object,int)"(arg0: any, arg1: number): boolean;
        /**
         * @deprecated
        */
        putIfAbsent(arg0: any, arg1: any): any;
        of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        put(arg0: K, arg1: number): number;
        andThenFloat(arg0: Internal.Int2FloatFunction_): Internal.Object2FloatFunction<K>;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2IntFunction<T>;
        of<K, V>(): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        "putIfAbsent(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        replace(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        "replace(java.lang.Object,java.lang.Integer,java.lang.Integer)"(arg0: K, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
        */
        "replace(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        "merge(java.lang.Object,java.lang.Integer,java.util.function.BiFunction)"(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        computeIfAbsent(arg0: K, arg1: Internal.ToIntFunction_<K>): number;
        /**
         * @deprecated
        */
        replace(arg0: K, arg1: number, arg2: number): boolean;
        "put(java.lang.Object,int)"(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Integer)"(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        "merge(java.lang.Object,int,java.util.function.BiFunction)"(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        remove(arg0: any, arg1: any): boolean;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        abstract size(): number;
        abstract putAll(arg0: Internal.Map_<K, number>): void;
        abstract object2IntEntrySet(): Internal.ObjectSet<Internal.Object2IntMap$Entry<K>>;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2IntFunction;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        andThenChar(arg0: Internal.Int2CharFunction_): Internal.Object2CharFunction<K>;
        computeIfPresent(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2IntFunction;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        forEach(arg0: Internal.BiConsumer_<K, number>): void;
        "computeIfAbsent(java.lang.Object,it.unimi.dsi.fastutil.objects.Object2IntFunction)"(arg0: K, arg1: Internal.Object2IntFunction_<K>): number;
        "mergeInt(java.lang.Object,int,java.util.function.IntBinaryOperator)"(arg0: K, arg1: number, arg2: Internal.IntBinaryOperator_): number;
        abstract defaultReturnValue(): number;
        removeInt(arg0: any): number;
        "putIfAbsent(java.lang.Object,int)"(arg0: K, arg1: number): number;
        andThenObject<T>(arg0: Internal.Int2ObjectFunction_<T>): Internal.Object2ObjectFunction<K, T>;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        "computeIfAbsent(java.lang.Object,java.util.function.ToIntFunction)"(arg0: K, arg1: Internal.ToIntFunction_<K>): number;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        keySet(): Internal.Set<any>;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2IntFunction;
        abstract getInt(arg0: any): number;
        /**
         * @deprecated
        */
        replace(arg0: any, arg1: any, arg2: any): boolean;
        copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        "mergeInt(java.lang.Object,int,it.unimi.dsi.fastutil.ints.IntBinaryOperator)"(arg0: K, arg1: number, arg2: it.unimi.dsi.fastutil.ints.IntBinaryOperator_): number;
        abstract "containsValue(int)"(arg0: number): boolean;
        andThenDouble(arg0: Internal.Int2DoubleFunction_): Internal.Object2DoubleFunction<K>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        computeIntIfAbsent(arg0: K, arg1: Internal.ToIntFunction_<K>): number;
        andThenLong(arg0: Internal.Int2LongFunction_): Internal.Object2LongFunction<K>;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        "getOrDefault(java.lang.Object,int)"(arg0: any, arg1: number): number;
        mergeInt(arg0: K, arg1: number, arg2: Internal.IntBinaryOperator_): number;
        abstract isEmpty(): boolean;
        "replace(java.lang.Object,int)"(arg0: K, arg1: number): number;
        entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        merge(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        merge(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        andThenShort(arg0: Internal.Int2ShortFunction_): Internal.Object2ShortFunction<K>;
        abstract containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        "putIfAbsent(java.lang.Object,java.lang.Integer)"(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        entrySet(): Internal.ObjectSet<Internal.Map$Entry<K, number>>;
        abstract containsValue(arg0: number): boolean;
        "replace(java.lang.Object,int,int)"(arg0: K, arg1: number, arg2: number): boolean;
        computeInt(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        remove(arg0: any, arg1: number): boolean;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        "replace(java.lang.Object,java.lang.Integer)"(arg0: K, arg1: number): number;
        computeIntIfPresent(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2IntFunction;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2IntFunction;
        mergeInt(arg0: K, arg1: number, arg2: it.unimi.dsi.fastutil.ints.IntBinaryOperator_): number;
        putIfAbsent(arg0: K, arg1: number): number;
        abstract hashCode(): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        abstract defaultReturnValue(arg0: number): void;
        andThenReference<T>(arg0: Internal.Int2ReferenceFunction_<T>): Internal.Object2ReferenceFunction<K, T>;
        "computeIfAbsent(java.lang.Object,java.util.function.Function)"(arg0: K, arg1: Internal.Function_<K, number>): number;
        /**
         * @deprecated
        */
        replace(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        "containsValue(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        merge(arg0: any, arg1: any, arg2: Internal.BiFunction_<any, any, any>): any;
        abstract equals(arg0: any): boolean;
        computeIfAbsent(arg0: K, arg1: Internal.Function_<K, number>): number;
        get empty(): boolean
    }
    type Object2IntMap_<K> = Object2IntMap<K>;
    class LargeAmaranitaBlock extends Internal.EndPlantBlock implements Internal.SurvivesOnEndBone, Internal.BehaviourPlant {
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
        isBonemealSuccess(world: Internal.Level_, random: Internal.RandomSource_, pos: BlockPos_, state: Internal.BlockState_): boolean;
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
        compostingChance(): number;
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
        canSurvive(state: Internal.BlockState_, world: Internal.LevelReader_, pos: BlockPos_): boolean;
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
        canPlantOn(block: Internal.Block_): boolean;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        getPottedState(): string;
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
        canBePotted(): boolean;
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
        get pottedState(): string
        set hasCollision(arg0: boolean)
        static readonly SHAPE: Internal.EnumProperty<Internal.BlockProperties$TripleShape>;
    }
    type LargeAmaranitaBlock_ = LargeAmaranitaBlock;
    class ParticleEngine implements Internal.IParticleEngine, Internal.PhasedParticleEngine, Internal.MixinParticleManager, Internal.ParticleEngineAccessor, Internal.PreparableReloadListener, Internal.ParticleManagerAccessor {
        constructor(arg0: Internal.ClientLevel_, arg1: Internal.TextureManager_)
        setParticleRenderingPhase(phase: Internal.ParticleRenderingPhase_): void;
        getClass(): typeof any;
        createTrackingEmitter(arg0: Internal.Entity_, arg1: Internal.ParticleOptions_): void;
        /**
         * @deprecated
        */
        render(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource$BufferSource_, arg2: Internal.LightTexture_, arg3: Internal.Camera_, arg4: number): void;
        dsurround_getSpriteAwareFactories(): Internal.Map<any, any>;
        destroy(arg0: BlockPos_, arg1: Internal.BlockState_): void;
        static setParticleTextureSheets$dsurround_$md$9765b0$5(arg0: Internal.List_<any>): void;
        createParticle(arg0: Internal.ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): Internal.Particle;
        notify(): void;
        /**
         * @deprecated
        */
        register<T extends Internal.ParticleOptions>(arg0: Internal.ParticleType_<T>, arg1: Internal.ParticleProvider$Sprite_<T>): void;
        wait(arg0: number, arg1: number): void;
        add(arg0: Internal.Particle_): void;
        createTrackingEmitter(arg0: Internal.Entity_, arg1: Internal.ParticleOptions_, arg2: number): void;
        render(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource$BufferSource_, arg2: Internal.LightTexture_, arg3: Internal.Camera_, arg4: number, arg5: Internal.Frustum_): void;
        /**
         * @deprecated
        */
        "register(net.minecraft.core.particles.ParticleType,net.minecraft.client.particle.ParticleProvider)"<T extends Internal.ParticleOptions>(arg0: Internal.ParticleType_<T>, arg1: Internal.ParticleProvider_<T>): void;
        /**
         * @deprecated
        */
        register<T extends Internal.ParticleOptions>(arg0: Internal.ParticleType_<T>, arg1: Internal.ParticleEngine$SpriteParticleRegistration_<T>): void;
        getName(): string;
        addBlockHitEffects(arg0: BlockPos_, arg1: Internal.BlockHitResult_): void;
        static dsurround_getParticleTextureSheets(): Internal.List<Internal.ParticleRenderType>;
        setLevel(arg0: Internal.ClientLevel_): void;
        static getParticleTextureSheets$dsurround_$md$9765b0$4(): Internal.List<any>;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        /**
         * @deprecated
        */
        register<T extends Internal.ParticleOptions>(arg0: Internal.ParticleType_<T>, arg1: Internal.ParticleProvider_<T>): void;
        countParticles(): string;
        /**
         * @deprecated
        */
        "register(net.minecraft.core.particles.ParticleType,net.minecraft.client.particle.ParticleProvider$Sprite)"<T extends Internal.ParticleOptions>(arg0: Internal.ParticleType_<T>, arg1: Internal.ParticleProvider$Sprite_<T>): void;
        /**
         * @deprecated
        */
        "register(net.minecraft.core.particles.ParticleType,net.minecraft.client.particle.ParticleEngine$SpriteParticleRegistration)"<T extends Internal.ParticleOptions>(arg0: Internal.ParticleType_<T>, arg1: Internal.ParticleEngine$SpriteParticleRegistration_<T>): void;
        toString(): string;
        crack(arg0: BlockPos_, arg1: Internal.Direction_): void;
        static dsurround_setParticleTextureSheets(sheets: Internal.List_<Internal.ParticleRenderType>): void;
        notifyAll(): void;
        create$getProviders(): Internal.Map<any, any>;
        tick(): void;
        connector$getProviders(): Internal.Int2ObjectMap<any>;
        createPostParticle(postProcessing: Internal.PostProcessing_, pParticleData: Internal.ParticleOptions_, pX: number, pY: number, pZ: number, pXSpeed: number, pYSpeed: number, pZSpeed: number): Internal.Particle;
        hashCode(): number;
        wait(): void;
        close(): void;
        wait(arg0: number): void;
        dsurround_createParticle(arg0: Internal.ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): Internal.Particle;
        equals(arg0: any): boolean;
        getParticleAtlasTexture(): Internal.TextureAtlas;
        set particleRenderingPhase(phase: Internal.ParticleRenderingPhase_)
        get class(): typeof any
        set particleTextureSheets$dsurround_$md$9765b0$5(arg0: Internal.List_<any>)
        get name(): string
        set level(arg0: Internal.ClientLevel_)
        get particleTextureSheets$dsurround_$md$9765b0$4(): Internal.List<any>
        get particleAtlasTexture(): Internal.TextureAtlas
        level: Internal.ClientLevel;
        readonly textureAtlas: Internal.TextureAtlas;
        readonly spriteSets: Internal.Map<ResourceLocation, Internal.ParticleEngine$MutableSpriteSet>;
    }
    type ParticleEngine_ = ParticleEngine;
    interface VertexSorting$DistanceFunction {
        abstract apply(arg0: Vec3f_): number;
        (arg0: Vec3f): number;
    }
    type VertexSorting$DistanceFunction_ = VertexSorting$DistanceFunction | ((arg0: Vec3f)=> number);
    class TenaneaFeature extends Internal.DefaultFeature {
        constructor()
        static getPosOnSurfaceWG(world: Internal.WorldGenLevel_, pos: BlockPos_): BlockPos;
        getClass(): typeof any;
        safeSetBlock(arg0: Internal.WorldGenLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Predicate_<Internal.BlockState>): void;
        place(arg0: Internal.NoneFeatureConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        static getPosOnSurfaceRaycast(world: Internal.WorldGenLevel_, pos: BlockPos_): BlockPos;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        place(featureConfig: Internal.FeaturePlaceContext_<Internal.NoneFeatureConfiguration>): boolean;
        static getYOnSurfaceWG(world: Internal.WorldGenLevel_, x: number, z: number): number;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        markAboveForPostProcessing(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.NoneFeatureConfiguration, Feature<Internal.NoneFeatureConfiguration>>>;
        static getYOnSurface(world: Internal.WorldGenLevel_, x: number, z: number): number;
        static isStone(arg0: Internal.BlockState_): boolean;
        static getPosOnSurface(world: Internal.WorldGenLevel_, pos: BlockPos_): BlockPos;
        toString(): string;
        setBlock(arg0: Internal.LevelWriter_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        hashCode(): number;
        static getPosOnSurfaceRaycast(world: Internal.WorldGenLevel_, pos: BlockPos_, dist: number): BlockPos;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type TenaneaFeature_ = TenaneaFeature;
    interface CapabilityItem$InsertItem {
        abstract insert(arg0: Internal.BlockEntity_, arg1: number, arg2: Internal.ItemStack_, arg3: boolean): Internal.ItemStack;
        (arg0: Internal.BlockEntity, arg1: number, arg2: Internal.ItemStack, arg3: boolean): Internal.ItemStack_;
    }
    type CapabilityItem$InsertItem_ = ((arg0: Internal.BlockEntity, arg1: number, arg2: Internal.ItemStack, arg3: boolean)=> Internal.ItemStack_) | CapabilityItem$InsertItem;
    interface Kind1 <F extends Internal.K1, Mu extends Internal.Kind1$Mu> extends Internal.App<Mu, F> {
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>): Internal.Products$P11<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>;
        group<T1, T2, T3, T4, T5, T6>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>): Internal.Products$P6<F, T1, T2, T3, T4, T5, T6>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>, arg12: Internal.App_<F, T13>, arg13: Internal.App_<F, T14>, arg14: Internal.App_<F, T15>): Internal.Products$P15<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>;
        unbox<F extends Internal.K1, Proof extends Internal.Kind1$Mu>(arg0: Internal.App_<Proof, F>): Internal.Kind1<F, Proof>;
        group<T1, T2>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>): Internal.Products$P2<F, T1, T2>;
        group<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>): Internal.Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>): Internal.Products$P10<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>;
        group<T1, T2, T3, T4, T5, T6, T7>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>): Internal.Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>, arg12: Internal.App_<F, T13>): Internal.Products$P13<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>): Internal.Products$P9<F, T1, T2, T3, T4, T5, T6, T7, T8, T9>;
        group<T1, T2, T3, T4>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>): Internal.Products$P4<F, T1, T2, T3, T4>;
        group<T1, T2, T3, T4, T5>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>): Internal.Products$P5<F, T1, T2, T3, T4, T5>;
        group<T1>(arg0: Internal.App_<F, T1>): Internal.Products$P1<F, T1>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>, arg12: Internal.App_<F, T13>, arg13: Internal.App_<F, T14>): Internal.Products$P14<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>): Internal.Products$P12<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>, arg12: Internal.App_<F, T13>, arg13: Internal.App_<F, T14>, arg14: Internal.App_<F, T15>, arg15: Internal.App_<F, T16>): Internal.Products$P16<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>;
        group<T1, T2, T3>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>): Internal.Products$P3<F, T1, T2, T3>;
    }
    type Kind1_<F extends Internal.K1, Mu extends Internal.Kind1$Mu> = Kind1<F, Mu>;
    interface LivingChangeTargetEvent$ILivingTargetType {
    }
    type LivingChangeTargetEvent$ILivingTargetType_ = LivingChangeTargetEvent$ILivingTargetType;
    abstract class LivingEntity extends Internal.Entity implements Internal.LivingEntityExtensions, Internal.AccessorLivingEntity, Internal.Attackable, Internal.LivingAccessor, Internal.LivingEntityAccessor, artifacts.mixin.accessors.LivingEntityAccessor, Internal.EntityDropChanceAccessor, com.simibubi.create.foundation.mixin.accessor.LivingEntityAccessor, Internal.ICitadelDataEntity, net.darkhax.bookshelf.mixin.accessors.entity.AccessorLivingEntity, Internal.ILivingEntityExtended, Internal.IForgeLivingEntity, Internal.HeadRotationEntityAccessor, Internal.DarknessIncarnateUserAccessor, earth.terrarium.adastra.mixins.common.LivingEntityAccessor, Internal.LivingEntityKJS, Internal.WatcherPossessionAccessor {
        constructor(arg0: Internal.EntityType_<Internal.LivingEntity>, arg1: Internal.Level_)
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isSuppressingBounce(): boolean;
        isOnFire(): boolean;
        getDeathSound(): Internal.SoundEvent;
        handler$chh000$ars_nouveau$removed(arg0: Internal.CallbackInfo_): void;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setMaxUpStep(arg0: number): void;
        getFallFlyingTicks(): number;
        runCommandSilent(command: string): number;
        setPosition(x: number, y: number, z: number): void;
        chunkPosition(): Internal.ChunkPos;
        handler$dkl000$alexscaves$ac_onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>, arg1: Internal.CallbackInfo_): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        updateWalkAnimation(arg0: number): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        onEffectUpdated(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_): void;
        updateSwingTime(): void;
        setMotionZ(z: number): void;
        getAttachmentProgress(arg0: number): number;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        getBlockY(): number;
        isSpectator(): boolean;
        isAlwaysExperienceDropper(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getHealth(): number;
        getMaxHealth(): number;
        getRandomZ(arg0: number): number;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        isInWaterRainOrBubble(): boolean;
        getRemovalReason(): Internal.Entity$RemovalReason;
        redirect$beh000$fabric_entity_events_v1$beforeEntityKilled(livingEntity: Internal.LivingEntity_, source: Internal.DamageSource_, amount: number): boolean;
        onFlap(): void;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        actuallyHurt(arg0: Internal.DamageSource_, arg1: number): void;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        setLevel(arg0: Internal.Level_): void;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        getBlock(): Internal.BlockContainerJS;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        getArmorValue(): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getKillCredit(): this;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        sinkInFluid(arg0: Internal.FluidType_): void;
        tryCheckInsideBlocks(): void;
        hasPermissions(arg0: number): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        onInsideBlock(arg0: Internal.BlockState_): void;
        isAutoSpinAttack(): boolean;
        getRemainingFireTicks(): number;
        limitPistonMovement(arg0: Vec3d_): Vec3d;
        onlyOpCanSetNbt(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        fireImmune(): boolean;
        dsurround_getEffectInfo(): Internal.EntityEffectInfo;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        getZ(arg0: number): number;
        handler$cgm000$ars_nouveau$decreaseAirSupply(arg0: number, arg1: Internal.CallbackInfoReturnable_<any>): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        getTicksFrozen(): number;
        tickRidden(arg0: Internal.Player_, arg1: Vec3d_): void;
        getRandomX(arg0: number): number;
        handler$zml000$curios$curio$canFreeze(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getDynamicLightZ(): number;
        create$callSpawnItemParticles(arg0: Internal.ItemStack_, arg1: number): void;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        getVoicePitch(): number;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        setSleepingPos(arg0: BlockPos_): void;
        isDescending(): boolean;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        getLastHurtByPlayer(): Internal.Player;
        getYHeadRot(): number;
        verifyEquippedItem(arg0: Internal.ItemStack_): void;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        makeBrain(arg0: Internal.Dynamic_<any>): Internal.Brain<any>;
        isAffectedByFluids(): boolean;
        canAddPassenger(arg0: Internal.Entity_): boolean;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        handler$dkl000$alexscaves$ac_collide(arg0: Vec3d_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        damageSources(): Internal.DamageSources;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        swing(): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        handler$cgm000$ars_nouveau$getJumpPower(arg0: Internal.CallbackInfoReturnable_<any>): void;
        canStartSwimming(): boolean;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        canBreatheUnderwater(): boolean;
        die(arg0: Internal.DamageSource_): void;
        removeAllEffects(): boolean;
        getLeashOffset(): Vec3d;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        onClimbable(): boolean;
        isAttackable(): boolean;
        getRiddenSpeed(arg0: Internal.Player_): number;
        processPortalCooldown(): void;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isUnderWater(): boolean;
        stopRiding(): void;
        getSwimHighSpeedSplashSound(): Internal.SoundEvent;
        createWitherRose(arg0: Internal.LivingEntity_): void;
        getX(arg0: number): number;
        getLegsArmorItem(): Internal.ItemStack;
        getLuminance(): number;
        callUnsetRemoved(): void;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        removeSoulSpeed(): void;
        shouldDropExperience(): boolean;
        hasPassenger(arg0: Internal.Entity_): boolean;
        be_getTravelerState(): Internal.TravelerState;
        getDynamicLightX(): number;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): net.minecraft.network.chat.Component;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        getArrowCount(): number;
        tickHeadTurn(arg0: number, arg1: number): number;
        create$callSetLevel(arg0: Internal.Level_): void;
        calculateViewVector(arg0: number, arg1: number): Vec3d;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        makeBoundingBox(): Internal.AABB;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        setPos(arg0: number, arg1: number, arg2: number): void;
        notify(): void;
        getFirstTick(): boolean;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        setXaero_OPAC_deadPlayer(arg0: Internal.UUID_): void;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        getStringUuid(): string;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        abstract getMainArm(): Internal.HumanoidArm;
        handler$cbb000$betterend$be_canBeAffected(mobEffectInstance: Internal.MobEffectInstance_, info: Internal.CallbackInfoReturnable_<any>): void;
        getRotationVector(): Internal.Vec2;
        getHurtDir(): number;
        isSprinting(): boolean;
        getMotionY(): number;
        getOffhandItem(): Internal.ItemStack;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        callGetJumpPower(): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        clearSleepingPos(): void;
        abstract ac_setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        canSpawnSprintParticle(): boolean;
        canRide(arg0: Internal.Entity_): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        getLastHurtMob(): this;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        getOnPos(arg0: number): BlockPos;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        isAddedToWorld(): boolean;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        getDrinkingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getLastDamageSource(): Internal.DamageSource;
        getSoundSource(): Internal.SoundSource;
        isJumping(): boolean;
        setNoActionTime(arg0: number): void;
        setMovementSpeedAddition(speed: number): void;
        removeAfterChangingDimensions(): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        getSharedFlag(arg0: number): boolean;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        checkFallDamage(arg0: number, arg1: boolean, arg2: Internal.BlockState_, arg3: BlockPos_): void;
        tryAddFrost(): void;
        quark$lastHurtByPlayer(): Internal.Player;
        wrapOperation$dio000$artifacts$travel(state: Internal.BlockState_, level: Internal.LevelReader_, pos: BlockPos_, entity: Internal.Entity_, original: Internal.Operation_<any>): number;
        removeVehicle(): void;
        defineSynchedData(): void;
        checkInsideBlocks(): void;
        setZ(z: number): void;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        createHoverEvent(): Internal.HoverEvent;
        handler$dlc000$alexscaves$ac_livingTick(arg0: Internal.CallbackInfo_): void;
        bookshelf$makePoofParticles(): void;
        serverAiStep(): void;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        getExitPortal(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: boolean, arg3: Internal.WorldBorder_): Internal.Optional<Internal.BlockUtil$FoundRectangle>;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playMuffledStepSound(arg0: Internal.BlockState_, arg1: BlockPos_): void;
        canChangeDirection(): boolean;
        shouldUpdateDynamicLight(): boolean;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        dropFromLootTable(arg0: Internal.DamageSource_, arg1: boolean): void;
        getArmorCoverPercentage(): number;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        waterSwimSound(): void;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
        lavaHurt(): void;
        handleDamageEvent(arg0: Internal.DamageSource_): void;
        updateUsingItem(arg0: Internal.ItemStack_): void;
        getFabricBalmData(): Internal.CompoundTag;
        canChangeDimensions(): boolean;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getCommandSenderWorld(): Internal.Level;
        quark$lastHurtByPlayerTime(): number;
        getTotalMovementSpeed(): number;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        handler$dkl000$alexscaves$ac_getEyePosition(arg0: Internal.CallbackInfoReturnable_<any>): void;
        blockedByShield(arg0: Internal.LivingEntity_): void;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getFireImmuneTicks(): number;
        getAttributes(): Internal.AttributeMap;
        setMagneticDeltaY(arg0: number): void;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        isSwimming(): boolean;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setRot(arg0: number, arg1: number): void;
        setPortalCooldown(): void;
        getAttackAnim(arg0: number): number;
        setX(x: number): void;
        getPortalWaitTime(): number;
        getBlockStateOn(): Internal.BlockState;
        abstract getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        stopSleeping(): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        isUndead(): boolean;
        repositionEntityAfterLoad(): boolean;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        setUseItemRemaining(arg0: number): void;
        getBlockPosBelowThatAffectsMyMovement(): BlockPos;
        moveTowardsClosestSpace(arg0: number, arg1: number, arg2: number): void;
        getStepHeight(): number;
        static getCollisionHorizontalEscapeVector(arg0: number, arg1: number, arg2: number): Vec3d;
        stopUsingItem(): void;
        isSleeping(): boolean;
        acceptsFailure(): boolean;
        playCombinationStepSounds(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: BlockPos_): void;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        playBlockFallSound(): void;
        getLastHurtMobTimestamp(): number;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        findDimensionEntryPoint(arg0: Internal.ServerLevel_): Internal.PortalInfo;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getStandingEyeHeight(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getMainHandItem(): Internal.ItemStack;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        setSilent(arg0: boolean): void;
        doPush(arg0: Internal.Entity_): void;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        hasExactlyOnePlayerPassenger(): boolean;
        canBeSeenAsEnemy(): boolean;
        getSwimSplashSound(): Internal.SoundEvent;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        hurtArmor(arg0: Internal.DamageSource_, arg1: number): void;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        increaseAirSupply(arg0: number): number;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        spawnSoulSpeedParticle(): void;
        removeFrost(): void;
        isUsingItem(): boolean;
        isAlwaysTicking(): boolean;
        getPortalTimeout(): number;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): InteractionResult;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        /**
         * @deprecated
        */
        couldAcceptPassenger(): boolean;
        getForgePersistentData(): Internal.CompoundTag;
        abstract ac_dropCustomDeathLoot(arg0: Internal.DamageSource_, arg1: number, arg2: boolean): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        jumpFromGround(): void;
        getDamageAfterArmorAbsorb(arg0: Internal.DamageSource_, arg1: number): number;
        maxUpStep(): number;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        onChangedBlock(arg0: BlockPos_): void;
        isAlive(): boolean;
        startSleeping(arg0: BlockPos_): void;
        dsurround_getPotionSwirlColor(): number;
        getBbHeight(): number;
        bookshelf$getDrinkingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        calculateFallDamage(arg0: number, arg1: number): number;
        getLastAttacker(): this;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        updateEffectVisibility(): void;
        handler$ehj000$edenring$eden_checkOutOfWorld(info: Internal.CallbackInfo_): void;
        getPercentFrozen(): number;
        setPortalCooldown(arg0: number): void;
        setPossessedByWatcher(arg0: boolean): void;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        getSoundVolume(): number;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        canRiderInteract(): boolean;
        getViewXRot(arg0: number): number;
        fabric_getAttachments(): Internal.Map<any, any>;
        setPose(arg0: Internal.Pose_): void;
        getReachDistance(): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        updateInvisibilityStatus(): void;
        setLastHurtByPlayer(arg0: Internal.Player_): void;
        "getServer()"(): Internal.MinecraftServer;
        handler$dlc000$alexscaves$ac_increaseAirSupply(arg0: number, arg1: Internal.CallbackInfoReturnable_<any>): void;
        wasExperienceConsumed(): boolean;
        setYBodyRot(arg0: number): void;
        isPushable(): boolean;
        foodEaten(is: Internal.ItemStack_): void;
        onClientRemoval(): void;
        self(): this;
        shouldDropLoot(): boolean;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        getAttached(type: Internal.AttachmentType_<any>): any;
        setRotation(yaw: number, pitch: number): void;
        isDynamicLightEnabled(): boolean;
        getMagneticDeltaZ(): number;
        calculateEntityAnimation(arg0: boolean): void;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        setChestArmorItem(item: Internal.ItemStack_): void;
        checkAutoSpinAttack(arg0: Internal.AABB_, arg1: Internal.AABB_): void;
        bookshelf$getHurtSound(arg0: Internal.DamageSource_): Internal.SoundEvent;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        playStepSound(arg0: BlockPos_, arg1: Internal.BlockState_): void;
        isInvulnerableTo(arg0: Internal.DamageSource_): boolean;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        isSensitiveToWater(): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        maybeBackOffFromEdge(arg0: Vec3d_, arg1: Internal.MoverType_): Vec3d;
        newFloatList(...arg0: number[]): Internal.ListTag;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        "getAttributeValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        isFlapping(): boolean;
        getEyeHeight(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getFeetArmorItem(): Internal.ItemStack;
        static getViewScale(): number;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        isDiscrete(): boolean;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        getCombatTracker(): Internal.CombatTracker;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getBlockJumpFactor(): number;
        tell(message: net.minecraft.network.chat.Component_): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        onSoulSpeedBlock(): boolean;
        /**
         * @deprecated
        */
        goDownInWater(): void;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        canBeSeenByAnyone(): boolean;
        playEntityOnFireExtinguishedSound(): void;
        isFullyFrozen(): boolean;
        handler$dkl000$alexscaves$ac_isInWater(arg0: Internal.CallbackInfoReturnable_<any>): void;
        dropCustomDeathLoot(arg0: Internal.DamageSource_, arg1: number, arg2: boolean): void;
        isInWall(): boolean;
        getMeleeAttackReferencePosition(): Vec3d;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getMagneticDeltaX(): number;
        getScale(): number;
        isSuppressingSlidingDownLadder(): boolean;
        getBlockZ(): number;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(arg0: Internal.SoundEvent_): void;
        getPitch(): number;
        newDoubleList(...arg0: number[]): Internal.ListTag;
        getRandom(): Internal.RandomSource;
        rotate(arg0: Internal.Rotation_): number;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        shouldRiderFaceForward(arg0: Internal.Player_): boolean;
        setMagneticAttachmentFace(arg0: Internal.Direction_): void;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        setMagnetHeadRotation(): void;
        "self()"(): this;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getPrevMagneticAttachmentFace(): Internal.Direction;
        getNoActionTime(): number;
        isVisuallyCrawling(): boolean;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        handler$dkl000$alexscaves$ac_makeBoundingBox(arg0: Internal.CallbackInfoReturnable_<any>): void;
        handler$dkl000$alexscaves$ac_getEyePosition_lerp(arg0: number, arg1: Internal.CallbackInfoReturnable_<any>): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        setFluidTypeHeight(arg0: Internal.FluidType_, arg1: number): void;
        dropExperience(): void;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        handler$cbj000$betterend$be_findDimensionEntryPoint(serverLevel: Internal.ServerLevel_, cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$dkl001$alexscaves$ac_tick(arg0: Internal.CallbackInfo_): void;
        getLastHurtByMob(): this;
        isInWaterOrBubble(): boolean;
        decreaseAirSupply(arg0: number): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        causeFallDamage(arg0: number, arg1: number, arg2: Internal.DamageSource_): boolean;
        handler$cbj000$betterend$be_handleNetherPortal(ci: Internal.CallbackInfo_): void;
        releaseUsingItem(): void;
        getPosition(arg0: number): Vec3d;
        setSlowFallingFlag(arg0: boolean): void;
        modifyExpressionValue$cgk000$ars_nouveau$eytraValidOverride(arg0: boolean): boolean;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        isInRain(): boolean;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        canUpdate(arg0: boolean): void;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        isSteppingCarefully(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        getBlockX(): number;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        isFallFlying(): boolean;
        getEncodeId(): string;
        getY(arg0: number): number;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        canEnterPose(arg0: Internal.Pose_): boolean;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getDynamicLightY(): number;
        setHealth(arg0: number): void;
        attack(arg0: Internal.DamageSource_, arg1: number): boolean;
        getBlockSpeedFactor(): number;
        onInsideBubbleColumn(arg0: boolean): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        setDiscardFriction(arg0: boolean): void;
        handler$bfj000$sliceanddice$baseTick(arg0: Internal.CallbackInfo_): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        isPossessedByWatcher(): boolean;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        getUsedItemHand(): Internal.InteractionHand;
        getBoardingCooldown(): number;
        setDefaultMovementSpeed(speed: number): void;
        onEffectAdded(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        getBrain(): Internal.Brain<any>;
        dsurround_isJumping(): boolean;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        getControllingPassenger(): this;
        getScriptType(): Internal.ScriptType;
        shouldDiscardFriction(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        serializeNBT(): Internal.Tag;
        getDamageAfterMagicAbsorb(arg0: Internal.DamageSource_, arg1: number): number;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getId(): number;
        canBeHitByProjectile(): boolean;
        postMagnetJump(): void;
        getEyeY(): number;
        skipDropExperience(): void;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        abstract setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        tryAddSoulSpeed(): void;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        handler$bia000$dsurround$playStepSound(pos: BlockPos_, state: Internal.BlockState_, ci: Internal.CallbackInfo_): void;
        handler$cbb000$betterend$be_hurt(source: Internal.DamageSource_, amount: number, info: Internal.CallbackInfoReturnable_<any>): void;
        getSwimSound(): Internal.SoundEvent;
        dismountsUnderwater(): boolean;
        isAffectedByPotions(): boolean;
        playerTouch(arg0: Internal.Player_): void;
        addTag(arg0: string): boolean;
        getCitadelEntityData(): Internal.CompoundTag;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        getEyeHeight(arg0: Internal.Pose_): number;
        doWaterSplashEffect(): void;
        getTeam(): Internal.Team;
        setTicksFrozen(arg0: number): void;
        getUseItem(): Internal.ItemStack;
        handler$cbb000$betterend$be_applyEffects(info: Internal.CallbackInfo_): void;
        getMyRidingOffset(): number;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        getFlyingSpeed(): number;
        hasCustomName(): boolean;
        getSwimAmount(arg0: number): number;
        isLiving(): boolean;
        getX(): number;
        dropAllDeathLoot(arg0: Internal.DamageSource_): void;
        isVehicle(): boolean;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        stepOnMagnetBlock(arg0: BlockPos_): void;
        resetDynamicLight(): void;
        handler$bjf000$cofh_core$shield(arg0: Internal.DamageSource_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        getXaero_OPAC_deadPlayer(): Internal.UUID;
        setIsInPowderSnow(arg0: boolean): void;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        handleNetherPortal(): void;
        lambdynlights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
        getTeamId(): string;
        setPortalTimeout(timeout: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setStingerCount(arg0: number): void;
        getBoundingBoxForPose(arg0: Internal.Pose_): Internal.AABB;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        hurtCurrentlyUsedShield(arg0: number): void;
        triggerItemUseEffects(arg0: Internal.ItemStack_, arg1: number): void;
        getLootTableSeed(): number;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        collide(arg0: Vec3d_): Vec3d;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        bookshelf$getFallDamageSound(arg0: number): Internal.SoundEvent;
        handleInsidePortal(arg0: BlockPos_): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        /**
         * @deprecated
        */
        jumpInLiquid(arg0: Internal.TagKey_<Internal.Fluid>): void;
        getLastHurtByPlayerTime(): number;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        onBelowWorld(): void;
        isOnRails(): boolean;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getStingerCount(): number;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        reapplyPosition(): void;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        getDimensionChangingDelay(): number;
        setLivingEntityFlag(arg0: number, arg1: boolean): void;
        getWaterSlowDown(): number;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        isRemoved(): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        getJumpBoostPower(): number;
        resetMagnetHeadRotation(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        refreshDimensions(): void;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        setShiftKeyDown(arg0: boolean): void;
        getEyePosition(arg0: number): Vec3d;
        getPassengers(): Internal.EntityArrayList;
        getRiddenInput(arg0: Internal.Player_, arg1: Vec3d_): Vec3d;
        calculateUpVector(arg0: number, arg1: number): Vec3d;
        spawnSprintParticle(): void;
        modifyExpressionValue$cgk001$ars_nouveau$elytraOverride(arg0: boolean): boolean;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        checkSupportingBlock(arg0: boolean, arg1: Vec3d_): void;
        dropEquipment(): void;
        shouldRemoveSoulSpeed(arg0: Internal.BlockState_): boolean;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        handler$ben000$fabric_entity_events_v1$injectElytraTick(info: Internal.CallbackInfo_): void;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        getFirstPassenger(): Internal.Entity;
        handler$dkl000$alexscaves$ac_turn(arg0: number, arg1: number, arg2: Internal.CallbackInfo_): void;
        heal(arg0: number): void;
        setLastHurtMob(arg0: Internal.Entity_): void;
        getRelativePortalPosition(arg0: Internal.Direction$Axis_, arg1: Internal.BlockUtil$FoundRectangle_): Vec3d;
        setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): InteractionResult;
        removePassenger(arg0: Internal.Entity_): void;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        checkSlowFallDistance(): void;
        tickDeath(): void;
        updateInWaterStateAndDoWaterCurrentPushing(): void;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        setFabricBalmData(arg0: Internal.CompoundTag_): void;
        addPassenger(arg0: Internal.Entity_): void;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getLookAngle(): Vec3d;
        handler$fba000$create$onFireImmune(arg0: Internal.CallbackInfoReturnable_<any>): void;
        modify$cmm000$bclib$be_travel(moveDelta: Vec3d_): Vec3d;
        setArrowCount(arg0: number): void;
        getPermissionLevel(): number;
        getMotionZ(): number;
        setXaero_OPAC_lastChunkEntryDimension(arg0: Internal.ResourceKey_<any>): void;
        nextStep(): number;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        getBedOrientation(): Internal.Direction;
        /**
         * @deprecated
        */
        getBlockStateOnLegacy(): Internal.BlockState;
        ejectPassengers(): void;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        getProfile(): Internal.GameProfile;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        pushEntities(): void;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        handler$chh003$ars_nouveau$onTick(arg0: Internal.CallbackInfo_): void;
        canAttack(arg0: Internal.LivingEntity_): boolean;
        getOffHandItem(): Internal.ItemStack;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        position(): Vec3d;
        static getEquipmentSlotForItem(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        displayFireAnimation(): boolean;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        handler$dgk000$elementalcraft$canStandOnFluid$return(arg0: Internal.FluidState_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        isCrouching(): boolean;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(attribute: Internal.Attribute_): number;
        onLeaveCombat(): void;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        handler$cbn000$ad_astra$adastra$hurt(source: Internal.DamageSource_, amount: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        getFeetBlockState(): Internal.BlockState;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        isHorizontalCollisionMinor(arg0: Vec3d_): boolean;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        setXaero_OPAC_lootOwner(arg0: Internal.UUID_): void;
        setSharedFlag(arg0: number, arg1: boolean): void;
        getSleepingPos(): Internal.Optional<BlockPos>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        damageHeldItem(): void;
        getCustomName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        blockUsingShield(arg0: Internal.LivingEntity_): void;
        processFlappingMovement(): void;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        setMaxHealth(hp: number): void;
        dynamicLightTick(): void;
        getFacing(): Internal.Direction;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        trackingPosition(): Vec3d;
        setMagneticDeltaX(arg0: number): void;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        isInWater(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: Internal.DamageSource_): void;
        unsetRemoved(): void;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        swing(arg0: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        /**
         * @deprecated
        */
        fixupDimensions(): void;
        getRootVehicle(): Internal.Entity;
        save(arg0: Internal.CompoundTag_): boolean;
        handler$chh000$ars_nouveau$onRemove(arg0: Internal.CallbackInfo_): void;
        setBoardingCooldown(arg0: number): void;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        isNoGravity(): boolean;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        setCitadelEntityData(arg0: Internal.CompoundTag_): void;
        setMagneticDeltaZ(arg0: number): void;
        getXaero_OPAC_lastChunkEntryDimension(): Internal.ResourceKey<any>;
        completeUsingItem(): void;
        getXaero_OPAC_lootOwner(): Internal.UUID;
        bookshelf$createHoverEvent(): Internal.HoverEvent;
        isImmobile(): boolean;
        updateSwimming(): void;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getSpeed(): number;
        hasSlowFallingFlag(): boolean;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        wait(): void;
        dsurround_setPotionSwirlColor(color: number): void;
        getUuid(): Internal.UUID;
        setOffHandItem(item: Internal.ItemStack_): void;
        spawn(): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        shouldShowName(): boolean;
        markHurt(): void;
        abstract getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        kill(): void;
        onEnterCombat(): void;
        playSwimSound(arg0: number): void;
        animateHurt(arg0: number): void;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        getJumpPower(): number;
        brainProvider(): Internal.Brain$Provider<any>;
        getHeadArmorItem(): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        deserializeNBT(arg0: Internal.Tag_): void;
        positionRider(arg0: Internal.Entity_, arg1: Internal.Entity$MoveFunction_): void;
        removeEffectParticles(): void;
        revive(): void;
        getBbWidth(): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        addDeltaMovement(arg0: Vec3d_): void;
        getHurtSound(arg0: Internal.DamageSource_): Internal.SoundEvent;
        handler$dlc000$alexscaves$ac_calculateEntityAnimation(arg0: boolean, arg1: Internal.CallbackInfo_): void;
        handler$cbn000$ad_astra$adastra$travel(travelVector: Vec3d_, ci: Internal.CallbackInfo_): void;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        "getName()"(): net.minecraft.network.chat.Component;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTypeName(): net.minecraft.network.chat.Component;
        getTicksRequiredToFreeze(): number;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        doAutoAttackOnTouch(arg0: Internal.LivingEntity_): void;
        artifacts$getPocketPistonLength(): number;
        getUsername(): string;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        getPrimaryStepSoundBlockPos(arg0: BlockPos_): BlockPos;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        setJumping(arg0: boolean): void;
        getPickResult(): Internal.ItemStack;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        getRandomY(): number;
        onEffectRemoved(arg0: Internal.MobEffectInstance_): void;
        getDisplayName(): net.minecraft.network.chat.Component;
        getMobType(): Internal.MobType;
        handler$bhh000$pneumaticcraft$onOnEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.CallbackInfo_): void;
        travel(arg0: Vec3d_): void;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        shouldBeSaved(): boolean;
        fabric_hasPersistentAttachments(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        hurtHelmet(arg0: Internal.DamageSource_, arg1: number): void;
        removeTag(arg0: string): boolean;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        notifyAll(): void;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        discard(): void;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        setNoGravity(arg0: boolean): void;
        getUseItemRemainingTicks(): number;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        isControlledByLocalInstance(): boolean;
        handler$ehj000$edenring$eden_entityTick(info: Internal.CallbackInfo_): void;
        isMonster(): boolean;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        setId(arg0: number): void;
        getHorizontalFacing(): Internal.Direction;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getType(): string;
        isDamageSourceBlocked(arg0: Internal.DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        abstract ac_getEquipmentDropChance(arg0: Internal.EquipmentSlot_): number;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        checkDespawn(): void;
        getDynamicLightWorld(): Internal.Level;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        playHurtSound(arg0: Internal.DamageSource_): void;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        getMagneticAttachmentFace(): Internal.Direction;
        lerpHeadTo(arg0: number, arg1: number): void;
        canDisableShield(): boolean;
        doesEmitEquipEvent(arg0: Internal.EquipmentSlot_): boolean;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        getMovementEmission(): Internal.Entity$MovementEmission;
        distanceToEntity(arg0: Internal.Entity_): number;
        bookshelf$getDeathSound(): Internal.SoundEvent;
        getMagneticDeltaY(): number;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        extinguish(): void;
        setDynamicLightEnabled(arg0: boolean): void;
        moveTo(arg0: Vec3d_): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        updateInWaterStateAndDoFluidPushing(): boolean;
        "swing(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        dsurround_setEffectInfo(info: Internal.EntityEffectInfo_): void;
        lambdynlights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        tickEffects(): void;
        isInvertedHealAndHarm(): boolean;
        handler$cbn000$ad_astra$adastra$tick(ci: Internal.CallbackInfo_): void;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getClassification(arg0: boolean): MobCategory;
        isFreezing(): boolean;
        runCommand(command: string): number;
        setSharedFlagOnFire(arg0: boolean): void;
        set defaultMovementSpeedMultiplier(speed: number)
        get suppressingBounce(): boolean
        get onFire(): boolean
        get deathSound(): Internal.SoundEvent
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get fallFlyingTicks(): number
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        set motionZ(z: number)
        get blockY(): number
        get spectator(): boolean
        get alwaysExperienceDropper(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get persistentData(): Internal.CompoundTag
        get health(): number
        get maxHealth(): number
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        set level(arg0: Internal.Level_)
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        get block(): Internal.BlockContainerJS
        get name(): net.minecraft.network.chat.Component
        get controlledVehicle(): Internal.Entity
        get armorValue(): number
        get killCredit(): Internal.LivingEntity
        get autoSpinAttack(): boolean
        get remainingFireTicks(): number
        get maxFallDistance(): number
        get ticksFrozen(): number
        get dynamicLightZ(): number
        get voicePitch(): number
        set statusMessage(message: net.minecraft.network.chat.Component_)
        set sleepingPos(arg0: BlockPos_)
        get descending(): boolean
        get lastHurtByPlayer(): Internal.Player
        get YHeadRot(): number
        set absorptionAmount(arg0: number)
        get affectedByFluids(): boolean
        set deltaMovement(arg0: Vec3d_)
        get baby(): boolean
        get glowing(): boolean
        get leashOffset(): Vec3d
        get attackable(): boolean
        get underWater(): boolean
        get swimHighSpeedSplashSound(): Internal.SoundEvent
        get legsArmorItem(): Internal.ItemStack
        get luminance(): number
        get deltaMovement(): Vec3d
        get dynamicLightX(): number
        set secondsOnFire(arg0: number)
        get "displayName()"(): net.minecraft.network.chat.Component
        get lootTable(): ResourceLocation
        get ticksUsingItem(): number
        get arrowCount(): number
        get defaultMovementSpeed(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        get firstTick(): boolean
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        set xaero_OPAC_deadPlayer(arg0: Internal.UUID_)
        get stringUuid(): string
        set swimming(arg0: boolean)
        get mainArm(): Internal.HumanoidArm
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get sprinting(): boolean
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        get lastHurtMob(): Internal.LivingEntity
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get lastDamageSource(): Internal.DamageSource
        get soundSource(): Internal.SoundSource
        get jumping(): boolean
        set noActionTime(arg0: number)
        set movementSpeedAddition(speed: number)
        get pose(): Internal.Pose
        set z(z: number)
        get y(): number
        get blocking(): boolean
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get armorCoverPercentage(): number
        get airSupply(): number
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        get fabricBalmData(): Internal.CompoundTag
        get commandSenderWorld(): Internal.Level
        get totalMovementSpeed(): number
        get fireImmuneTicks(): number
        get attributes(): Internal.AttributeMap
        set magneticDeltaY(arg0: number)
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get portalWaitTime(): number
        get blockStateOn(): Internal.BlockState
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get undead(): boolean
        set useItemRemaining(arg0: number)
        get blockPosBelowThatAffectsMyMovement(): BlockPos
        get stepHeight(): number
        get sleeping(): boolean
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        get lastHurtMobTimestamp(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        get mainHandItem(): Internal.ItemStack
        set silent(arg0: boolean)
        get swimSplashSound(): Internal.SoundEvent
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get usingItem(): boolean
        get alwaysTicking(): boolean
        get portalTimeout(): number
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get inFluidType(): boolean
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get tags(): Internal.Set<string>
        get lastAttacker(): Internal.LivingEntity
        get percentFrozen(): number
        set portalCooldown(arg0: number)
        set possessedByWatcher(arg0: boolean)
        set position(block: Internal.BlockContainerJS_)
        get soundVolume(): number
        set pose(arg0: Internal.Pose_)
        get reachDistance(): number
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        set lastHurtByPlayer(arg0: Internal.Player_)
        get "server()"(): Internal.MinecraftServer
        set YBodyRot(arg0: number)
        get pushable(): boolean
        set motionY(y: number)
        get dynamicLightEnabled(): boolean
        get magneticDeltaZ(): number
        set chestArmorItem(item: Internal.ItemStack_)
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get flapping(): boolean
        get feetArmorItem(): Internal.ItemStack
        get viewScale(): number
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get discrete(): boolean
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        get chestArmorItem(): Internal.ItemStack
        get blockJumpFactor(): number
        get fullyFrozen(): boolean
        get inWall(): boolean
        get meleeAttackReferencePosition(): Vec3d
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get magneticDeltaX(): number
        get scale(): number
        get suppressingSlidingDownLadder(): boolean
        get blockZ(): number
        get silent(): boolean
        get pitch(): number
        get random(): Internal.RandomSource
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        set magneticAttachmentFace(arg0: Internal.Direction_)
        get prevMagneticAttachmentFace(): Internal.Direction
        get noActionTime(): number
        get visuallyCrawling(): boolean
        get lastHurtByMob(): Internal.LivingEntity
        get inWaterOrBubble(): boolean
        get portalCooldown(): number
        get item(): Internal.ItemStack
        set slowFallingFlag(arg0: boolean)
        get ignoringBlockTriggers(): boolean
        get inRain(): boolean
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        get blockX(): number
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get fallFlying(): boolean
        get encodeId(): string
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        set totalMovementSpeedMultiplier(speed: number)
        get dynamicLightY(): number
        set health(arg0: number)
        get blockSpeedFactor(): number
        get eyePosition(): Vec3d
        get eyeHeight(): number
        set discardFriction(arg0: boolean)
        get yaw(): number
        get possessedByWatcher(): boolean
        get usedItemHand(): Internal.InteractionHand
        get boardingCooldown(): number
        set defaultMovementSpeed(speed: number)
        get brain(): Internal.Brain<any>
        set customNameVisible(arg0: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        get eyeY(): number
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get swimSound(): Internal.SoundEvent
        get affectedByPotions(): boolean
        get citadelEntityData(): Internal.CompoundTag
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get myRidingOffset(): number
        get flyingSpeed(): number
        get living(): boolean
        get x(): number
        get vehicle(): boolean
        get xaero_OPAC_deadPlayer(): Internal.UUID
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: net.minecraft.network.chat.Component_)
        get teamId(): string
        set portalTimeout(timeout: number)
        set stingerCount(arg0: number)
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get lootTableSeed(): number
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        get potionEffects(): Internal.EntityPotionEffectsJS
        get lastHurtByPlayerTime(): number
        get onRails(): boolean
        get stingerCount(): number
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        get waterSlowDown(): number
        set yaw(arg0: number)
        get pickRadius(): number
        get removed(): boolean
        get jumpBoostPower(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get experienceReward(): number
        get firstPassenger(): Internal.Entity
        set lastHurtMob(arg0: Internal.Entity_)
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        set fabricBalmData(arg0: Internal.CompoundTag_)
        get lookAngle(): Vec3d
        set arrowCount(arg0: number)
        get permissionLevel(): number
        get motionZ(): number
        set xaero_OPAC_lastChunkEntryDimension(arg0: Internal.ResourceKey_<any>)
        get invisible(): boolean
        get bedOrientation(): Internal.Direction
        /**
         * @deprecated
        */
        get blockStateOnLegacy(): Internal.BlockState
        get profile(): Internal.GameProfile
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get offHandItem(): Internal.ItemStack
        get crouching(): boolean
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        set xaero_OPAC_lootOwner(arg0: Internal.UUID_)
        get sleepingPos(): Internal.Optional<BlockPos>
        get customName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get boundingBoxForCulling(): Internal.AABB
        set magneticDeltaX(arg0: number)
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get inWater(): boolean
        get rootVehicle(): Internal.Entity
        set boardingCooldown(arg0: number)
        get noGravity(): boolean
        set citadelEntityData(arg0: Internal.CompoundTag_)
        set magneticDeltaZ(arg0: number)
        get xaero_OPAC_lastChunkEntryDimension(): Internal.ResourceKey<any>
        get xaero_OPAC_lootOwner(): Internal.UUID
        get immobile(): boolean
        get speed(): number
        get uuid(): Internal.UUID
        set offHandItem(item: Internal.ItemStack_)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get jumpPower(): number
        get headArmorItem(): Internal.ItemStack
        get bbWidth(): number
        get "name()"(): net.minecraft.network.chat.Component
        get typeName(): net.minecraft.network.chat.Component
        get ticksRequiredToFreeze(): number
        get username(): string
        get pickable(): boolean
        set YHeadRot(arg0: number)
        set jumping(arg0: boolean)
        get pickResult(): Internal.ItemStack
        get "mainHandItem()"(): Internal.ItemStack
        get absorptionAmount(): number
        get randomY(): number
        get displayName(): net.minecraft.network.chat.Component
        get mobType(): Internal.MobType
        get passengersRidingOffset(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get lastClimbablePos(): Internal.Optional<BlockPos>
        set id(arg0: number)
        get horizontalFacing(): Internal.Direction
        get type(): string
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        get dynamicLightWorld(): Internal.Level
        get magneticAttachmentFace(): Internal.Direction
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get movementEmission(): Internal.Entity$MovementEmission
        get magneticDeltaY(): number
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        set dynamicLightEnabled(arg0: boolean)
        get invertedHealAndHarm(): boolean
        get freezing(): boolean
        set sharedFlagOnFire(arg0: boolean)
        static readonly DEATH_DURATION: (20) & (number);
        charmofundying$totem: Internal.Pair<any, any>;
        yBodyRotO: number;
        deathScore: number;
        noActionTime: number;
        deathTime: number;
        yya: number;
        run: number;
        static readonly SWING_DURATION: (6) & (number);
        static readonly LIVING_ENTITY_FLAG_IS_USING: (1) & (number);
        lerpX: number;
        attackAnim: number;
        static readonly ARMOR_SLOT_OFFSET: (100) & (number);
        lastHurt: number;
        readonly timeOffs: number;
        oAttackAnim: number;
        attributes: Internal.AttributeMap;
        swinging: boolean;
        static readonly HAND_SLOTS: (2) & (number);
        rotOffs: number;
        static readonly SLEEPING_DIMENSIONS: (Internal.EntityDimensions) & (Internal.EntityDimensions);
        removeStingerTime: number;
        dead: boolean;
        animStepO: number;
        lerpY: number;
        static readonly USE_ITEM_INTERVAL: (4) & (number);
        readonly walkAnimation: Internal.WalkAnimationState;
        static readonly MIN_MOVEMENT_DISTANCE: (0.003) & (number);
        useItemRemaining: number;
        brain: Internal.Brain<any>;
        hurtDuration: number;
        attackStrengthTicker: number;
        zza: number;
        oRun: number;
        static readonly LIVING_ENTITY_FLAG_SPIN_ATTACK: (4) & (number);
        jumping: boolean;
        static readonly EQUIPMENT_SLOT_OFFSET: (98) & (number);
        autoSpinAttackTicks: number;
        removeArrowTime: number;
        lerpYRot: number;
        lyHeadRot: number;
        lastHurtByPlayerTime: number;
        swingingArm: Internal.InteractionHand;
        lerpZ: number;
        lerpXRot: number;
        static readonly DATA_LIVING_ENTITY_FLAGS: Internal.EntityDataAccessor<number>;
        hurtTime: number;
        lastHurtByPlayer: Internal.Player;
        lerpHeadSteps: number;
        static readonly PLAYER_HURT_EXPERIENCE_TIME: (100) & (number);
        static readonly DEFAULT_BASE_GRAVITY: (0.08) & (number);
        yBodyRot: number;
        yHeadRot: number;
        yHeadRotO: number;
        fallFlyTicks: number;
        static readonly ARMOR_SLOTS: (4) & (number);
        static readonly LIVING_ENTITY_FLAG_OFF_HAND: (2) & (number);
        static readonly DEFAULT_EYE_HEIGHT: (1.74) & (number);
        swingTime: number;
        animStep: number;
        lerpSteps: number;
        readonly invulnerableDuration: number;
        xxa: number;
        useItem: Internal.ItemStack;
        readonly rotA: number;
        effectsDirty: boolean;
        static readonly EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: (0.5) & (number);
    }
    type LivingEntity_ = LivingEntity;
    class StrawBaleBlock extends Internal.HayBlock {
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
        static rotatePillar(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
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
    type StrawBaleBlock_ = StrawBaleBlock;
    class AbstractChestUpgradeKitItem$Reinforced extends Internal.AbstractChestUpgradeKitItem {
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
    type AbstractChestUpgradeKitItem$Reinforced_ = AbstractChestUpgradeKitItem$Reinforced;
    class ListPoolElement extends Internal.StructurePoolElement {
        constructor(arg0: Internal.List_<Internal.StructurePoolElement>, arg1: Internal.StructureTemplatePool$Projection_)
        getBoundingBox(arg0: Internal.StructureTemplateManager_, arg1: BlockPos_, arg2: Internal.Rotation_): Internal.BoundingBox;
        getClass(): typeof any;
        static projectionCodec<E extends Internal.StructurePoolElement>(): Internal.RecordCodecBuilder<E, Internal.StructureTemplatePool$Projection>;
        notify(): void;
        getGroundLevelDelta(): number;
        wait(arg0: number, arg1: number): void;
        place(arg0: Internal.StructureTemplateManager_, arg1: Internal.WorldGenLevel_, arg2: Internal.StructureManager_, arg3: Internal.ChunkGenerator_, arg4: BlockPos_, arg5: BlockPos_, arg6: Internal.Rotation_, arg7: Internal.BoundingBox_, arg8: Internal.RandomSource_, arg9: boolean): boolean;
        getProjection(): Internal.StructureTemplatePool$Projection;
        static empty(): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.EmptyPoolElement>;
        static list(arg0: Internal.List_<Internal.Function<Internal.StructureTemplatePool$Projection, Internal.StructurePoolElement>>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.ListPoolElement>;
        static legacy(arg0: string, arg1: Internal.Holder_<Internal.StructureProcessorList>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.LegacySinglePoolElement>;
        getType(): Internal.StructurePoolElementType<any>;
        toString(): string;
        getShuffledJigsawBlocks(arg0: Internal.StructureTemplateManager_, arg1: BlockPos_, arg2: Internal.Rotation_, arg3: Internal.RandomSource_): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        static single(arg0: string): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.SinglePoolElement>;
        notifyAll(): void;
        handleDataMarker(arg0: Internal.LevelAccessor_, arg1: Internal.StructureTemplate$StructureBlockInfo_, arg2: BlockPos_, arg3: Internal.Rotation_, arg4: Internal.RandomSource_, arg5: Internal.BoundingBox_): void;
        getSize(arg0: Internal.StructureTemplateManager_, arg1: Internal.Rotation_): Vec3i;
        setProjection(arg0: Internal.StructureTemplatePool$Projection_): Internal.StructurePoolElement;
        hashCode(): number;
        static legacy(arg0: string): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.LegacySinglePoolElement>;
        wait(): void;
        wait(arg0: number): void;
        static single(arg0: string, arg1: Internal.Holder_<Internal.StructureProcessorList>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.SinglePoolElement>;
        equals(arg0: any): boolean;
        static feature(arg0: Internal.Holder_<Internal.PlacedFeature>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.FeaturePoolElement>;
        get class(): typeof any
        get groundLevelDelta(): number
        get projection(): Internal.StructureTemplatePool$Projection
        get type(): Internal.StructurePoolElementType<any>
        set projection(arg0: Internal.StructureTemplatePool$Projection_)
        static readonly CODEC: Internal.Codec<Internal.ListPoolElement>;
    }
    type ListPoolElement_ = ListPoolElement;
    class TippedArrowItem extends Internal.ArrowItem {
        constructor(arg0: Internal.Item$Properties_)
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
        createArrow(arg0: Internal.Level_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_): Internal.AbstractArrow;
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
        isInfinite(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Player_): boolean;
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
    type TippedArrowItem_ = TippedArrowItem;
    class BioReactorBlock extends Internal.IndustrialBlock<Internal.BioReactorTile> {
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
        "getLootTable(com.hrznstudio.titanium.datagenerator.loot.block.BasicBlockLootTables)"(arg0: Internal.BasicBlockLootTables_): Internal.LootTable$Builder;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        getTileEntityFactory(): Internal.BlockEntityType$BlockEntitySupplier<Internal.BioReactorTile>;
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
        getRotationType(): Internal.RotatableBlock$RotationType;
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
        getLootTable(arg0: Internal.BasicBlockLootTables_): Internal.LootTable$Builder;
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
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        getDynamicDrops(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): Internal.NonNullList<Internal.ItemStack>;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
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
        "getLootTable(java.lang.Object)"(arg0: any): Internal.LootTable$Builder;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getTicker<R extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<R>): Internal.BlockEntityTicker<R>;
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
        setItemGroup(arg0: Internal.TitaniumTab_): void;
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
        getBoundingBoxes(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.List<Internal.VoxelShape>;
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
        getTileClass(): typeof Internal.BioReactorTile;
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
        hasIndividualRenderVoxelShape(): boolean;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        registerRecipe(arg0: Internal.Consumer_<Internal.FinishedRecipe>): void;
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
        hasCustomBoxes(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
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
        getTile(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.BioReactorTile>;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        getItemGroup(): Internal.TitaniumTab;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getLootTable(arg0: any): Internal.LootTable$Builder;
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
        get tileEntityFactory(): Internal.BlockEntityType$BlockEntitySupplier<Internal.BioReactorTile>
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get rotationType(): Internal.RotatableBlock$RotationType
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
        set itemGroup(arg0: Internal.TitaniumTab_)
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        get tileClass(): typeof Internal.BioReactorTile
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get itemGroup(): Internal.TitaniumTab
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type BioReactorBlock_ = BioReactorBlock;
    interface IIngredientComponentStorageWrapperHandler <T, M, S> {
        abstract wrapComponentStorage(arg0: S): Internal.IIngredientComponentStorage<T, M>;
        abstract wrapStorage(arg0: Internal.IIngredientComponentStorage_<T, M>): S;
        getComponentStorage(arg0: Internal.ICapabilityProvider_, arg1: Internal.Direction_): Internal.IIngredientComponentStorage<T, M>;
        abstract getComponent(): Internal.IngredientComponent<T, M>;
        abstract getStorage(arg0: Internal.ICapabilityProvider_, arg1: Internal.Direction_): Internal.LazyOptional<S>;
        get component(): Internal.IngredientComponent<T, M>
    }
    type IIngredientComponentStorageWrapperHandler_<T, M, S> = IIngredientComponentStorageWrapperHandler<T, M, S>;
    class RecordingContext extends icyllis.arc3d.engine.Context {
        getErrorWriter(): Internal.PrintWriter;
        getClass(): typeof any;
        getContextInfo(): Internal.SharedContextInfo;
        isImageCompatible(colorType: number): boolean;
        getPipelineStateCache(): Internal.PipelineStateCache;
        getCompressedBackendFormat(compressionType: number): Internal.BackendFormat;
        static move<T extends Internal.RefCounted>(sp: T): T;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getThreadSafeCache(): Internal.ThreadSafeCache;
        checkOwnerThread(): void;
        unref(): void;
        getContextID(): number;
        static move<T extends Internal.RefCounted>(sp: T, that: T): T;
        matches(c: icyllis.arc3d.engine.Context_): boolean;
        getOwnerThread(): Internal.Thread;
        unique(): boolean;
        getMaxSurfaceSampleCount(colorType: number): number;
        getMaxTextureSize(): number;
        getOptions(): Internal.ContextOptions;
        getCaps(): Internal.Caps;
        toString(): string;
        getRefCntAcquire(): number;
        notifyAll(): void;
        ref(): void;
        static create<T extends Internal.RefCounted>(sp: T, that: T): T;
        getRenderTaskManager(): Internal.RenderTaskManager;
        static makeRecording(context: Internal.SharedContextInfo_): Internal.RecordingContext;
        getRefCntVolatile(): number;
        getRefCnt(): number;
        hashCode(): number;
        isDiscarded(): boolean;
        getDefaultBackendFormat(colorType: number, renderable: boolean): Internal.BackendFormat;
        wait(): void;
        getMaxRenderTargetSize(): number;
        wait(arg0: number): void;
        isSurfaceCompatible(colorType: number): boolean;
        getBackend(): number;
        static create<T extends Internal.RefCounted>(that: T): T;
        equals(arg0: any): boolean;
        findOrCreateGraphicsPipelineState(pipelineInfo: Internal.PipelineInfo_): Internal.GraphicsPipelineState;
        getSurfaceProvider(): Internal.SurfaceProvider;
        isOwnerThread(): boolean;
        get errorWriter(): Internal.PrintWriter
        get class(): typeof any
        get contextInfo(): Internal.SharedContextInfo
        get pipelineStateCache(): Internal.PipelineStateCache
        get threadSafeCache(): Internal.ThreadSafeCache
        get contextID(): number
        get ownerThread(): Internal.Thread
        get maxTextureSize(): number
        get options(): Internal.ContextOptions
        get caps(): Internal.Caps
        get refCntAcquire(): number
        get renderTaskManager(): Internal.RenderTaskManager
        get refCntVolatile(): number
        get refCnt(): number
        get discarded(): boolean
        get maxRenderTargetSize(): number
        get backend(): number
        get surfaceProvider(): Internal.SurfaceProvider
        get ownerThread(): boolean
    }
    type RecordingContext_ = RecordingContext;
    class CrystaliteChestplate extends Internal.CrystaliteArmor implements Internal.MobEffectApplier {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(stack: Internal.ItemStack_, level: Internal.Level_, lines: Internal.List_<net.minecraft.network.chat.Component>, tooltip: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        static hasFullSet(owner: Internal.LivingEntity_): boolean;
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
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        getDefense(): number;
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
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        static dispenseArmor(arg0: Internal.BlockSource_, arg1: Internal.ItemStack_): boolean;
        getMaterial(): Internal.ArmorMaterial;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        applyEffect(owner: Internal.LivingEntity_): void;
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
        getDefaultAttributeModifiers(equipmentSlot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getToughness(): number;
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
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getItemModel(resourceLocation: ResourceLocation_): Internal.BlockModel;
        getType(): Internal.ArmorItem$Type;
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
        static applySetEffect(owner: Internal.LivingEntity_): void;
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
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getEquipmentSlot(): Internal.EquipmentSlot;
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
        getEquipSound(): Internal.SoundEvent;
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
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
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
        get defense(): number
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        get material(): Internal.ArmorMaterial
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get toughness(): number
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get type(): Internal.ArmorItem$Type
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
        get equipmentSlot(): Internal.EquipmentSlot
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
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type CrystaliteChestplate_ = CrystaliteChestplate;
    class HighestCeilingType extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_, arg1: Internal.Holder_<Internal.StructureTemplatePool>, arg2: Internal.Optional_<ResourceLocation>, arg3: number, arg4: number, arg5: number, arg6: number, arg7: string, arg8: number)
        static simpleCodec<S extends Internal.Structure>(arg0: Internal.Function_<Internal.Structure$StructureSettings, S>): Internal.Codec<S>;
        getClass(): typeof any;
        findGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        generate(arg0: Internal.RegistryAccess_, arg1: Internal.ChunkGenerator_, arg2: Internal.BiomeSource_, arg3: Internal.RandomState_, arg4: Internal.StructureTemplateManager_, arg5: number, arg6: Internal.ChunkPos_, arg7: number, arg8: Internal.LevelHeightAccessor_, arg9: Internal.Predicate_<Internal.Holder<Internal.Biome>>): Internal.StructureStart;
        biomes(): Internal.HolderSet<Internal.Biome>;
        findValidGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        step(): Internal.GenerationStep$Decoration;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        type(): Internal.StructureType<any>;
        modifiableStructureInfo(): Internal.ModifiableStructureInfo;
        static getLowestY(arg0: Internal.Structure$GenerationContext_, arg1: number, arg2: number, arg3: number, arg4: number): number;
        toString(): string;
        spawnOverrides(): Internal.Map<MobCategory, Internal.StructureSpawnOverride>;
        notifyAll(): void;
        terrainAdaptation(): Internal.TerrainAdjustment;
        static getLowestY(arg0: Internal.Structure$GenerationContext_, arg1: number, arg2: number): number;
        adjustBoundingBox(arg0: Internal.BoundingBox_): Internal.BoundingBox;
        static onTopOfChunkCenter(arg0: Internal.Structure$GenerationContext_, arg1: Internal.Heightmap$Types_, arg2: Internal.Consumer_<Internal.StructurePiecesBuilder>): Internal.Optional<Internal.Structure$GenerationStub>;
        hashCode(): number;
        static settingsCodec<S extends Internal.Structure>(arg0: Internal.RecordCodecBuilder$Instance_<S>): Internal.RecordCodecBuilder<S, Internal.Structure$StructureSettings>;
        /**
         * @deprecated
        */
        getLowestYIn5by5BoxOffset7Blocks(arg0: Internal.Structure$GenerationContext_, arg1: Internal.Rotation_): BlockPos;
        wait(): void;
        wait(arg0: number): void;
        afterPlace(arg0: Internal.WorldGenLevel_, arg1: Internal.StructureManager_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: Internal.BoundingBox_, arg5: Internal.ChunkPos_, arg6: Internal.PiecesContainer_): void;
        equals(arg0: any): boolean;
        getModifiedStructureSettings(): Internal.Structure$StructureSettings;
        get class(): typeof any
        set tingsCodec(arg0: Internal.RecordCodecBuilder$Instance_<S>)
        get modifiedStructureSettings(): Internal.Structure$StructureSettings
        static readonly CODEC: Internal.Codec<Internal.HighestCeilingType>;
    }
    type HighestCeilingType_ = HighestCeilingType;
    interface IClaimsManagerAPI <PCI extends Internal.IPlayerClaimInfoAPI<any>, WCM extends Internal.IDimensionClaimsManagerAPI<any>> {
        abstract get(arg0: ResourceLocation_, arg1: BlockPos_): Internal.IPlayerChunkClaimAPI;
        abstract get(arg0: ResourceLocation_, arg1: Internal.ChunkPos_): Internal.IPlayerChunkClaimAPI;
        abstract getPlayerInfo(arg0: Internal.UUID_): PCI;
        abstract getTracker(): Internal.IClaimsManagerTrackerAPI;
        abstract "get(net.minecraft.resources.ResourceLocation,net.minecraft.core.BlockPos)"(arg0: ResourceLocation_, arg1: BlockPos_): Internal.IPlayerChunkClaimAPI;
        abstract "get(net.minecraft.resources.ResourceLocation,net.minecraft.world.level.ChunkPos)"(arg0: ResourceLocation_, arg1: Internal.ChunkPos_): Internal.IPlayerChunkClaimAPI;
        abstract getDimension(arg0: ResourceLocation_): WCM;
        abstract hasPlayerInfo(arg0: Internal.UUID_): boolean;
        abstract getPlayerInfoStream(): Internal.Stream<PCI>;
        abstract get(arg0: ResourceLocation_, arg1: number, arg2: number): Internal.IPlayerChunkClaimAPI;
        abstract getDimensionStream(): Internal.Stream<WCM>;
        get tracker(): Internal.IClaimsManagerTrackerAPI
        get playerInfoStream(): Internal.Stream<PCI>
        get dimensionStream(): Internal.Stream<WCM>
    }
    type IClaimsManagerAPI_<PCI extends Internal.IPlayerClaimInfoAPI<any>, WCM extends Internal.IDimensionClaimsManagerAPI<any>> = IClaimsManagerAPI<PCI, WCM>;
}
declare namespace de.keksuccino.fancymenu.mixin.mixins.common.client {
    interface IMixinScreen {
        abstract getNarratablesFancyMenu(): Internal.List<Internal.NarratableEntry>;
        abstract getRenderablesFancyMenu(): Internal.List<Internal.Renderable>;
        abstract get_initialized_FancyMenu(): boolean;
        abstract getChildrenFancyMenu(): Internal.List<Internal.GuiEventListener>;
        abstract invokeRemoveWidgetFancyMenu(arg0: Internal.GuiEventListener_): void;
        get narratablesFancyMenu(): Internal.List<Internal.NarratableEntry>
        get renderablesFancyMenu(): Internal.List<Internal.Renderable>
        get _initialized_FancyMenu(): boolean
        get childrenFancyMenu(): Internal.List<Internal.GuiEventListener>
    }
    type IMixinScreen_ = IMixinScreen;
}
